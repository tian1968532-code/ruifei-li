/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PenTool, Heart, MessageSquare, ArrowLeft, Search, Calendar, ChevronRight, Plus, Trash2 } from 'lucide-react';
import { Article, Comment } from '../types';

interface ArticlesTabProps {
  articles: Article[];
  creatorMode: boolean;
  onArticlesChange: (articles: Article[]) => void;
}

export const ArticlesTab: React.FC<ArticlesTabProps> = ({
  articles,
  creatorMode,
  onArticlesChange,
}) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Comment typing state
  const [commentName, setCommentName] = useState('');
  const [commentContent, setCommentContent] = useState('');

  // New Article draft state
  const [draftTitle, setDraftTitle] = useState('');
  const [draftSummary, setDraftSummary] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [draftTags, setDraftTags] = useState('');

  // Filter based on search query
  const filteredArticles = articles.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleLike = (articleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = articles.map(art => {
      if (art.id === articleId) {
        return { ...art, likes: art.likes + 1 };
      }
      return art;
    });
    onArticlesChange(updated);
    
    // Also sync the details if actively selected
    if (selectedArticle && selectedArticle.id === articleId) {
      setSelectedArticle({ ...selectedArticle, likes: selectedArticle.likes + 1 });
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedArticle || !commentName.trim() || !commentContent.trim()) return;

    const newComment: Comment = {
      id: 'c_' + Date.now(),
      author: commentName.trim(),
      content: commentContent.trim(),
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    };

    const updated = articles.map(art => {
      if (art.id === selectedArticle.id) {
        return {
          ...art,
          comments: [...art.comments, newComment],
        };
      }
      return art;
    });

    onArticlesChange(updated);
    setSelectedArticle({
      ...selectedArticle,
      comments: [...selectedArticle.comments, newComment],
    });

    setCommentName('');
    setCommentContent('');
  };

  const handlePublishArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftTitle.trim() || !draftSummary.trim() || !draftContent.trim()) return;

    const newArticle: Article = {
      id: 'art_' + Date.now(),
      title: draftTitle.trim(),
      summary: draftSummary.trim(),
      content: draftContent.trim(),
      date: new Date().toISOString().slice(0, 10),
      readTime: '3 min read',
      likes: 0,
      tags: draftTags.split(',').map(t => t.trim()).filter(Boolean),
      comments: [],
    };

    onArticlesChange([newArticle, ...articles]);
    setDraftTitle('');
    setDraftSummary('');
    setDraftContent('');
    setDraftTags('');
  };

  const handleDeleteArticle = (articleId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("确定要删除这篇章吗？")) {
      const updated = articles.filter(art => art.id !== articleId);
      onArticlesChange(updated);
      if (selectedArticle && selectedArticle.id === articleId) {
        setSelectedArticle(null);
      }
    }
  };

  if (selectedArticle) {
    return (
      <div className="space-y-10 pb-16 text-left">
        {/* Back button */}
        <button
          onClick={() => setSelectedArticle(null)}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl border-3 border-black font-bold text-xs bg-white text-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>返回文章列表 / Back to listing</span>
        </button>

        {/* Immersive Article Content Box */}
        <article className="bg-white border-4 border-black rounded-[32px] p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-8">
          {/* Header Metadata */}
          <div className="space-y-4 border-b-2 border-black/10 pb-6">
            <div className="flex flex-wrap gap-2">
              {selectedArticle.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded border border-black/20 bg-gray-50 uppercase text-[#FF5A5F]">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-black leading-tight">
              {selectedArticle.title}
            </h1>

            <div className="flex justify-between items-center text-xs font-mono text-gray-500 pt-1">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {selectedArticle.date}
                </span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              {/* Heart increment in details view */}
              <button
                onClick={(e) => handleLike(selectedArticle.id, e)}
                className="flex items-center gap-1.5 bg-red-50 text-red-600 hover:bg-red-100 border border-red-300 px-3 py-1.5 rounded-full font-bold cursor-pointer transition-transform active:scale-95"
              >
                <Heart size={14} fill="currentColor" />
                <span>{selectedArticle.likes} likes</span>
              </button>
            </div>
          </div>

          {/* Render article paragraph body */}
          <div className="prose prose-slate max-w-none text-gray-800 leading-relaxed space-y-6 text-sm sm:text-base">
            {selectedArticle.content.split('\n\n').map((para, i) => {
              if (para.startsWith('## ')) {
                return <h2 key={i} className="font-sans font-black text-2xl text-black pt-4">{para.replace('## ', '')}</h2>;
              }
              if (para.startsWith('### ')) {
                return <h3 key={i} className="font-sans font-black text-xl text-black pt-2">{para.replace('### ', '')}</h3>;
              }
              if (para.startsWith('1. ') || para.startsWith('- ')) {
                return (
                  <ul key={i} className="list-disc pl-5 space-y-2 font-sans font-medium">
                    {para.split('\n').map((line, li) => (
                      <li key={li}>{line.replace(/^[0-9-.\s*+]+/, '')}</li>
                    ))}
                  </ul>
                );
              }
              if (para.startsWith('```')) {
                const code = para.replace(/```[a-z]*\n/, '').replace(/```$/, '');
                return (
                  <pre key={i} className="bg-gray-900 text-green-400 p-4 rounded-xl border-2 border-black font-mono text-xs overflow-x-auto shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                    <code>{code}</code>
                  </pre>
                );
              }
              // Normal markdown replacements for simple links or inline code
              return (
                <p key={i}>
                  {para.split(' ').map((word, wi) => {
                    if (word.startsWith('`') && word.endsWith('`')) {
                      return <code key={wi} className="bg-gray-100 px-1 py-0.5 rounded text-red-500 font-mono text-xs">{word.replace(/`/g, '')} </code>;
                    }
                    if (word.startsWith('**') && word.endsWith('**')) {
                      return <strong key={wi} className="font-extrabold text-black">{word.replace(/\*\*/g, '')} </strong>;
                    }
                    return word + ' ';
                  })}
                </p>
              );
            })}
          </div>
        </article>

        {/* SECTION FOR COMMENTS */}
        <div className="bg-white border-4 border-black rounded-[32px] p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-left space-y-8">
          <h3 className="font-sans font-black text-2xl text-black flex items-center gap-2">
            <MessageSquare className="text-[#3B82F6]" />
            <span>评论区 / Feedbacks ({selectedArticle.comments.length})</span>
          </h3>

          {/* List existing comments */}
          {selectedArticle.comments.length === 0 ? (
            <div className="p-6 border-2 border-dashed border-gray-200 rounded-2xl text-center text-gray-400 text-sm">
              还没有评论。留下你的第一弹反馈吧！
            </div>
          ) : (
            <div className="space-y-4">
              {selectedArticle.comments.map(comm => (
                <div key={comm.id} className="p-4 border-2 border-black rounded-2xl bg-gray-50 space-y-1.5 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <div className="flex justify-between items-center">
                    <span className="font-sans font-black text-sm text-black">💬 {comm.author}</span>
                    <span className="text-[10px] font-mono text-gray-400">{comm.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">{comm.content}</p>
                </div>
              ))}
            </div>
          )}

          {/* Comment Form */}
          <form onSubmit={handleAddComment} className="border-t-2 border-black/10 pt-6 space-y-4">
            <h4 className="font-bold text-sm text-black">发表新观点 / Leave a comment</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-1 space-y-1">
                <input
                  type="text"
                  required
                  placeholder="作者昵称 / Name"
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="sm:col-span-2 space-y-1">
                <input
                  type="text"
                  required
                  placeholder="输入评论内容... / Connect your lines"
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white font-bold text-xs rounded-xl border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:translate-x-[1px] cursor-pointer"
              >
                发射评论 / Push Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-16 text-left">
      
      {/* Search Header Tool with Custom Design */}
      <div className="w-full max-w-xl mx-auto flex items-center bg-white border-4 border-black rounded-3xl p-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="pl-3 text-gray-500">
          <Search size={20} strokeWidth={2.5} />
        </div>
        <input
          type="text"
          placeholder="搜索学术干货、开发指南和硬件观点..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 bg-transparent border-none text-sm text-black focus:outline-none placeholder-gray-400 font-medium"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="text-xs bg-gray-100 hover:bg-gray-200 border border-black/20 px-2 py-1 rounded"
          >
            Clear
          </button>
        )}
      </div>

      {/* Grid of articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {filteredArticles.map(art => (
          <div
            key={art.id}
            id={`article-card-${art.id}`}
            onClick={() => setSelectedArticle(art)}
            className="bg-white border-4 border-black rounded-[32px] p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono font-bold text-gray-400">
                <span className="bg-[#EFEFEF] px-2 py-0.5 rounded border border-black/10">
                  {art.date}
                </span>
                <span>{art.readTime}</span>
              </div>

              <h2 className="font-sans font-black text-xl text-black group-hover:text-[#FF5A5F] transition-colors leading-snug">
                {art.title}
              </h2>

              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                {art.summary}
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-dashed border-gray-150 mt-6">
              <div className="flex flex-wrap gap-1.5">
                {art.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono font-black border border-black/10 bg-gray-50 px-1.5 py-0.2 rounded text-gray-500">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={(e) => handleLike(art.id, e)}
                  className="flex items-center gap-1 text-xs font-bold text-red-500 hover:scale-105 active:scale-95 transition-transform p-1 rounded"
                >
                  <Heart size={14} fill="currentColor" />
                  <span>{art.likes}</span>
                </button>

                {creatorMode && (
                  <button
                    onClick={(e) => handleDeleteArticle(art.id, e)}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 size={13} />
                  </button>
                )}

                <span className="flex items-center text-xs font-sans font-black text-black gap-0.5 group-hover:translate-x-1 transition-transform">
                  阅读全文 / Read
                  <ChevronRight size={14} strokeWidth={3} />
                </span>
              </div>
            </div>
          </div>
        ))}

        {filteredArticles.length === 0 && (
          <div className="col-span-full py-16 text-center border-4 border-dashed border-black rounded-[32px] bg-white text-gray-400 space-y-2">
            <p>没有找到相关文章。试试切换编辑模式自己写一篇吧！</p>
          </div>
        )}
      </div>

      {/* SECTION TO ADD JOURNAL/ARTICLE IN CREATOR MODE */}
      {creatorMode && (
        <div className="bg-[#FFC043]/30 border-4 border-dashed border-black rounded-[36px] p-6 sm:p-10 text-left space-y-6 mt-12 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          <h3 className="font-sans font-black text-2xl text-black flex items-center gap-2">
            <PenTool className="text-[#FF5A5F]" />
            <span>➕ 撰写新文章 / Draft a New Column</span>
          </h3>

          <form onSubmit={handlePublishArticle} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-black">文章标题</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Neo-brutalist trends in React"
                  value={draftTitle}
                  onChange={(e) => setDraftTitle(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-black">类别标签 (逗号隔开)</label>
                <input
                  type="text"
                  placeholder="e.g. React, Coding, Design"
                  value={draftTags}
                  onChange={(e) => setDraftTags(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono font-bold text-black">简短摘要 (Summary)</label>
              <input
                type="text"
                required
                placeholder="简述文章要讨论的核心观点..."
                value={draftSummary}
                onChange={(e) => setDraftSummary(e.target.value)}
                className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono font-bold text-black">正文内容 (Markdown / 段落用双换行隔开，支持二级和三级标题以及代码块)</label>
              <textarea
                required
                rows={8}
                placeholder={`e.g.\n## 第一章：背景\n\n正文文字...\n\n### 子标题\n\n- 第一条观点\n- 第二条观点\n\n\`\`\`javascript\nconsole.log("Hello, world!");\n\`\`\``}
                value={draftContent}
                onChange={(e) => setDraftContent(e.target.value)}
                className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none font-mono"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-6 py-4 bg-black text-white hover:bg-gray-800 font-bold text-sm rounded-2xl border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-x-[1px] cursor-pointer"
              >
                发布此文章 / Publish Columns
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
};
