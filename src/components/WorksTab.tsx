/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Target, Lightbulb, ExternalLink, Filter, Plus, Trash2, X } from 'lucide-react';
import { Project } from '../types';
import { WebDesignMockup, UIUXDesignMockup, ProductDesignMockup } from './SVGIcons';

interface WorksTabProps {
  projects: Project[];
  creatorMode: boolean;
  onProjectsChange: (projects: Project[]) => void;
}

export const WorksTab: React.FC<WorksTabProps> = ({
  projects,
  creatorMode,
  onProjectsChange,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Web design' | 'UI/UX design' | 'Product design'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // New project state form
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Web design' | 'UI/UX design' | 'Product design'>('Web design');
  const [newTags, setNewTags] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newChallenge, setNewChallenge] = useState('');
  const [newSolution, setNewSolution] = useState('');

  const filteredProjects = projects.filter(proj => 
    activeCategory === 'All' || proj.category === activeCategory
  );

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim()) return;

    const added: Project = {
      id: 'proj_' + Date.now(),
      title: newTitle.trim(),
      description: newDesc.trim(),
      category: newCategory,
      tags: newTags.split(',').map(t => t.trim()).filter(Boolean),
      featured: false,
      imageColor: '#F3F4F6',
      challenge: newChallenge.trim() || 'Balancing layout proportions across active viewport dimensions.',
      solution: newSolution.trim() || 'Engineered responsive grid structures mapping fluid coordinate variables.',
    };

    onProjectsChange([...projects, added]);
    
    // Clear forms
    setNewTitle('');
    setNewTags('');
    setNewDesc('');
    setNewChallenge('');
    setNewSolution('');
  };

  const handleDeleteProject = (projId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("确定要删除这件作品吗？")) {
      onProjectsChange(projects.filter(p => p.id !== projId));
    }
  };

  return (
    <div className="space-y-12 pb-16 text-left">
      
      {/* Category selector pill bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black pb-4">
        <h3 className="font-sans font-black text-2xl text-black flex items-center gap-2">
          <Filter size={20} strokeWidth={2.5} className="text-[#3B82F6]" />
          <span>创意合集 / Portfolio Gallery</span>
        </h3>

        <div className="flex flex-wrap gap-2">
          {(['All', 'Web design', 'UI/UX design', 'Product design'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl border-2 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-gray-800 border-gray-200 hover:border-black'
              }`}
            >
              {cat === 'All' ? '全部 / All' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(proj => (
          <div
            key={proj.id}
            id={`project-card-${proj.id}`}
            onClick={() => setSelectedProject(proj)}
            className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col group relative"
          >
            {/* Top area displaying corresponding hand-drawn custom wireframe layout based on service type */}
            <div className="relative col-span-1">
              {proj.category === 'Web design' && <WebDesignMockup />}
              {proj.category === 'UI/UX design' && <UIUXDesignMockup />}
              {proj.category === 'Product design' && <ProductDesignMockup />}
            </div>

            {/* Bottom text Area */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[9px] font-mono font-black tracking-widest text-[#FF5A5F] bg-red-50 border border-[#FF5A5F]/20 px-2.5 py-1 rounded uppercase">
                  {proj.category}
                </span>

                <h4 className="font-sans font-black text-lg text-black pt-2 group-hover:text-[#FF5A5F] transition-colors">
                  {proj.title}
                </h4>

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-dashed border-gray-150">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map(t => (
                    <span key={t} className="text-[9px] font-mono font-bold bg-gray-50 border border-black/10 px-2 py-0.5 rounded text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center text-xs font-sans font-black text-black">
                  <span>查看详情 / Details →</span>
                  {creatorMode && (
                    <button
                      onClick={(e) => handleDeleteProject(proj.id, e)}
                      className="p-1 px-2.5 bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 rounded-lg cursor-pointer"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DETAIL MODAL OVERLAY IN PHYSICAL CARTOON LOOK */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white border-4 border-black rounded-[36px] w-full max-w-2xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative flex flex-col max-h-[90vh]">
            
            {/* Modal Header banner with categorical color */}
            <div className={`p-6 border-b-4 border-black flex justify-between items-center ${
              selectedProject.category === 'Web design' ? 'bg-[#3B82F6]/10' :
              selectedProject.category === 'UI/UX design' ? 'bg-[#FF5A5F]/10' : 'bg-[#4ADE80]/10'
            }`}>
              <div className="space-y-1 text-left">
                <span className="text-[10px] font-mono font-black px-2 py-0.5 border border-black/30 rounded bg-white">
                  📁 PROJECT PRESENTATION
                </span>
                <h3 className="font-sans font-black text-2xl text-black">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full border-3 border-black bg-white flex items-center justify-center hover:bg-gray-100 shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <X size={18} strokeWidth={3} />
              </button>
            </div>

            {/* Modal Content container scrolling */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
              <div className="space-y-2">
                <h4 className="font-sans font-black text-sm uppercase text-gray-400 font-mono tracking-wider">PROJECT SYNOPSIS</h4>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {selectedProject.description}
                </p>
              </div>

              {/* Challenge layout (Red banner look) */}
              <div className="border-3 border-black rounded-2xl p-5 bg-red-50 shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)] flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-full bg-[#FF5A5F] border-2 border-black flex items-center justify-center text-white shrink-0 shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  <Target size={16} strokeWidth={2.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-black text-sm text-black uppercase">DESIGN CHALLENGE (难题)</h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-normal">
                    {selectedProject.challenge || 'Orchestrating adaptive spatial alignments to prevent visual sameness across multiple view grids.'}
                  </p>
                </div>
              </div>

              {/* Solution layout (Green banner look) */}
              <div className="border-3 border-black rounded-2xl p-5 bg-green-50 shadow-[3.5px_3.5px_0px_rgba(0,0,0,1)] flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-full bg-[#4ADE80] border-2 border-black flex items-center justify-center text-black shrink-0 shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                  <Lightbulb size={16} strokeWidth={2.5} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-black text-sm text-black uppercase">CREATIVE SOLUTION (方案)</h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-normal">
                    {selectedProject.solution || 'Engineered reactive vectors using thick responsive black strokes with solid offset shadows that interact cleanly.'}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                {selectedProject.tags.map(t => (
                  <span key={t} className="text-[10px] font-mono font-black border border-black/15 bg-gray-50 px-2.5 py-0.5 rounded text-gray-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer link */}
            <div className="p-6 border-t-4 border-black bg-gray-50 flex justify-end gap-3 mt-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 text-xs text-black border-2 border-black rounded-xl bg-white font-bold cursor-pointer hover:bg-gray-100"
              >
                关闭 / Close
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-xs text-white border-2 border-black rounded-xl bg-black font-bold flex items-center gap-1.5 hover:bg-gray-800 cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)]"
              >
                <span>项目主页 / Live Demo</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>
        </div>
      )}

      {/* SECTION TO ADD WORK TO PORTFOLIO GALLERY IN CUSTOM CREATOR MODE */}
      {creatorMode && (
        <div className="bg-[#4ADE80]/20 border-4 border-dashed border-black rounded-[36px] p-6 sm:p-10 text-left space-y-6 mt-12 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <h3 className="font-sans font-black text-2xl text-black flex items-center gap-2">
            <Plus className="text-black" />
            <span>➕ 增添作品档案 / Add Portfolio Project</span>
          </h3>

          <form onSubmit={handleAddProject} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-black">作品标题 / Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tactile Smartwatch Bezel"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-black">分类 / Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                >
                  <option value="Web design">Web design</option>
                  <option value="UI/UX design">UI/UX design</option>
                  <option value="Product design">Product design</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-black">标签 (逗号隔开) / Tags</label>
                <input
                  type="text"
                  placeholder="e.g. Figma, Hardware UI, Canvas"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono font-bold text-black">创意描述 / Description</label>
              <textarea
                required
                rows={3}
                placeholder="简短描述这件创意作品的理念和表现..."
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-black">对应难题 Challenge Description</label>
                <input
                  type="text"
                  placeholder="该项目在设计中遇到了什么核心痛点..."
                  value={newChallenge}
                  onChange={(e) => setNewChallenge(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-black">对策方案 Solution Description</label>
                <input
                  type="text"
                  placeholder="你通过什么方法完美解决了该难题..."
                  value={newSolution}
                  onChange={(e) => setNewSolution(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-6 py-4 bg-black text-white hover:bg-gray-800 font-bold text-sm rounded-2xl border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-x-[1px] cursor-pointer"
              >
                保存此创意档案 / Append Project
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};
