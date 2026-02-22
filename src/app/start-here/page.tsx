import {
  Clock,
  Monitor,
  Video,
  BookOpen,
  MessageSquare,
  ChefHat,
  Calendar,
  CheckCircle2,
  Wifi,
  Camera,
  Utensils,
} from "lucide-react";
import { courseInfo } from "@/lib/courseData";

export default function StartHerePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-800">How This Course Works</h1>
          <p className="text-slate-500 mt-1">Everything you need to know before you begin.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8 space-y-8">
        {/* Course Rhythm */}
        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Clock size={20} className="text-orange-500" /> Weekly Rhythm
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Each week follows a consistent pattern. Asynchronous materials are released every Monday.
            You work through them at your own pace. Some weeks include a live session. All submissions
            are due by Sunday 11:59 PM.
          </p>
          <div className="bg-slate-50 rounded-lg p-5 space-y-3">
            {[
              { day: "Monday", desc: "Module materials released — videos, readings, activities", icon: BookOpen },
              { day: "Mon–Wed", desc: "Work through async content at your own pace", icon: Monitor },
              { day: "Wed/Thu (if live)", desc: "Attend scheduled live session (recorded for catch-up)", icon: Video },
              { day: "Thu–Sun", desc: "Complete kitchen tasks, reflections, forum contributions", icon: ChefHat },
              { day: "Sunday 11:59 PM", desc: "Weekly submission deadline", icon: CheckCircle2 },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0">
                  <step.icon size={14} className="text-slate-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">{step.day}</p>
                  <p className="text-xs text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blended Learning */}
        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Video size={20} className="text-purple-500" /> Blended Delivery Explained
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            This course uses a <strong>blended model</strong> — most of your work is self-paced and
            asynchronous, but four sessions across the course are live. Here&apos;s why:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Asynchronous (~70%)</p>
              <ul className="space-y-1.5 text-sm text-blue-700">
                <li>• Video lessons and visual explainers</li>
                <li>• Readings and interactive activities</li>
                <li>• At-home kitchen experiments</li>
                <li>• Reflective writing and journals</li>
                <li>• Discussion forum participation</li>
              </ul>
              <p className="text-xs text-blue-500 mt-3 italic">
                Best for: individual reflection, careful observation, flexible scheduling
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-2">Synchronous (~30%)</p>
              <ul className="space-y-1.5 text-sm text-purple-700">
                <li>• Facilitated group discussions</li>
                <li>• Guided observation labs</li>
                <li>• Decision-making workshops</li>
                <li>• Experiment showcase presentations</li>
              </ul>
              <p className="text-xs text-purple-500 mt-3 italic">
                Best for: dialogic reasoning, guided attention, shared experience
              </p>
            </div>
          </div>
        </section>

        {/* Live Sessions */}
        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-green-500" /> Live Session Schedule
          </h2>
          <div className="space-y-3">
            {courseInfo.liveSessions.map((session, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-purple-700">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700">{session.title}</p>
                  <p className="text-xs text-slate-400">Week {session.week} · Module {session.module} · {session.duration}</p>
                </div>
                <span className="text-xs font-medium text-purple-500 bg-purple-50 px-2.5 py-1 rounded-full">LIVE</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-100">
            <p className="text-sm text-amber-700">
              <strong>Can&apos;t attend live?</strong> All sessions are recorded and posted within 24 hours.
              An alternative written reflection task is provided to compensate for the interactive component.
            </p>
          </div>
        </section>

        {/* What You'll Need */}
        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Utensils size={20} className="text-orange-500" /> What You&apos;ll Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-600">Kitchen</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><ChefHat size={14} className="text-orange-400" /> Any kitchen — no special equipment needed</li>
                <li className="flex items-center gap-2"><Utensils size={14} className="text-orange-400" /> Basic cooking tools (pot, pan, knife, spoon)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-orange-400" /> Common everyday ingredients</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-600">Technology</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><Wifi size={14} className="text-blue-400" /> Reliable internet connection</li>
                <li className="flex items-center gap-2"><Monitor size={14} className="text-blue-400" /> Computer, tablet, or smartphone</li>
                <li className="flex items-center gap-2"><Camera size={14} className="text-blue-400" /> Device camera for documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Assessment Overview */}
        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <CheckCircle2 size={20} className="text-green-500" /> How You&apos;ll Be Assessed
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h3 className="text-sm font-semibold text-blue-700 mb-1">Formative (Weekly)</h3>
              <p className="text-sm text-blue-600">
                Each module includes low-stakes assessments: reflective journals, observation protocols,
                quizzes, scenario responses, and peer discussions. These build skills progressively and
                receive facilitator feedback within 48 hours.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
              <h3 className="text-sm font-semibold text-orange-700 mb-1">Summative (Module 6)</h3>
              <p className="text-sm text-orange-600">
                Your final assessment is a <strong>Personal Experiment Portfolio</strong> — you design a kitchen
                experiment, execute it, document results, write a reflective essay, and review a peer&apos;s work.
                This integrates every skill developed across the course.
              </p>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {[
                  { label: "Design", pct: "20%" },
                  { label: "Documentation", pct: "15%" },
                  { label: "Results & Reasoning", pct: "25%" },
                  { label: "Reflective Essay", pct: "25%" },
                  { label: "Peer Review", pct: "15%" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-lg font-bold text-orange-600">{item.pct}</p>
                    <p className="text-[10px] text-orange-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <MessageSquare size={20} className="text-green-500" /> Community Guidelines
          </h2>
          <div className="space-y-3 text-sm text-slate-600">
            <p>This course is a learning community. We ask that you:</p>
            <ul className="space-y-2 ml-1">
              {[
                "Share honestly — there are no wrong observations, only unexamined ones",
                "Be constructive — peer feedback should help others think deeper, not judge outcomes",
                "Respect diversity — we cook from different traditions, kitchens, and life contexts",
                "Stay curious — ask questions freely in forums and live sessions",
                "Participate regularly — the community learns from your contributions",
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
