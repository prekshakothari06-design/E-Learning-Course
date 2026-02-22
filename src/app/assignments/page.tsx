import { FileText, PenLine, CheckSquare, Brain, MessageSquare, Upload, Clock } from "lucide-react";
import { modules } from "@/lib/courseData";

const typeConfig: Record<string, { icon: typeof FileText; color: string; bg: string }> = {
  quiz: { icon: CheckSquare, color: "text-blue-500", bg: "bg-blue-50" },
  journal: { icon: PenLine, color: "text-purple-500", bg: "bg-purple-50" },
  scenario: { icon: Brain, color: "text-amber-500", bg: "bg-amber-50" },
  peer: { icon: MessageSquare, color: "text-green-500", bg: "bg-green-50" },
  portfolio: { icon: Upload, color: "text-orange-500", bg: "bg-orange-50" },
};

export default function AssignmentsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-800">Assignments</h1>
          <p className="text-slate-500 mt-1">All formative and summative assessments across the course.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-8 py-8 space-y-6">
        {modules.map((m) => (
          <div key={m.id} className={`bg-white rounded-xl border border-slate-200 p-6 ${m.status === "locked" ? "opacity-50" : ""}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                m.status === "current" ? "bg-orange-100 text-orange-700" :
                m.status === "completed" ? "bg-green-100 text-green-700" :
                "bg-slate-100 text-slate-400"
              }`}>
                {m.id}
              </div>
              <div>
                <h2 className="font-semibold text-slate-800">Module {m.id}: {m.shortTitle}</h2>
                <p className="text-xs text-slate-400 flex items-center gap-1"><Clock size={11} /> Week {m.week}</p>
              </div>
            </div>
            <div className="space-y-2">
              {m.assessments.map((a, i) => {
                const cfg = typeConfig[a.type] || { icon: FileText, color: "text-slate-400", bg: "bg-slate-50" };
                const Icon = cfg.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                    <div className={`w-8 h-8 rounded-lg ${cfg.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon size={15} className={cfg.color} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-slate-700">{a.title}</h3>
                        <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">{a.type}</span>
                        {a.type === "portfolio" && (
                          <span className="text-[10px] font-medium text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded">SUMMATIVE</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{a.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
