import React from 'react';
import { SEED_CONFIG, ThemeMode } from '../types/common.types';

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  return (
    <header className="h-16 border-b border-amber-500/20 bg-slate-900 px-6 flex items-center justify-between text-slate-100">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold tracking-wider text-amber-500">PROVENDOR 2026</h1>
        <span className="text-xs bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-full border border-amber-500/20 font-mono">
          {SEED_CONFIG.empresa.razonSocial}
        </span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3 text-xs font-mono bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
          <div>
            <span className="text-slate-400">BCV:</span>{' '}
            <span className="text-emerald-400 font-bold">{SEED_CONFIG.tasas.tasaBcvOficial.toFixed(2)} Bs</span>
          </div>
          <div className="h-3 w-px bg-slate-700" />
          <div>
            <span className="text-slate-400">P2P:</span>{' '}
            <span className="text-amber-400 font-bold">{SEED_CONFIG.tasas.tasaBinanceP2P.toFixed(2)} Bs</span>
          </div>
        </div>

        <button
          onClick={onToggleTheme}
          className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition-all"
        >
          {theme === 'dark-gold' ? '🌙 Dark Gold' : '☀️ Light'}
        </button>
      </div>
    </header>
  );
};