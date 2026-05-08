function ProjectCover({ projectId }) {
  const covers = {
    'ai-doc-qa': (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-3 right-4 w-20 h-20 rounded-full bg-cyan-500/10 blur-xl" />
        <div className="absolute bottom-2 left-3 w-16 h-16 rounded-full bg-violet-500/15 blur-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl border border-cyan-400/20 rotate-12 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">🤖</span>
          <div className="flex gap-1">
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
            <div className="w-5 h-1 rounded-full bg-white/30" />
            <div className="w-7 h-1 rounded-full bg-gradient-to-r from-violet-400 to-pink-400" />
          </div>
          <span className="text-[9px] font-mono text-cyan-300/60 tracking-wider">RAG PIPELINE</span>
        </div>
        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-violet-300/40">recall +40%</div>
      </div>
    ),
    'blockchain-supply-chain': (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-2 left-2 w-24 h-24 rounded-full border border-amber-400/15" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }} />
        <div className="absolute top-4 right-6 w-14 h-14 rounded-lg bg-amber-500/10 rotate-45 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">⛓️</span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <div className="w-6 h-[2px] bg-amber-400/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-6 h-[2px] bg-amber-400/50" />
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <span className="text-[9px] font-mono text-amber-300/60 tracking-wider">FISCO BCOS</span>
        </div>
        <div className="absolute top-3 left-4 text-[10px] font-mono text-amber-300/35">Solidity</div>
      </div>
    ),
    'blockchain-food-trace': (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-3 right-3 w-[72px] h-[72px] rounded-full bg-emerald-500/8 blur-sm" />
        <div className="absolute -bottom-1 left-4 w-12 h-12 rounded-full border-2 border-dashed border-emerald-400/20" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">🌱</span>
          <div className="flex gap-1">
            {['🥬', '🧃', '📦', '🏪'].map((e, i) => (
              <span key={i} className="text-xs opacity-70" style={{ animation: `floatUp 2s ease-in-out infinite ${i * 0.3}s` }}>{e}</span>
            ))}
          </div>
          <span className="text-[9px] font-mono text-emerald-300/55 tracking-wider">TRACE → VERIFY</span>
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-emerald-300/35">+60% speed</div>
      </div>
    ),
    'library-management': (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="absolute top-4 right-4 grid grid-cols-3 gap-0.5 opacity-25">
          {[...Array(9)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-sm bg-blue-300" />)}
        </div>
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">📚</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`w-1 rounded-full ${i === 2 ? 'h-4 bg-blue-400' : 'h-2 bg-blue-400/30'}`} style={{ width: `${[40, 65, 90, 70, 45][i]}%` }} />
            ))}
          </div>
          <span className="text-[9px] font-mono text-blue-300/55 tracking-wider">CRUD SYSTEM</span>
        </div>
        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-blue-300/35">JWT Auth</div>
      </div>
    ),
    'devops-dashboard': (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full"><defs><pattern id="gridDevOps" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#gridDevOps)" /></svg>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">📊</span>
          <div className="flex items-end gap-1">
            {[45, 72, 58, 90, 63, 85, 78].map((h, i) => (
              <div key={i} className="w-2.5 rounded-t bg-gradient-to-t from-cyan-500 to-emerald-400" style={{ height: `${h}%`, minHeight: '8px', animation: `barGrow 1s ease-out ${i * 0.08}s both` }} />
            ))}
          </div>
          <span className="text-[9px] font-mono text-cyan-300/55 tracking-wider">METRICS DASHBOARD</span>
        </div>
        <div className="absolute top-3 right-3 flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-mono text-green-300/50">LIVE</span>
        </div>
      </div>
    ),
    'portfolio-generator': (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-3 left-3 w-16 h-20 rounded-lg border border-fuchsia-400/20 rotate-6 backdrop-blur-sm" />
        <div className="absolute bottom-2 right-4 w-14 h-18 rounded-lg border border-pink-400/15 -rotate-3 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">✨</span>
          <div className="flex gap-1.5">
            <div className="w-8 h-10 rounded border border-fuchsia-400/30 bg-fuchsia-500/5 flex items-center justify-center text-[8px] text-fuchsia-300/50">Aa</div>
            <div className="w-8 h-10 rounded border border-pink-400/30 bg-pink-500/5 flex items-center justify-center text-[8px] text-pink-300/50">Img</div>
            <div className="w-8 h-10 rounded border border-violet-400/30 bg-violet-500/5 flex items-center justify-center text-[8px] text-violet-300/50">Code</div>
          </div>
          <span className="text-[9px] font-mono text-fuchsia-300/55 tracking-wider">AUTO GENERATE</span>
        </div>
      </div>
    ),
    'smart-contract-demo': (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">⚡</span>
          <div className="flex items-center gap-1 text-[10px] font-mono text-orange-300/50 space-x-1">
            <span>{`{`}</span>
            <span className="text-yellow-300/70">ERC20</span>
            <span>{`}`}</span>
          </div>
          <div className="flex gap-1">
            <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-red-500/15 text-red-300/60">deploy</span>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-yellow-500/15 text-yellow-300/60">test</span>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-green-500/15 text-green-300/60">verify</span>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-[10px] font-mono text-orange-300/35">Hardhat</div>
      </div>
    ),
    'rag-knowledge-base': (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-3 left-4 w-20 h-20 rounded-full bg-purple-500/8 blur-md" />
        <div className="absolute bottom-3 right-3 w-16 h-16 rounded-full bg-fuchsia-500/8 blur-md" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">🧠</span>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-purple-300/50">DOC</span>
            <div className="w-4 h-px bg-purple-400/40" />
            <span className="text-[10px] text-fuchsia-300/50">EMBED</span>
            <div className="w-4 h-px bg-fuchsia-400/40" />
            <span className="text-[10px] text-violet-300/50">RETRV</span>
            <div className="w-4 h-px bg-violet-400/40" />
            <span className="text-[10px] text-cyan-300/50">ANSWER</span>
          </div>
          <span className="text-[9px] font-mono text-purple-300/50 tracking-wider">VECTOR STORE</span>
        </div>
        <div className="absolute bottom-2 left-3 text-[10px] font-mono text-purple-300/30">pgvector</div>
      </div>
    ),
    'liantu-resume': (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-2 right-3 w-[88px] h-[112px] rounded-lg border border-rose-400/15 rotate-3 backdrop-blur-sm overflow-hidden">
          <div className="p-1 space-y-0.5 opacity-40">
            <div className="h-1.5 w-full rounded bg-rose-300/50" />
            <div className="h-1.5 w-3/4 rounded bg-rose-300/40" />
            <div className="h-1.5 w-5/6 rounded bg-rose-300/30" />
            <div className="h-1.5 w-2/3 rounded bg-rose-300/35" />
            <div className="mt-2 h-8 w-full rounded bg-pink-300/20" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl">📝</span>
          <div className="flex gap-1">
            {['Classic', 'Modern', 'Creative'].map((t, i) => (
              <span key={i} className="px-1.5 py-0.5 rounded text-[8px] font-medium bg-rose-500/10 text-rose-300/60 border border-rose-400/15">{t}</span>
            ))}
          </div>
          <span className="text-[9px] font-mono text-rose-300/50 tracking-wider">AI RESUME BUILDER</span>
        </div>
        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-rose-300/30">8 Templates</div>
      </div>
    ),
  };

  return covers[projectId] || <div className="w-full h-full flex items-center justify-center text-4xl">💻</div>;
}

export default ProjectCover;
