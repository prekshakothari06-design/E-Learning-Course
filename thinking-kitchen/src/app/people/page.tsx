import { Users, Mail, GraduationCap } from "lucide-react";

export default function PeoplePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-800">People</h1>
          <p className="text-slate-500 mt-1">Your learning community.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-8 py-8 space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <GraduationCap size={20} className="text-orange-500" /> Course Facilitator
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-xl font-bold text-orange-600">CF</span>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Course Facilitator</p>
              <p className="text-sm text-slate-500">Instructional Designer &amp; Learning Experience Architect</p>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-1"><Mail size={11} /> facilitator@thethinkingkitchen.edu</p>
            </div>
          </div>
          <div className="mt-4 bg-slate-50 rounded-lg p-4">
            <p className="text-sm text-slate-600">
              Feedback on formative assessments is provided within 48 hours. For urgent questions,
              use the Canvas messaging system. For general discussion, post in the Open Kitchen Chat forum.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Users size={20} className="text-blue-500" /> Learner Directory
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center">
                  <span className="text-xs font-medium text-slate-500">L{i + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-600">Learner {i + 1}</p>
                  <p className="text-[10px] text-slate-400">Student</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center italic">
            Showing sample learner directory. In a live course, this populates from Canvas enrollment.
          </p>
        </div>
      </div>
    </div>
  );
}
