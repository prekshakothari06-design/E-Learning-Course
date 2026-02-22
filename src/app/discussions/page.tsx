import { MessageSquare, Users, Clock } from "lucide-react";
import { modules } from "@/lib/courseData";

export default function DiscussionsPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-800">Discussion Forums</h1>
          <p className="text-slate-500 mt-1">Share observations, challenge reasoning, and learn from peers.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-8 py-8 space-y-4">
        {/* Open Kitchen Chat */}
        <div className="bg-white rounded-xl border-2 border-green-200 p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <MessageSquare size={18} className="text-green-600" />
            </div>
            <div>
              <h2 className="font-semibold text-slate-800">Open Kitchen Chat</h2>
              <p className="text-xs text-green-600">Always open · Informal · No requirements</p>
            </div>
          </div>
          <p className="text-sm text-slate-500">
            A casual space for sharing cooking discoveries, asking questions, posting photos, and connecting with fellow learners. No formal prompts — just conversation.
          </p>
        </div>

        {/* Module Forums */}
        {modules.map((m) => {
          const isAccessible = m.status !== "locked";
          return (
            <div
              key={m.id}
              className={`bg-white rounded-xl border border-slate-200 p-5 ${!isAccessible ? "opacity-50" : ""}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                    m.status === "current" ? "bg-orange-100 text-orange-700" :
                    m.status === "completed" ? "bg-green-100 text-green-700" :
                    "bg-slate-100 text-slate-400"
                  }`}>
                    {m.id}
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-800">Module {m.id}: {m.shortTitle}</h2>
                    <p className="text-xs text-slate-400 flex items-center gap-2">
                      <Clock size={11} /> Week {m.week}
                      <Users size={11} /> Peer responses required
                    </p>
                  </div>
                </div>
                {m.status === "current" && (
                  <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">Active</span>
                )}
              </div>
              <div className="mt-3 bg-slate-50 rounded-lg p-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Discussion Prompt</p>
                <p className="text-sm text-slate-600 leading-relaxed">{m.discussPrompt.prompt}</p>
                <p className="text-xs text-slate-400 mt-2 italic">{m.discussPrompt.peerRequirement}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
