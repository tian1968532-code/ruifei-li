/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Sparkles, RefreshCw, Layers, Check, Award, ArrowRight } from 'lucide-react';

import { UserProfile, Service, Skill, Project, Article, ContactMessage } from './types';
import { Navigation } from './components/Navigation';
import { CursorTrail } from './components/CursorTrail';
import { HomeTab } from './components/HomeTab';
import { AboutTab } from './components/AboutTab';
import { ArticlesTab } from './components/ArticlesTab';
import { WorksTab } from './components/WorksTab';
import { ContactForm } from './components/ContactForm';

import {
  INITIAL_PROFILE,
  INITIAL_SERVICES,
  INITIAL_SKILLS,
  INITIAL_PROJECTS,
  INITIAL_ARTICLES,
} from './data';

export default function App() {
  // Tab Navigation Routing
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'articles' | 'works'>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [creatorMode, setCreatorMode] = useState(false);

  // Core synchronized States
  const [profile, setProfile] = useState<UserProfile>(INITIAL_PROFILE);
  const [services, setServices] = useState<Service[]>(INITIAL_SERVICES);
  const [skills, setSkills] = useState<Skill[]>(INITIAL_SKILLS);
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  // On mount: Load synchronized state from LocalStorage
  useEffect(() => {
    try {
      const storedProfile = localStorage.getItem('jb_profile');
      if (storedProfile) setProfile(JSON.parse(storedProfile));

      const storedServices = localStorage.getItem('jb_services');
      if (storedServices) setServices(JSON.parse(storedServices));

      const storedSkills = localStorage.getItem('jb_skills');
      if (storedSkills) setSkills(JSON.parse(storedSkills));

      const storedProjects = localStorage.getItem('jb_projects');
      if (storedProjects) setProjects(JSON.parse(storedProjects));

      const storedArticles = localStorage.getItem('jb_articles');
      if (storedArticles) setArticles(JSON.parse(storedArticles));

      const storedMessages = localStorage.getItem('jb_messages');
      if (storedMessages) setMessages(JSON.parse(storedMessages));
    } catch (e) {
      console.error('Failed reading localStorage, initializing with standard template data:', e);
    }
  }, []);

  // Save/Publish helpers which persist to localStorage safely
  const handleProfileChange = (updates: Partial<UserProfile>) => {
    const next = { ...profile, ...updates };
    setProfile(next);
    localStorage.setItem('jb_profile', JSON.stringify(next));
  };

  const handleSkillsChange = (nextSkills: Skill[]) => {
    setSkills(nextSkills);
    localStorage.setItem('jb_skills', JSON.stringify(nextSkills));
  };

  const handleProjectsChange = (nextProjects: Project[]) => {
    setProjects(nextProjects);
    localStorage.setItem('jb_projects', JSON.stringify(nextProjects));
  };

  const handleArticlesChange = (nextArticles: Article[]) => {
    setArticles(nextArticles);
    localStorage.setItem('jb_articles', JSON.stringify(nextArticles));
  };

  const handleAddMessage = (newMsg: ContactMessage) => {
    const next = [newMsg, ...messages];
    setMessages(next);
    localStorage.setItem('jb_messages', JSON.stringify(next));
  };

  const handleClearMessages = () => {
    if (window.confirm("确定要清空全部接收的留言吗？")) {
      setMessages([]);
      localStorage.removeItem('jb_messages');
    }
  };

  // Reset demo back to authentic John Carter original values
  const handleResetToTemplate = () => {
    if (window.confirm("确定要清空您的所有自定义修改，还原为 John Carter 初始模板吗？")) {
      localStorage.clear();
      setProfile(INITIAL_PROFILE);
      setServices(INITIAL_SERVICES);
      setSkills(INITIAL_SKILLS);
      setProjects(INITIAL_PROJECTS);
      setArticles(INITIAL_ARTICLES);
      setMessages([]);
      setActiveTab('home');
      setCreatorMode(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] flex flex-col relative overflow-hidden select-none pb-12">
      <CursorTrail />
      
      {/* Decorative Grid Mesh or background elements (Matches brutalist playful style) */}
      <div className="absolute inset-0 pointer-events-none opacity-4 flex flex-col justify-around">
        <div className="w-full border-b-2 border-dashed border-black"></div>
        <div className="w-full border-b-2 border-dashed border-black"></div>
        <div className="w-full border-b-2 border-dashed border-black"></div>
        <div className="w-full border-b-2 border-dashed border-black"></div>
      </div>

      {/* CREATOR/EDITOR MODE ACTIVE FLOATING BANNER */}
      {creatorMode && (
        <div className="bg-[#FFC043] border-b-4 border-black px-4 py-2 text-center text-xs font-black text-black z-[60] flex items-center justify-center gap-2 shadow-[0px_2px_4px_rgba(0,0,0,0.1)] sticky top-[0]">
          <Sparkles size={14} className="animate-spin text-black" />
          <span>✨ 内容编辑模式已启用 (Creator Mode Active) • 拖拉滑块、编辑文书，改动自动加密并持久化至本地</span>
          <button
            onClick={() => setCreatorMode(false)}
            className="ml-4 px-2 py-0.5 bg-black text-white text-[10px] rounded hover:bg-gray-800 transition-colors"
          >
            退出编辑
          </button>
        </div>
      )}

      {/* Floating System Controller Panel */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2 pointer-events-auto">
        {/* Reset Template button */}
        <button
          onClick={handleResetToTemplate}
          title="还原 John Carter 原版模板"
          className="p-3 bg-white text-black hover:bg-gray-50 border-3 border-black rounded-full shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4.5px_4.5px_0px_rgba(0,0,0,1)] active:translate-x-[1px] cursor-pointer transition-all flex items-center justify-center"
        >
          <RefreshCw size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* MAIN LAYOUT */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col flex-grow">
        
        {/* Playful Floating Navigation (Image 3) */}
        <Navigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          creatorMode={creatorMode}
          onToggleCreatorMode={() => setCreatorMode(!creatorMode)}
          onContactClick={() => setIsContactOpen(true)}
        />

        {/* CONTROLLER MAIN GRAPH CONTAINER */}
        <main className="flex-grow pt-4">
          {activeTab === 'home' && (
            <HomeTab
              profile={profile}
              services={services}
              creatorMode={creatorMode}
              onProfileChange={handleProfileChange}
              onTabChange={setActiveTab}
              onContactClick={() => setIsContactOpen(true)}
            />
          )}

          {activeTab === 'about' && (
            <AboutTab
              profile={profile}
              skills={skills}
              creatorMode={creatorMode}
              onProfileChange={handleProfileChange}
              onSkillsChange={handleSkillsChange}
            />
          )}

          {activeTab === 'articles' && (
            <ArticlesTab
              articles={articles}
              creatorMode={creatorMode}
              onArticlesChange={handleArticlesChange}
            />
          )}

          {activeTab === 'works' && (
            <WorksTab
              projects={projects}
              creatorMode={creatorMode}
              onProjectsChange={handleProjectsChange}
            />
          )}
        </main>

        {/* CUSTOM INTEGRATED FOOTER */}
        <footer className="mt-auto pt-12 border-t-2 border-black/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 font-mono gap-4 text-center sm:text-left select-none">
          <div>
            <span className="font-sans font-black text-black">© 2026 {profile.name}</span> • Playful Comic Brutalism.
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('home')}
              className="hover:text-black transition-colors"
            >
              首页
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className="hover:text-black transition-colors"
            >
              关于我
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className="hover:text-black transition-colors"
            >
              我的文章
            </button>
            <button
              onClick={() => setActiveTab('works')}
              className="hover:text-black transition-colors"
            >
              我的作品
            </button>
          </div>
        </footer>

      </div>

      {/* Sliding inbox/contact feedback form drawer */}
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        messages={messages}
        onAddMessage={handleAddMessage}
        onClearMessages={handleClearMessages}
      />

    </div>
  );
}
