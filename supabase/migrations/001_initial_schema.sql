-- =====================
-- INITIAL SCHEMA FOR AI CODING STUDIO
-- =====================

-- Profiles
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  display_name text,
  created_at timestamptz DEFAULT now()
);

-- Categories (pre-seeded)
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  icon text DEFAULT '',
  order_index int NOT NULL DEFAULT 0
);

-- Problems (pre-seeded + user-created)
CREATE TABLE problems (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE NOT NULL,
  created_by uuid REFERENCES profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
  leetcode_number int,
  is_default boolean NOT NULL DEFAULT false,
  order_index int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Roadmaps (flexible for future)
CREATE TABLE roadmaps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  roadmap_type text NOT NULL DEFAULT 'leetcode',
  config jsonb DEFAULT '{}',
  is_active boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Progress
CREATE TABLE user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  roadmap_id uuid REFERENCES roadmaps(id) ON DELETE CASCADE NOT NULL,
  problem_id uuid REFERENCES problems(id) ON DELETE CASCADE NOT NULL,
  status text NOT NULL DEFAULT 'completed',
  completed_at timestamptz DEFAULT now(),
  UNIQUE(user_id, roadmap_id, problem_id)
);

-- =====================
-- INDEXES
-- =====================
CREATE INDEX idx_problems_category ON problems(category_id);
CREATE INDEX idx_problems_created_by ON problems(created_by);
CREATE INDEX idx_roadmaps_user ON roadmaps(user_id);
CREATE INDEX idx_progress_user ON user_progress(user_id);
CREATE INDEX idx_progress_roadmap ON user_progress(roadmap_id);
CREATE INDEX idx_progress_problem ON user_progress(problem_id);

-- =====================
-- ROW LEVEL SECURITY
-- =====================
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE problems ENABLE ROW LEVEL SECURITY;
ALTER TABLE roadmaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Profiles
CREATE POLICY "Users view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Categories (everyone can read)
CREATE POLICY "Anyone can view categories" ON categories FOR SELECT USING (true);

-- Problems (view default OR own custom problems)
CREATE POLICY "View default or own problems" ON problems FOR SELECT 
  USING (is_default = true OR created_by = auth.uid());
CREATE POLICY "Users can create problems" ON problems FOR INSERT 
  WITH CHECK (auth.uid() = created_by AND is_default = false);
CREATE POLICY "Users can update own problems" ON problems FOR UPDATE 
  USING (created_by = auth.uid() AND is_default = false);
CREATE POLICY "Users can delete own problems" ON problems FOR DELETE 
  USING (created_by = auth.uid() AND is_default = false);

-- Roadmaps
CREATE POLICY "Users view own roadmaps" ON roadmaps FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users manage own roadmaps" ON roadmaps FOR ALL USING (auth.uid() = user_id);

-- Progress
CREATE POLICY "Users view own progress" ON user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users manage own progress" ON user_progress FOR ALL USING (auth.uid() = user_id);

-- =====================
-- TRIGGERS
-- =====================

-- Auto-create profile + default roadmap on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, email) VALUES (new.id, new.email);
  INSERT INTO roadmaps (user_id, title, roadmap_type, config, is_active)
  VALUES (new.id, 'LeetCode Top 150', 'leetcode', '{}', true);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
