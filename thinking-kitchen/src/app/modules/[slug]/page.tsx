import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  PlayCircle,
  Image as ImageIcon,
  FileText,
  Zap,
  ChefHat,
  PenLine,
  Eye,
  FlaskConical,
  BookOpen,
  MessageSquare,
  Upload,
  Video,
  Clock,
  Target,
  Brain,
  CheckSquare,
  AlertCircle,
} from "lucide-react";
import { modules } from "@/lib/courseData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ModulePage({ params }: PageProps) {
  const { slug } = await params;
  const mod = modules.find((m) => m.slug === slug);
  if (!mod) return notFound();

  const prevModule = modules.find((m) => m.id === mod.id - 1);
  const nextModule = modules.find((m) => m.id === mod.id + 1);

  const activityIcon = (type: string) => {
    switch (type) {
      case "kitchen": return <ChefHat size={16} className="text-orange-500" />;
      case "reflection": return <PenLine size={16} className="text-blue-500" />;
      case "observation": return <Eye size={16} className="text-purple-500" />;
      case "experiment": return <FlaskConical size={16} className="text-green-500" />;
      case "case-study": return <BookOpen size={16} className="text-amber-500" />;
      default: return <Zap size={16} className="text-slate-400" />;
    }
  };

  const assessmentIcon = (type: string) => {
    switch (type) {
      case "quiz": return <CheckSquare size={16} className="text-blue-500" />;
      case "journal": return <PenLine size={16} className="text-purple-500" />;
      case "scenario": return <Brain size={16} className="text-amber-500" />;
      case "peer": return <MessageSquare size={16} className="text-green-500" />;
      case "portfolio": return <Upload size={16} className="text-orange-500" />;
      default: return <FileText size={16} className="text-slate-400" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Module Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-3">
            <Link href="/modules" className="hover:text-white transition-colors">Modules</Link>
            <span>/</span>
            <span>Module {mod.id}</span>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-orange-300 text-sm font-medium mb-1">Week {mod.week}</p>
              <h1 className="text-2xl font-bold mb-2">Module {mod.id}: {mod.shortTitle}</h1>
              <p className="text-slate-300 max-w-2xl">{mod.title}</p>
            </div>
            {mod.hasLiveSession && (
              <div className="bg-purple-600/30 border border-purple-400/30 rounded-lg px-4 py-3 text-sm flex-shrink-0 ml-6">
                <div className="flex items-center gap-2 text-purple-200 font-medium mb-1">
                  <Video size={14} />
                  Live Session
                </div>
                <p className="text-purple-100 text-xs">{mod.liveSessionTitle}</p>
                <p className="text-purple-300 text-xs mt-1">{mod.liveSessionDuration}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8 space-y-8">
        {/* 1. MODULE OVERVIEW */}
        <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <Target size={18} className="text-orange-500" />
            <h2 className="font-semibold text-slate-800">Module Overview</h2>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Purpose</h3>
              <p className="text-slate-700 leading-relaxed">{mod.purpose}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Learning Objectives</h3>
              <ul className="space-y-2">
                {mod.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-bold text-orange-600">{i + 1}</span>
                    </div>
                    <p className="text-sm text-slate-600">{obj}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
              <h3 className="text-sm font-semibold text-amber-700 mb-2 flex items-center gap-2">
                <Brain size={15} /> Cognitive Shift
              </h3>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-amber-600 italic">&ldquo;{mod.cognitiveShift.from}&rdquo;</span>
                <ArrowRight size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-amber-800 font-medium italic">&ldquo;{mod.cognitiveShift.to}&rdquo;</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Delivery Mode</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Asynchronous</p>
                  <ul className="space-y-1.5">
                    {mod.deliveryMode.async.map((item, i) => (
                      <li key={i} className="text-sm text-blue-700 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-lg p-4 border ${mod.deliveryMode.sync ? "bg-purple-50 border-purple-100" : "bg-slate-50 border-slate-100"}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${mod.deliveryMode.sync ? "text-purple-600" : "text-slate-400"}`}>Synchronous</p>
                  {mod.deliveryMode.sync ? (
                    <p className="text-sm text-purple-700">{mod.deliveryMode.sync}</p>
                  ) : (
                    <p className="text-sm text-slate-400 italic">No live session this week</p>
                  )}
                  {mod.deliveryMode.syncRationale && (
                    <p className="text-xs text-slate-500 mt-2 italic">{mod.deliveryMode.syncRationale}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LEARN */}
        <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <PlayCircle size={18} className="text-blue-500" />
            <h2 className="font-semibold text-slate-800">Learn</h2>
          </div>
          <div className="p-6 space-y-5">
            {/* Videos */}
            {mod.learnContent.videos.map((vid, i) => (
              <div key={i} className="bg-slate-900 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center">
                    <PlayCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">Video Lesson</p>
                    <h3 className="font-semibold">{vid.title}</h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1"><Clock size={11} /> {vid.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{vid.description}</p>
                <details className="group">
                  <summary className="text-xs text-orange-300 cursor-pointer hover:text-orange-200 transition-colors">
                    View Script Outline →
                  </summary>
                  <div className="mt-3 space-y-2 pl-4 border-l-2 border-slate-700">
                    {vid.scriptOutline.map((point, j) => (
                      <p key={j} className="text-xs text-slate-400 leading-relaxed">{point}</p>
                    ))}
                  </div>
                </details>
              </div>
            ))}

            {/* Visuals */}
            {mod.learnContent.visuals.map((vis, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                  <ImageIcon size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-green-600 font-medium uppercase tracking-wider">{vis.type}</p>
                  <h3 className="font-semibold text-slate-800 mt-0.5">{vis.title}</h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{vis.description}</p>
                </div>
              </div>
            ))}

            {/* Readings */}
            {mod.learnContent.readings.map((read, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <FileText size={18} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-amber-600 font-medium uppercase tracking-wider">Reading</p>
                  <h3 className="font-semibold text-slate-800 mt-0.5">{read.title}</h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{read.description}</p>
                </div>
              </div>
            ))}

            {/* Interactives */}
            {mod.learnContent.interactives.map((inter, i) => (
              <div key={i} className="border-2 border-dashed border-blue-200 rounded-lg p-5 bg-blue-50/50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Zap size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-600 font-medium uppercase tracking-wider">Interactive Activity · {inter.tool}</p>
                    <h3 className="font-semibold text-slate-800 mt-0.5">{inter.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{inter.description}</p>
                    <details className="mt-2 group">
                      <summary className="text-xs text-blue-500 cursor-pointer hover:text-blue-600">
                        Activity Mechanics →
                      </summary>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{inter.mechanics}</p>
                    </details>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. DO */}
        <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <ChefHat size={18} className="text-orange-500" />
            <h2 className="font-semibold text-slate-800">Do</h2>
          </div>
          <div className="p-6 space-y-4">
            {mod.doActivities.map((act, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  {activityIcon(act.type)}
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{act.type.replace("-", " ")}</span>
                </div>
                <h3 className="font-semibold text-slate-800">{act.title}</h3>
                <p className="text-sm text-slate-500 mt-1 mb-3">{act.description}</p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Instructions</p>
                  <ol className="space-y-2">
                    {act.instructions.map((inst, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-orange-400 font-semibold flex-shrink-0">{j + 1}.</span>
                        {inst}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. DISCUSS */}
        <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <MessageSquare size={18} className="text-green-500" />
            <h2 className="font-semibold text-slate-800">Discuss</h2>
          </div>
          <div className="p-6">
            <div className="bg-green-50 rounded-lg p-5 border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">Discussion Forum Prompt</h3>
              <p className="text-sm text-green-700 leading-relaxed mb-3">{mod.discussPrompt.prompt}</p>
              <div className="flex items-center gap-2 text-xs text-green-600">
                <AlertCircle size={13} />
                <span>{mod.discussPrompt.peerRequirement}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SUBMIT */}
        <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <Upload size={18} className="text-purple-500" />
            <h2 className="font-semibold text-slate-800">Submit &amp; Assess</h2>
          </div>
          <div className="p-6 space-y-3">
            {mod.assessments.map((assess, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  {assessmentIcon(assess.type)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-slate-800">{assess.title}</h3>
                    <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase">{assess.type}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-0.5">{assess.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. WHAT'S NEXT */}
        <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center gap-2">
            <ArrowRight size={18} className="text-slate-500" />
            <h2 className="font-semibold text-slate-800">What&apos;s Next</h2>
          </div>
          <div className="p-6">
            {nextModule ? (
              <Link href={`/modules/${nextModule.slug}`} className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-orange-50 hover:border-orange-200 transition-all group">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">Next Module — Week {nextModule.week}</p>
                  <p className="font-semibold text-slate-800 group-hover:text-orange-700 transition-colors">
                    Module {nextModule.id}: {nextModule.shortTitle}
                  </p>
                  <p className="text-sm text-slate-500 mt-0.5">{nextModule.title}</p>
                </div>
                <ArrowRight size={20} className="text-slate-300 group-hover:text-orange-500 transition-colors" />
              </Link>
            ) : (
              <div className="text-center py-6">
                <p className="text-lg font-semibold text-slate-700">You&apos;ve reached the final module!</p>
                <p className="text-sm text-slate-500 mt-1">Complete your portfolio and prepare for the Experiment Showcase.</p>
              </div>
            )}
          </div>
        </section>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-4">
          {prevModule ? (
            <Link href={`/modules/${prevModule.slug}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
              <ArrowLeft size={16} />
              Module {prevModule.id}: {prevModule.shortTitle}
            </Link>
          ) : (
            <Link href="/modules" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
              <ArrowLeft size={16} /> All Modules
            </Link>
          )}
          {nextModule && (
            <Link href={`/modules/${nextModule.slug}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors">
              Module {nextModule.id}: {nextModule.shortTitle}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}
