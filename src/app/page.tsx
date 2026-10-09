"use client";

import { cvData, SITE_PUBLISHED } from "@/content/cv";
import { ChevronLeft, ChevronRight, Copy, BookOpen, Package, ExternalLink, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

// Helper để render code với line numbers
const CodeLine = ({ num, children, isError = false }: { num: number, children: React.ReactNode, isError?: boolean }) => (
  <div className="flex items-start group">
    <span className="w-8 text-right text-[#555] select-none mr-4 shrink-0 font-mono text-sm group-hover:text-[#888] transition-colors">{num}</span>
    <div className={`font-mono text-sm whitespace-pre-wrap flex-1 ${isError ? 'text-red-400' : 'text-white'}`}>
      {children}
    </div>
  </div>
);

// Helper để highlight từ khóa
const Highlight = ({text, keywords}: {text: string | null, keywords: string[]}) => {
  if (!text) return null;
  const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) => 
        keywords.some(k => k.toLowerCase() === part.toLowerCase()) 
          ? <span key={i} className="text-emerald-300 font-bold bg-emerald-500/15 px-1 rounded border border-emerald-500/20">{part}</span> 
          : part
      )}
    </>
  );
};

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const [secretCode, setSecretCode] = useState("");
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSecretSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretCode === "12042008") {
      setIsSecretOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#000] text-white p-4 md:p-8 flex items-center justify-center font-sans selection:bg-[#F87171] selection:text-white">
      
      <div className="w-full max-w-5xl bg-[#111] rounded-xl border border-[#333] shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center px-4 py-3 bg-[#111] border-b border-[#333]">
          <div className="flex items-center gap-3 text-[#888] font-mono text-sm">
            <button className="hover:text-white transition-colors"><ChevronLeft size={16} /></button>
            <span>1/1</span>
            <button className="hover:text-white transition-colors"><ChevronRight size={16} /></button>
          </div>
          <div className="flex items-center gap-2 bg-[#000] border border-[#333] rounded-full px-3 py-1.5 text-xs text-[#A1A1AA] font-medium">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Next.js 16.4.0 Turbopack</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8">
          
          <div className="flex justify-between items-start mb-6">
            <span className="bg-red-500/15 text-red-400 px-3 py-1.5 rounded-md text-xs font-mono font-medium border border-red-500/20 shadow-[0_0_15px_rgba(248,113,113,0.2)]">
              Build NotError
            </span>
            <div className="flex gap-3 text-[#888] no-print">
              <button onClick={handleCopy} className="hover:text-white transition-colors" title="Copy Link">
                <Copy size={16} className={isCopied ? "text-green-400" : ""} />
              </button>
              <button onClick={() => window.print()} className="hover:text-white transition-colors" title="Print PDF">
                <BookOpen size={16} />
              </button>
              <button className="hover:text-white transition-colors">
                <Package size={16} />
              </button>
            </div>
          </div>
          
          <h1 className="text-red-400 text-base md:text-lg font-mono mb-6">
            Export <span className="font-bold underline decoration-red-500/50 underline-offset-4">Candidate</span> doesn't exist in target module
          </h1>

          {/* Code Box */}
          <div className="bg-[#000] border border-[#333] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            {/* Code Header */}
            <div className="flex justify-between items-center px-4 py-2.5 bg-[#0A0A0A] border-b border-[#333] text-[#888] text-xs font-mono">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[#888]" />
                <span>./src/content/cv.ts (1:1)</span>
              </div>
              <a href={`mailto:${cvData.email}`} className="hover:text-white transition-colors" title="Contact Developer">
                <ExternalLink size={14} />
              </a>
            </div>
            
            {/* Code Body */}
            <div className="p-4 overflow-x-auto text-[13px] md:text-sm">
              <CodeLine num={1}><span className="text-[#888] italic">// NOT_ERROR: Developer skills exceeded standard parameters</span></CodeLine>
              <CodeLine num={2}><span className="text-[#F87171] font-bold">import</span> &#123; <span className="text-[#E2E8F0] font-bold">Candidate</span> &#125; <span className="text-[#F87171] font-bold">from</span> <span className="text-[#60A5FA]">"@/models/developer"</span>;</CodeLine>
              <CodeLine num={3}>&nbsp;</CodeLine>
              
              <CodeLine num={4} isError={true}>
                <span className="text-red-400 font-bold">&gt;</span> 4 | <span className="text-[#F87171] font-bold">export const</span> <span className="text-[#60A5FA]">profile</span> = &#123;
              </CodeLine>
              <CodeLine num={5} isError={true}>
                &nbsp;&nbsp;&nbsp;&nbsp;| <span className="text-red-500">^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span>
              </CodeLine>
              
              <CodeLine num={6}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">name</span>: <span className="text-amber-300 font-bold text-base bg-amber-500/10 px-1 rounded">"{cvData.name}"</span>,</CodeLine>
              <CodeLine num={7}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">role</span>: <span className="text-amber-300 font-bold text-base bg-amber-500/10 px-1 rounded">"{cvData.title}"</span>,</CodeLine>
              <CodeLine num={8}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">summary</span>: <span className="text-[#60A5FA]">"</span><span className="text-[#93C5FD] leading-relaxed"><Highlight text={cvData.summary} keywords={['Backend', 'Công Nghệ Thông Tin', 'tư duy giải quyết vấn đề', 'kỹ năng thực chiến', 'tư duy hệ thống']} /></span><span className="text-[#60A5FA]">"</span>,</CodeLine>
              <CodeLine num={9}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">contact</span>: &#123;</CodeLine>
              <CodeLine num={10}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">email</span>: <a href={`mailto:${cvData.email}`} className="text-[#60A5FA] underline underline-offset-2 hover:text-white transition-colors">"{cvData.email}"</a>,</CodeLine>
              <CodeLine num={11}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">github</span>: <a href={`https://${cvData.github}`} target="_blank" rel="noreferrer" className="text-[#60A5FA] underline underline-offset-2 hover:text-white transition-colors">"{cvData.github}"</a></CodeLine>
              <CodeLine num={12}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</CodeLine>
              
              <CodeLine num={13}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">skills</span>: &#123;</CodeLine>
              <CodeLine num={14}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">core</span>: [<span className="text-amber-300 font-bold">"{cvData.skills.core?.split(',').join('", "')}"</span>],</CodeLine>
              <CodeLine num={15}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">related</span>: [<span className="text-[#93C5FD]">"{cvData.skills.related?.split(',').join('", "')}"</span>]</CodeLine>
              <CodeLine num={16}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</CodeLine>
              
              <CodeLine num={17}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">projects</span>: [</CodeLine>
              {cvData.projects.map((p, idx) => (
                <div key={idx} className="hover:bg-[#111] transition-colors rounded">
                  <CodeLine num={18 + idx * 5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;</CodeLine>
                  <CodeLine num={19 + idx * 5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">name</span>: <span className="text-amber-300 font-bold bg-amber-500/10 px-1 rounded">"{p.name}"</span>,</CodeLine>
                  <CodeLine num={20 + idx * 5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">techStack</span>: <span className="text-emerald-300 font-bold">"{p.techStack}"</span>,</CodeLine>
                  <CodeLine num={21 + idx * 5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">role</span>: <span className="text-[#60A5FA]">"</span><span className="text-[#93C5FD]"><Highlight text={p.role} keywords={['Solo Developer', 'Docker', 'Django', 'Blockly']} /></span><span className="text-[#60A5FA]">"</span>,</CodeLine>
                  {p.link && <CodeLine num={22 + idx * 5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A78BFA]">link</span>: <a href={p.link} target="_blank" rel="noreferrer" className="text-[#60A5FA] underline underline-offset-2 hover:text-white transition-colors">"{p.link}"</a>,</CodeLine>}
                  <CodeLine num={23 + idx * 5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</CodeLine>
                </div>
              ))}
              <CodeLine num={18 + cvData.projects.length * 5}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</CodeLine>
              <CodeLine num={19 + cvData.projects.length * 5}>&nbsp;&nbsp;&nbsp;&nbsp;&#125;;</CodeLine>
            </div>
          </div>

          <div className="mt-6 text-[#A1A1AA] text-sm font-mono space-y-2">
            <p className="text-white">The export <span className="text-green-400 font-bold">Candidate</span> was not found in module <span className="text-red-400">[project]/src/market/candidates.ts [app-client]</span></p>
            <p>Did you mean to hire <a href={`mailto:${cvData.email}`} className="text-green-400 font-bold hover:underline cursor-pointer hover:text-green-300 transition-colors">MaiTruongThaiLam</a>?</p>
            <p className="pt-2 text-[#666]">All exports of the module are statically known. It seems this candidate possesses unhandled exceptional skills.</p>
          </div>

          <div className="mt-8 font-mono text-sm border-t border-[#333] pt-6 space-y-3">
            <p className="text-white">Import traces:</p>
            <div className="pl-4 space-y-1">
              <p className="text-[#A1A1AA]">Recruitment Browser:</p>
              <p className="text-white pl-4 hover:text-blue-400 transition-colors cursor-pointer">./src/hiring/decision.tsx <span className="text-[#888]">[Client Component Browser]</span></p>
              <p className="text-white pl-4 hover:text-blue-400 transition-colors cursor-pointer">./src/hiring/interview.tsx <span className="text-[#888]">[Server Component]</span></p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Secret World Hidden Trigger */}
      <div className="fixed bottom-2 right-2 flex flex-col items-end gap-2">
        {isSecretOpen && (
          <div className="bg-[#111] border border-green-900 text-green-400 px-3 py-1.5 rounded text-xs font-mono shadow-xl animate-pulse no-print">
            [ACCESS_GRANTED]: Developer Mode Unlocked.
          </div>
        )}
        <div className="opacity-10 hover:opacity-100 transition-opacity no-print">
          <form onSubmit={handleSecretSubmit}>
            <input 
              type="password" 
              value={secretCode} 
              onChange={(e) => setSecretCode(e.target.value)} 
              className="w-10 bg-transparent border-none outline-none text-[8px] text-[#333] focus:w-20 focus:text-green-500 focus:bg-[#111] transition-all px-1 rounded"
              placeholder="..."
            />
          </form>
        </div>
      </div>

    </div>
  );
}
