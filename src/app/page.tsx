import Link from "next/link";
import {
  BookOpen,
  Calendar,
  MessageSquare,
  FileText,
  BarChart3,
  ArrowRight,
  Clock,
  Users,
  Video,
  CheckCircle2,
  Circle,
  Lock,
  Megaphone,
  Flame,
  HelpCircle,
} from "lucide-react";
import { courseInfo, modules } from "@/lib/courseData";

function StatusIcon({ status }: { status: string }) {
  if (status === "completed") return <CheckCircle2 size={20} className="text-green-500" />;
  if (status === "current") return <Circle size={20} className="text-orange-500 fill-orange-500" />;
  return <Lock size={16} className="text-slate-300" />;
}

function StatusLabel({ status }: { status: string }) {
  if (status === "completed") return <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Completed</span>;
  if (status === "current") return <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">Current</span>;
  return <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">Locked</span>;
}

export default function Home() {
  const currentModule = modules.find((m) => m.status === "current");

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="relative px-8 py-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Flame size={20} className="text-orange-400" />
            <span className="text-orange-300 text-sm font-medium tracking-wide uppercase">Blended Online Course</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">The Thinking Kitchen</h1>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl">
            Reasoning, Observation &amp; Experimentation Through Everyday Cooking
          </p>
          <p className="text-slate-400 max-w-2xl leading-relaxed mb-8">
            Welcome to The Thinking Kitchen. This course won&apos;t teach you recipes — it will
            teach you to think like someone who doesn&apos;t need them. Over six weeks, you&apos;ll
            learn to observe, question, decide, and experiment in your own kitchen.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-1.5"><Clock size={15} /> {courseInfo.duration}</div>
            <div className="flex items-center gap-1.5"><BookOpen size={15} /> {courseInfo.effort}</div>
            <div className="flex items-center gap-1.5"><Video size={15} /> {courseInfo.format}</div>
            <div className="flex items-center gap-1.5"><Users size={15} /> Adult Learners</div>
          </div>
        </div>
      </div>

      <div className="px-8 py-8 max-w-5xl mx-auto">
        {/* Three-Tile Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Start Here */}
          <Link href="/start-here" className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-orange-200 transition-all">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
              <HelpCircle size={20} className="text-orange-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">Start Here</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              How this course works, what you&apos;ll need, and how to get the most out of blended delivery.
            </p>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-orange-600 group-hover:gap-2 transition-all">
              Read guide <ArrowRight size={14} />
            </div>
          </Link>

          {/* This Week */}
          <Link
            href={currentModule ? `/modules/${currentModule.slug}` : "/modules"}
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <BookOpen size={20} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">This Week</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {currentModule
                ? `Module ${currentModule.id}: ${currentModule.shortTitle}`
                : "All modules completed!"}
            </p>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
              Go to module <ArrowRight size={14} />
            </div>
          </Link>

          {/* Live Sessions */}
          <Link href="/live-sessions" className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-purple-200 transition-all">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
              <Calendar size={20} className="text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">Live Sessions</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              {courseInfo.liveSessions.length} scheduled sessions. Next: Week {courseInfo.liveSessions[0].week} — {courseInfo.liveSessions[0].title.split("—")[0].trim()}
            </p>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-purple-600 group-hover:gap-2 transition-all">
              View schedule <ArrowRight size={14} />
            </div>
          </Link>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-10">
          <h2 className="text-lg font-semibold text-slate-800 mb-5">Your Learning Journey</h2>
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-5 left-5 right-5 h-0.5 bg-slate-100 z-0" />
            <div className="relative z-10 grid grid-cols-6 gap-2">
              {modules.map((m) => {
                const isAccessible = m.status !== "locked";
                const content = (
                  <div className={`flex flex-col items-center text-center ${!isAccessible ? "opacity-50" : ""}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      m.status === "completed" ? "bg-green-100" :
                      m.status === "current" ? "bg-orange-100" : "bg-slate-50"
                    }`}>
                      <StatusIcon status={m.status} />
                    </div>
                    <p className="text-xs font-medium text-slate-700 leading-tight">{m.shortTitle}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Week {m.week}</p>
                    {m.hasLiveSession && (
                      <span className="mt-1 text-[9px] font-medium text-purple-500 bg-purple-50 px-1.5 py-0.5 rounded-full">LIVE</span>
                    )}
                  </div>
                );
                return isAccessible ? (
                  <Link key={m.id} href={`/modules/${m.slug}`} className="hover:scale-105 transition-transform">
                    {content}
                  </Link>
                ) : (
                  <div key={m.id}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Announcements */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Megaphone size={18} className="text-orange-500" />
              <h2 className="text-lg font-semibold text-slate-800">Announcements</h2>
            </div>
            <div className="space-y-4">
              {courseInfo.announcements.map((a, i) => (
                <div key={i} className="border-l-2 border-orange-200 pl-4 py-1">
                  <p className="text-xs text-slate-400 mb-1">{a.date}</p>
                  <p className="text-sm font-medium text-slate-700">{a.title}</p>
                  <p className="text-sm text-slate-500 mt-0.5">{a.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Links</h2>
            <div className="space-y-2">
              {[
                { label: "Discussion Forums", href: "/discussions", icon: MessageSquare },
                { label: "Assignments", href: "/assignments", icon: FileText },
                { label: "Grades", href: "/grades", icon: BarChart3 },
                { label: "Live Sessions", href: "/live-sessions", icon: Calendar },
                { label: "People", href: "/people", icon: Users },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800 transition-colors"
                >
                  <link.icon size={16} className="text-slate-400" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Course Outcomes Preview */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-10">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">What You&apos;ll Achieve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Identify sources of variability that make recipes unpredictable",
              "Reason about invisible forces shaping cooking outcomes",
              "Interpret structural and textural changes as process evidence",
              "Analyse flavour as a multi-variable, layered phenomenon",
              "Make principled cooking decisions under constraints",
              "Design, run, and reflect on your own kitchen experiments",
            ].map((outcome, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-orange-600">{i + 1}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
