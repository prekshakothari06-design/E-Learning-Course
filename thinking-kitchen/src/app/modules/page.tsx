import Link from "next/link";
import {
  CheckCircle2,
  Circle,
  Lock,
  ArrowRight,
  Video,
  Clock,
} from "lucide-react";
import { modules } from "@/lib/courseData";

function StatusBadge({ status }: { status: string }) {
  if (status === "completed")
    return (
      <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full flex items-center gap-1">
        <CheckCircle2 size={12} /> Completed
      </span>
    );
  if (status === "current")
    return (
      <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full flex items-center gap-1">
        <Circle size={12} className="fill-orange-500" /> Current
      </span>
    );
  return (
    <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full flex items-center gap-1">
      <Lock size={11} /> Locked
    </span>
  );
}

export default function ModulesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-800">Course Modules</h1>
          <p className="text-slate-500 mt-1">
            Six modules building from structured observation to independent experimentation.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8 space-y-4">
        {modules.map((m) => {
          const isAccessible = m.status !== "locked";
          const card = (
            <div
              className={`bg-white rounded-xl border p-6 transition-all ${
                isAccessible
                  ? "border-slate-200 hover:shadow-lg hover:border-orange-200 cursor-pointer"
                  : "border-slate-100 opacity-60"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                      m.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : m.status === "current"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {m.id}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Week {m.week}</p>
                    <h2 className="font-semibold text-slate-800">{m.shortTitle}</h2>
                  </div>
                </div>
                <StatusBadge status={m.status} />
              </div>

              <p className="text-sm text-slate-500 leading-relaxed mb-4">{m.purpose}</p>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock size={12} /> Week {m.week}
                </span>
                {m.hasLiveSession && (
                  <span className="flex items-center gap-1 text-purple-500">
                    <Video size={12} /> Live: {m.liveSessionTitle}
                  </span>
                )}
                {isAccessible && (
                  <span className="flex items-center gap-1 text-orange-500 ml-auto font-medium">
                    Open module <ArrowRight size={12} />
                  </span>
                )}
              </div>
            </div>
          );

          return isAccessible ? (
            <Link key={m.id} href={`/modules/${m.slug}`} className="block">
              {card}
            </Link>
          ) : (
            <div key={m.id}>{card}</div>
          );
        })}
      </div>
    </div>
  );
}
