"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  MessageSquare,
  FileText,
  BarChart3,
  Calendar,
  Users,
  HelpCircle,
  Lock,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { modules } from "@/lib/courseData";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Modules", href: "/modules", icon: BookOpen },
  { label: "Discussions", href: "/discussions", icon: MessageSquare },
  { label: "Assignments", href: "/assignments", icon: FileText },
  { label: "Grades", href: "/grades", icon: BarChart3 },
  { label: "Live Sessions", href: "/live-sessions", icon: Calendar },
  { label: "People", href: "/people", icon: Users },
  { label: "Help", href: "/help", icon: HelpCircle },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "completed")
    return <CheckCircle2 size={14} className="text-green-400" />;
  if (status === "current")
    return <Circle size={14} className="text-orange-400 fill-orange-400" />;
  return <Lock size={12} className="text-slate-500" />;
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-800 text-slate-200 flex flex-col z-50 overflow-y-auto">
      {/* Course branding */}
      <Link href="/" className="block px-5 py-5 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center text-white font-bold text-sm">
            TK
          </div>
          <div>
            <h1 className="text-sm font-semibold text-white leading-tight">
              The Thinking Kitchen
            </h1>
            <p className="text-[11px] text-slate-400 leading-tight">
              Online Course
            </p>
          </div>
        </div>
      </Link>

      {/* Main navigation */}
      <nav className="px-3 py-4 flex-1">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-slate-700 text-white font-medium"
                      : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Module quick-nav */}
        <div className="mt-6 pt-4 border-t border-slate-700">
          <p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Modules
          </p>
          <ul className="space-y-0.5">
            {modules.map((m) => {
              const href = `/modules/${m.slug}`;
              const isActive = pathname === href;
              const isAccessible = m.status !== "locked";
              return (
                <li key={m.id}>
                  {isAccessible ? (
                    <Link
                      href={href}
                      className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md text-[13px] transition-colors ${
                        isActive
                          ? "bg-slate-700 text-white font-medium"
                          : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
                      }`}
                    >
                      <StatusIcon status={m.status} />
                      <span className="truncate">
                        {m.id}. {m.shortTitle}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2.5 px-3 py-1.5 text-[13px] text-slate-500 cursor-not-allowed">
                      <StatusIcon status={m.status} />
                      <span className="truncate">
                        {m.id}. {m.shortTitle}
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-slate-700 text-[11px] text-slate-500">
        Canvas LMS · Blended Delivery
      </div>
    </aside>
  );
}
