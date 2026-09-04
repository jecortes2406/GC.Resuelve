import React from 'react';
import { ModuleRouteConfig } from '../types/common.types';

interface SidebarProps {
  routes: ModuleRouteConfig[];
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const SidebarAccordion: React.FC<SidebarProps> = ({ routes, currentPath, onNavigate }) => {
  return (
    <aside className="w-64 bg-slate-950 border-r border-amber-500/20 h-[calc(100vh-4rem)] p-4 flex flex-col justify-between">
      <nav className="space-y-1">
        <div className="px-3 py-2 text-[10px] font-bold text-amber-500/60 uppercase tracking-widest font-mono">
          Módulos del Sistema
        </div>
        {routes.map((route) => {
          const isActive = currentPath === route.path;
          return (
            <button
              key={route.path}
              onClick={() => onNavigate(route.path)}
              className={`w-full flex items-center px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 font-semibold'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <span className="truncate">{route.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800 text-[10px] text-slate-500 font-mono text-center">
        Offline-First • Multi-UMI Sync
      </div>
    </aside>
  );
};