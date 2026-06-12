/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Edit2, Check } from 'lucide-react';

interface NavigationProps {
  activeTab: 'home' | 'about' | 'articles' | 'works';
  onTabChange: (tab: 'home' | 'about' | 'articles' | 'works') => void;
  creatorMode: boolean;
  onToggleCreatorMode: () => void;
  onContactClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onTabChange,
  creatorMode,
  onToggleCreatorMode,
  onContactClick,
}) => {
  return (
    <nav className="w-full flex justify-center py-6 px-4 sticky top-0 z-50 bg-transparent pointer-events-none">
      <div className="w-full max-w-3xl bg-black border-4 border-black rounded-[32px] p-3 flex items-center justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] pointer-events-auto transition-transform hover:-translate-y-0.5">
        
        {/* Logo (Thick White Bold Circle - matches the screenshot) */}
        <button 
          onClick={() => onTabChange('home')}
          className="flex items-center gap-2 pl-2 focus:outline-none cursor-pointer group"
          id="logo-btn"
        >
          <div className="w-8 h-8 rounded-full border-[7px] border-white transition-transform group-hover:scale-110"></div>
          <span className="font-sans font-black text-lg tracking-tight text-white hidden sm:inline-block">
            JOHN<span className="text-[#FF5A5F]">.</span>C
          </span>
        </button>

        {/* Tab Items */}
        <div className="flex items-center gap-1 sm:gap-2">
          {[
            { id: 'home', label: '首页' },
            { id: 'about', label: '关于我' },
            { id: 'articles', label: '我的文章' },
            { id: 'works', label: '我的作品' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => onTabChange(tab.id as any)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold rounded-2xl border-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FF5A5F] text-white border-white shadow-[2px_2px_0px_rgba(255,255,255,1)]'
                    : 'bg-transparent text-gray-300 border-transparent hover:border-white hover:text-white hover:bg-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 pr-2">
          {/* Creator/Editor Mode Switch */}
          <button
            id="creator-mode-btn"
            onClick={onToggleCreatorMode}
            title="切换内容编辑模式"
            className={`p-2 rounded-xl border-2 border-white shadow-[2px_2px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(255,255,255,1)] transition-all cursor-pointer ${
              creatorMode ? 'bg-[#4ADE80] text-black' : 'bg-[#FFC043] text-black'
            }`}
          >
            {creatorMode ? (
              <div className="flex items-center gap-1 text-xs font-black">
                <Check size={14} strokeWidth={3} />
                <span className="hidden md:inline">保存</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-xs font-black">
                <Edit2 size={14} strokeWidth={3} />
                <span className="hidden md:inline">编辑</span>
              </div>
            )}
          </button>

          {/* Contact Button */}
          <button
            id="contact-btn"
            onClick={onContactClick}
            className="p-2 bg-transparent text-white hover:bg-zinc-900 rounded-xl border-2 border-white shadow-[2px_2px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(255,255,255,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_rgba(255,255,255,1)] transition-all cursor-pointer"
          >
            <Mail size={16} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </nav>
  );
};
