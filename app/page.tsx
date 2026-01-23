import Link from "next/link";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        {/* Top nav */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold">
              AI
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight">
                Interview Mentor
              </div>
              <p className="text-[11px] text-zinc-500">
                Practice smarter. Ship confidence.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <Link href="#features" className="hover:text-zinc-100">
              Features
            </Link>
            <Link href="#how-it-works" className="hover:text-zinc-100">
              How it works
            </Link>
            <Link href="#modes" className="hover:text-zinc-100">
              Modes
            </Link>
            <Link href="/app">
              <Button size="sm" variant="outline" className="border-zinc-700 bg-slate-950/40">
                Open app
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-medium text-blue-200">
              New · AI-powered coding interview practice
            </p>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Turn LeetCode grind into{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  real interview prep
                </span>
                .
              </h1>
              <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
                Practice coding interviews in two modes: a friendly mentor that
                teaches you every step, and a strict AI interviewer that
                simulates real pressure. Track your roadmap, code in-browser,
                and let AI grade your solutions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/app">
                <Button size="lg" className="bg-blue-600 px-6 text-sm font-semibold hover:bg-blue-500">
                  Start practicing
                </Button>
              </Link>
              <Link href="/app">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-700 bg-transparent text-sm text-zinc-200 hover:bg-slate-900/80"
                >
                  Jump into mock interview
                </Button>
              </Link>
              <p className="text-xs text-zinc-500">
                No setup required. Your progress saves when you sign in.
              </p>
            </div>

            <div className="grid gap-4 text-xs text-zinc-400 sm:grid-cols-3">
              <div>
                <div className="text-sm font-semibold text-zinc-100">
                  Roadmap mode
                </div>
                <p className="mt-1">
                  Structured categories and difficulties. Learn problems with
                  an AI mentor beside your editor.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-100">
                  Interview mode
                </div>
                <p className="mt-1">
                  Timed, conversational interviews. AI asks follow-ups and
                  evaluates your code like a real interviewer.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-100">
                  Progress tracking
                </div>
                <p className="mt-1">
                  Mark problems complete, see completion bars per topic, and
                  focus on your weak spots.
                </p>
              </div>
            </div>
          </div>

          {/* Simple “app preview” */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />
            <Card className="relative overflow-hidden border border-slate-800/80 bg-slate-950/80 shadow-2xl shadow-blue-900/30">
              <div className="flex border-b border-slate-800/80 bg-slate-950/80 px-4 py-2 text-xs text-zinc-400">
                <div className="flex flex-1 items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-medium text-zinc-200">Practice session</span>
                  <span className="text-[10px] text-zinc-500">Arrays · Medium</span>
                </div>
                <span className="text-[10px] text-zinc-500">AI interviewer · Live</span>
              </div>
              <div className="grid h-full min-h-[260px] grid-cols-[1.2fr,1.1fr]">
                <div className="flex flex-col border-r border-slate-800/80 bg-slate-950/80 p-3">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                    Chat
                  </p>
                  <div className="flex-1 space-y-2 text-[11px]">
                    <div className="max-w-[80%] rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-zinc-200">
                      Hey! I&apos;ll be your interviewer today. Ready to tackle a
                      Medium array problem?
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-lg bg-blue-600 px-3 py-2 text-white">
                        Yes, let&apos;s start.
                      </div>
                    </div>
                    <div className="max-w-[80%] rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-zinc-200">
                      Great. Implement <code className="text-emerald-300">twoSum</code>. Talk me through your
                      approach as you code.
                    </div>
                  </div>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-900">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
                  </div>
                </div>
                <div className="flex flex-col bg-slate-950/80 p-3">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                    Editor
                  </p>
                  <div className="flex-1 rounded-lg border border-slate-800/80 bg-slate-950 px-3 py-2 text-[11px] text-zinc-300">
                    <pre className="whitespace-pre text-[10px] leading-relaxed">
{`function twoSum(nums, target) {
  // 1. Use a map to track complements
  // 2. Return indices when we find a match
}`}
                    </pre>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10px] text-zinc-500">
                    <span>JavaScript · O(n) expected</span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">
                      Live feedback
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Feature grid */}
        <section id="features" className="space-y-6">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50">
            Built to feel like a real interview, not a problem list.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-slate-800/80 bg-slate-950/80 p-5">
              <div className="mb-2 text-sm font-semibold text-zinc-100">
                Conversational AI mentor
              </div>
              <p className="text-xs text-zinc-400">
                Ask follow-up questions, get hints, and have concepts explained
                in plain language as you work through problems.
              </p>
            </Card>
            <Card className="border-slate-800/80 bg-slate-950/80 p-5">
              <div className="mb-2 text-sm font-semibold text-zinc-100">
                In-browser coding environment
              </div>
              <p className="text-xs text-zinc-400">
                Code in a Monaco-powered editor side-by-side with the chat. No
                context switching, no extra setup.
              </p>
            </Card>
            <Card className="border-slate-800/80 bg-slate-950/80 p-5">
              <div className="mb-2 text-sm font-semibold text-zinc-100">
                Honest feedback &amp; completion tracking
              </div>
              <p className="text-xs text-zinc-400">
                Get specific feedback on correctness and complexity, and mark
                problems complete across categories and difficulties.
              </p>
            </Card>
          </div>
        </section>

        {/* Modes section */}
        <section id="modes" className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50">
            Two modes. One goal: perform better in real interviews.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-slate-800/80 bg-slate-950/80 p-5">
              <div className="mb-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
                Roadmap mode
              </div>
              <div className="mb-2 text-sm font-semibold text-zinc-100">
                Learn systematically with an AI mentor
              </div>
              <p className="mb-3 text-xs text-zinc-400">
                Pick a problem from a curated roadmap. The AI explains patterns,
                guides your thinking, and helps you build intuition instead of
                just memorizing solutions.
              </p>
              <ul className="space-y-1 text-xs text-zinc-400">
                <li>• Topic-based categories and difficulty levels</li>
                <li>• Boilerplate code generated for each problem</li>
                <li>• Completion bars to see your progress at a glance</li>
              </ul>
            </Card>
            <Card className="border-slate-800/80 bg-slate-950/80 p-5">
              <div className="mb-1 text-xs font-medium uppercase tracking-wide text-blue-300">
                Interview mode
              </div>
              <div className="mb-2 text-sm font-semibold text-zinc-100">
                Simulate the real thing with an AI interviewer
              </div>
              <p className="mb-3 text-xs text-zinc-400">
                The AI asks questions, probes your reasoning, and evaluates your
                solutions. You&apos;ll practice talking through your approach
                while you code—just like onsite.
              </p>
              <ul className="space-y-1 text-xs text-zinc-400">
                <li>• Realistic interviewer-style prompts and follow-ups</li>
                <li>• Feedback on correctness, time &amp; space complexity</li>
                <li>• Mark problems complete directly from interview results</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50">
            From zero to ready in three steps.
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-xs text-zinc-400">
            <div>
              <div className="mb-1 text-sm font-semibold text-zinc-100">
                1. Pick a mode
              </div>
              <p>
                Start in roadmap mode to learn patterns, then switch to
                interview mode once you&apos;re comfortable.
              </p>
            </div>
            <div>
              <div className="mb-1 text-sm font-semibold text-zinc-100">
                2. Solve with AI in the loop
              </div>
              <p>
                Code directly in the editor while the AI explains, questions,
                and critiques your work.
              </p>
            </div>
            <div>
              <div className="mb-1 text-sm font-semibold text-zinc-100">
                3. Track your progress
              </div>
              <p>
                Watch your completion bars fill up across topics and difficulties
                as you pass more interviews.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 px-5 py-5 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-sm font-semibold text-zinc-50">
              Ready to practice like it&apos;s the real thing?
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Open the app, pick a problem, and start a session in under 10
              seconds.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/app">
              <Button size="sm" className="bg-blue-600 px-4 text-xs font-semibold hover:bg-blue-500">
                Open practice app
              </Button>
            </Link>
            <Link href="/app">
              <Button
                size="sm"
                variant="outline"
                className="border-zinc-700 bg-transparent text-xs text-zinc-200 hover:bg-slate-900/80"
              >
                Try an AI interview
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

