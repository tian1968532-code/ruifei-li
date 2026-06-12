/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Trash2, Sliders, Calendar, Briefcase, GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import { UserProfile, Skill } from '../types';

interface AboutTabProps {
  profile: UserProfile;
  skills: Skill[];
  creatorMode: boolean;
  onProfileChange: (updates: Partial<UserProfile>) => void;
  onSkillsChange: (skills: Skill[]) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({
  profile,
  skills,
  creatorMode,
  onProfileChange,
  onSkillsChange,
}) => {
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState('Design & Code');
  const [newSkillLevel, setNewSkillLevel] = useState(80);

  const handleLevelChange = (index: number, level: number) => {
    const updated = [...skills];
    updated[index].level = level;
    onSkillsChange(updated);
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    const added: Skill = {
      name: newSkillName.trim(),
      level: newSkillLevel,
      category: newSkillCategory,
    };
    onSkillsChange([...skills, added]);
    setNewSkillName('');
    setNewSkillLevel(80);
  };

  const handleDeleteSkill = (index: number) => {
    const updated = skills.filter((_, i) => i !== index);
    onSkillsChange(updated);
  };

  // Mock timeline items for high fidelity
  const TIMELINE = [
    {
      id: 't1',
      period: '2023 - PRESENT',
      role: 'Senior Product Designer',
      company: 'Elastic Wave Lab',
      desc: 'Spearheating structural systems for modular hardware prototypes alongside cross-platform web layout guidelines.',
    },
    {
      id: 't2',
      period: '2020 - 2023',
      role: 'Interaction Specialist',
      company: 'Comic Canvas Agency',
      desc: 'Directed vector layouts and physical tactile grid configurations for online merchant platforms.',
    },
    {
      id: 't3',
      period: '2016 - 2020',
      role: 'Web Designer & Developer',
      company: 'Freelance Workspace',
      desc: 'Designed high-contrast branding landing pages and interactive HTML components for tech-forward enterprises worldwide.',
    },
  ];

  return (
    <div className="space-y-12 pb-16 text-left">
      
      {/* SECTION 1: DETAILED BIO CARD */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Card: Fast Stats */}
        <div className="bg-[#4ADE80] border-4 border-black rounded-[32px] p-6 sm:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center justify-center font-bold text-lg">
              ✨
            </div>
            <h3 className="font-sans font-black text-2xl text-black">快速档案 / Fast Stats</h3>
            <div className="space-y-2 font-mono text-sm text-black">
              <p className="flex items-center gap-2">
                <MapPin size={16} strokeWidth={2.5} />
                <span>坐标：{profile.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Calendar size={16} strokeWidth={2.5} />
                <span>经验：{profile.experienceYears}+ 年码力</span>
              </p>
              <p className="flex items-center gap-2">
                <Briefcase size={16} strokeWidth={2.5} />
                <span>邮箱：{profile.email}</span>
              </p>
            </div>
          </div>

          <div className="border-t-2 border-black/10 pt-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest bg-white border border-black/30 px-2 py-0.5 rounded">
              CURRENT STATUS
            </span>
            <p className="text-xs font-bold font-mono text-black">
              Listening to vinyl tracks & designing bold interfaces! 🎧
            </p>
          </div>
        </div>

        {/* Right bio card */}
        <div className="md:col-span-2 bg-white border-4 border-black rounded-[32px] p-6 sm:p-10 shadow-[6px_6px_0px_rgba(0,0,0,1)] space-y-6">
          <h3 className="font-sans font-black text-2xl sm:text-3xl text-black">
            关于我{' '}
            <span className="text-white bg-[#FF5A5F] px-3 py-1 pb-1.5 rounded rotate-[-1deg] inline-block shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              我的设计哲学
            </span>
          </h3>

          <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              Hey and welcome! I’m <strong className="font-black text-black">{profile.name}</strong>, which you probably read on the front page. I believe that good design shouldn’t be polite, sterile or boring. It should make you feel something, stand out, and express tangible human effort behind the canvas.
            </p>
            <p>
              My workflow merges high-contrast vector illustrations with clean, resilient software code. I specialize in designing structured, modular grid rules, and rendering interactive web tools that feel physical and highly responsive to touches and mouse movements. Our craft is to build layouts that guide attention simply and elegantly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t-2 border-dashed border-gray-200">
            <a
              href="mailto:john.carter@example.com"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border-3 border-black font-bold text-xs bg-black text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              <span>联系我 / Send Mail</span>
              <ExternalLink size={14} />
            </a>
            <button
              onClick={() => {
                alert("📝 简历下载：这是一个模拟下载。您可以用编辑器轻松编辑并替换此处的数据结构。");
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border-3 border-black font-bold text-xs bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              <span>下载简历 / Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: INTERACTIVE SKILL SLIDERS */}
      <div className="bg-white border-4 border-black rounded-[32px] p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <h3 className="font-sans font-black text-2xl sm:text-3xl text-black flex items-center gap-2">
              <Sliders className="text-[#3B82F6]" strokeWidth={2.5} />
              <span>技能雷达 / Skill Sliders Cockpit</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              这是一个可交互仪表盘！拖动滑块可以实时调整技能熟练度。在编辑模式下，你还可以自由增删技能指标。
            </p>
          </div>
        </div>

        {/* Skill grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {skills.map((skill, index) => (
            <div
              key={skill.name + index}
              className="p-4 border-3 border-black rounded-2xl bg-gray-50 flex flex-col justify-between shadow-[3px_3px_0px_rgba(0,0,0,1)] relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-sans font-black text-sm sm:text-base text-black">{skill.name}</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-extrabold bg-[#FFC043] px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] text-black">
                    {skill.level}%
                  </span>
                  {creatorMode && (
                    <button
                      onClick={() => handleDeleteSkill(index)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={skill.level}
                onChange={(e) => handleLevelChange(index, parseInt(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black border-2 border-black"
              />

              {/* Dynamic feedback labels depending on level value */}
              <span className="text-[10px] font-mono text-gray-400 mt-2 text-right uppercase">
                {skill.level >= 90 ? '🔥 Legendary' : skill.level >= 80 ? '⭐ Proficient' : skill.level >= 60 ? '⚡ Competent' : '🌱 Learning'} • {skill.category}
              </span>
            </div>
          ))}
        </div>

        {/* Creator mode Form to Add new custom skills */}
        {creatorMode && (
          <form
            onSubmit={handleAddSkill}
            className="p-6 border-3 border-dashed border-black rounded-2xl bg-white space-y-4"
          >
            <h4 className="font-bold text-sm text-black flex items-center gap-2">
              <Plus size={16} />
              <span>增设新的技能指标 / Add Custom Skill</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold">SKILL NAME</label>
                <input
                  type="text"
                  placeholder="e.g. Docker, SEO, WebGL"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="w-full text-xs p-2.5 border-2 border-black rounded-xl focus:outline-none focus:ring-1 focus:ring-black bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold">CATEGORY</label>
                <select
                  value={newSkillCategory}
                  onChange={(e) => setNewSkillCategory(e.target.value)}
                  className="w-full text-xs p-2.5 border-2 border-black rounded-xl focus:outline-none bg-white font-mono"
                >
                  <option value="Design & Code">Design & Code</option>
                  <option value="Design & UX">Design & UX</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Product">Product</option>
                </select>
              </div>

              <div className="space-y-1 flex flex-col justify-end">
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs bg-[#4ADE80] text-black font-extrabold border-2 border-black rounded-xl shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
                >
                  保存此技能 / Push Skill
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* SECTION 3: WORK HISTORY / TIMELINE */}
      <div className="space-y-8">
        <h3 className="font-sans font-black text-2xl sm:text-3xl text-black flex items-center gap-2">
          <Briefcase className="text-[#FF5A5F]" strokeWidth={2.5} />
          <span>成长历程 / Timeline Resume</span>
        </h3>

        <div className="relative border-l-4 border-black pl-8 ml-4 space-y-10 py-2">
          {TIMELINE.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline custom circle node */}
              <div className="absolute -left-[45px] top-1.5 w-7 h-7 rounded-full bg-white border-4 border-black group-hover:bg-[#FFC043] transition-colors duration-250 z-10 flex items-center justify-center font-bold text-[10px]">
                {index + 1}
              </div>

              <div className="bg-white border-3 border-black rounded-2xl p-5 sm:p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] transition-transform flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 max-w-xl">
                  <span className="text-[10px] font-mono font-extrabold tracking-widest text-[#FF5A5F] bg-red-50 border border-[#FF5A5F]/40 px-2 py-0.5 rounded">
                    {item.period}
                  </span>
                  <h4 className="font-sans font-black text-base sm:text-lg text-black pt-1">{item.role}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="shrink-0 flex sm:flex-col justify-between sm:items-end">
                  <span className="font-mono text-xs font-bold text-gray-800 bg-[#EFEFEF] border border-black/10 px-3 py-1.5 rounded-xl shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                    🏢 {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
