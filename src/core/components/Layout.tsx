import React, { useState } from 'react';
import { Header } from './Header';
import { SidebarAccordion } from './SidebarAccordion';
import { ThemeMode, ModuleRouteConfig } from '../types/common.types';

interface LayoutProps {
  routes: ModuleRouteConfig[];
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ routes, children }) => {
  const [theme, setTheme] = useState<ThemeMode>('dark-gold');
  const [currentPath, setCurrentPath] = useState<string>(routes[0]?.path || '/');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark-gold' ? 'light' : 'dark-gold'));
  };

  return (
    <div className={`min-h-screen ${theme === 'dark-gold' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <div className="flex">
        <SidebarAccordion routes={routes} currentPath={currentPath} onNavigate={setCurrentPath} />
        <main className="flex-1 p-6 h-[calc(100vh-4rem)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};