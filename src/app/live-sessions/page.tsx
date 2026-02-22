import { Video, Clock, Calendar, ExternalLink } from "lucide-react";
import { courseInfo } from "@/lib/courseData";

export default function LiveSessionsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-800">Live Sessions</h1>
          <p className="text-slate-500 mt-1">
            Four scheduled synchronous sessions across the course (~4.5 hours total).
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-8 py-8 space-y-5">
        {courseInfo.liveSessions.map((session, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Video size={22} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-purple-500 bg-purple-50 px-2 py-0.5 rounded-full">
                    Session {i + 1}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar size={11} /> Week {session.week}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={11} /> {session.duration}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-slate-800">{session.title}</h2>
                <p className="text-sm text-slate-500 mt-1">Module {session.module}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <ExternalLink size={14} /> Join Session
                  </button>
                  <span className="text-xs text-slate-400">Link will be active 15 min before session</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-amber-50 rounded-xl border border-amber-100 p-5">
          <p className="text-sm text-amber-700">
            <strong>Recordings:</strong> All live sessions are recorded and posted to the module page
            within 24 hours. If you cannot attend, an alternative written reflection task is provided.
          </p>
        </div>
      </div>
    </div>
  );
}
