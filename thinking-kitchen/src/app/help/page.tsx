import { HelpCircle, Mail, MessageSquare, Monitor, Video, BookOpen } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-slate-800">Help &amp; Support</h1>
          <p className="text-slate-500 mt-1">Get help with the course, technology, or content.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-8 py-8 space-y-6">
        {[
          { icon: MessageSquare, color: "text-green-500", bg: "bg-green-50", title: "General Questions", desc: "Post in the Open Kitchen Chat forum. Your peers and facilitator are there to help." },
          { icon: Mail, color: "text-blue-500", bg: "bg-blue-50", title: "Private Questions", desc: "Use Canvas Inbox to message the facilitator directly. Response within 24–48 hours." },
          { icon: Monitor, color: "text-purple-500", bg: "bg-purple-50", title: "Technical Issues", desc: "For Canvas or tool problems, check the Canvas Student Guide or contact your institution's IT helpdesk." },
          { icon: Video, color: "text-orange-500", bg: "bg-orange-50", title: "Live Session Help", desc: "Join 5 minutes early to test your connection. Sessions are recorded if you experience issues." },
          { icon: BookOpen, color: "text-amber-500", bg: "bg-amber-50", title: "Course Content", desc: "Re-read module materials and check the discussion forums. If still stuck, message the facilitator." },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4">
            <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
              <item.icon size={18} className={item.color} />
            </div>
            <div>
              <h2 className="font-semibold text-slate-800">{item.title}</h2>
              <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-center">
          <HelpCircle size={24} className="text-slate-300 mx-auto mb-2" />
          <p className="text-sm text-slate-500">Still need help? Email <strong>facilitator@thethinkingkitchen.edu</strong></p>
        </div>
      </div>
    </div>
  );
}
