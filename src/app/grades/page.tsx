import { BarChart3, CheckCircle2, Circle, Clock } from "lucide-react";
import { modules } from "@/lib/courseData";

export default function GradesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-800">Grades</h1>
          <p className="text-slate-500 mt-1">Track your progress across all assessments.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-8 py-8">
        {/* Summary Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 size={20} className="text-orange-500" />
            <h2 className="text-lg font-semibold text-slate-800">Course Progress</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{modules.filter(m => m.status === "completed").length}</p>
              <p className="text-xs text-green-500">Completed</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-orange-600">{modules.filter(m => m.status === "current").length}</p>
              <p className="text-xs text-orange-500">In Progress</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-slate-400">{modules.filter(m => m.status === "locked").length}</p>
              <p className="text-xs text-slate-400">Upcoming</p>
            </div>
          </div>
        </div>

        {/* Grade Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Assessment</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Module</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {modules.flatMap((m) =>
                m.assessments.map((a, i) => (
                  <tr key={`${m.id}-${i}`} className={`${m.status === "locked" ? "opacity-40" : ""}`}>
                    <td className="px-6 py-3 text-sm text-slate-700">{a.title}</td>
                    <td className="px-6 py-3 text-sm text-slate-500">M{m.id}</td>
                    <td className="px-6 py-3">
                      <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase">{a.type}</span>
                    </td>
                    <td className="px-6 py-3">
                      {m.status === "completed" ? (
                        <span className="flex items-center gap-1 text-xs text-green-600"><CheckCircle2 size={12} /> Graded</span>
                      ) : m.status === "current" ? (
                        <span className="flex items-center gap-1 text-xs text-orange-500"><Circle size={12} /> Pending</span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs text-slate-400"><Clock size={12} /> Upcoming</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
