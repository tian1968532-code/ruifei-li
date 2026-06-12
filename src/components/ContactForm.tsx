/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Send, X, Inbox, Trash2, CheckCircle2 } from 'lucide-react';
import { ContactMessage } from '../types';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  messages: ContactMessage[];
  onAddMessage: (msg: ContactMessage) => void;
  onClearMessages: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  isOpen,
  onClose,
  messages,
  onAddMessage,
  onClearMessages,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('业务咨询 / Business Inquiry');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !text.trim()) return;

    const newMessage: ContactMessage = {
      id: 'm_' + Date.now(),
      name: name.trim(),
      email: email.trim(),
      subject: subject,
      message: text.trim(),
      date: new Date().toLocaleTimeString() + ' ' + new Date().toISOString().slice(0,10),
    };

    onAddMessage(newMessage);
    setSubmitted(true);

    // Clear inputs
    setName('');
    setEmail('');
    setText('');

    // Auto close or clear success state
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex justify-end z-[100] animate-fade-in">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer content alignment */}
      <div className="relative w-full max-w-lg bg-white border-l-4 border-black h-full shadow-[-10px_0px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between overflow-hidden animate-slide-in">
        
        {/* Header */}
        <div className="p-6 border-b-4 border-black bg-[#FFC043]/15 flex justify-between items-center text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-black tracking-widest text-[#FF5A5F] bg-white border border-[#FF5A5F]/40 px-2.5 py-1 rounded">
              LET'S COLLABORATE
            </span>
            <h3 className="font-sans font-black text-2xl text-black">与我取得联系 / Contact Me</h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border-3 border-black bg-white flex items-center justify-center hover:bg-gray-100 shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <X size={18} strokeWidth={3} />
          </button>
        </div>

        {/* Scrollable Container with Contact Form AND Local Inbox */}
        <div className="flex-grow p-6 sm:p-8 overflow-y-auto space-y-8 text-left">
          
          {submitted ? (
            <div className="p-8 border-3 border-black rounded-[24px] bg-green-50 text-center space-y-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col items-center">
              <CheckCircle2 size={40} className="text-green-600" />
              <h4 className="font-sans font-black text-lg text-black">消息送达成功！</h4>
              <p className="text-xs text-gray-600">
                感谢您的留言！消息已妥善存入本地浏览器缓存。您可以在下方的「本地收件箱」中直接查看调试！
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono font-black text-black">您的尊姓名 / WHAT SHALL I CALL YOU?</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 阿里斯先生 / Mr. Aris"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-black text-black">电子邮箱 / EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-black text-black">来意主题 / SUBJECT</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                >
                  <option value="业务咨询 / Business Inquiry">业务咨询 / Business Inquiry</option>
                  <option value="技术交流 / Tech Exchange">技术交流 / Tech Exchange</option>
                  <option value="作品反馈 / Portfolio Feedback">作品反馈 / Portfolio Feedback</option>
                  <option value="随便聊聊 / Casual Chat">随便聊聊 / Casual Chat</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-black text-black">消息正文 / WRITE YOUR THOUGHTS</label>
                <textarea
                  required
                  rows={4}
                  placeholder="随时在此刻写下你想对我说的心里话或方案吧..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full text-xs p-3 border-2 border-black rounded-xl bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-black hover:bg-gray-800 text-white font-bold text-sm rounded-xl border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <Send size={15} />
                <span>发送消息 / Dispatch Letter</span>
              </button>
            </form>
          )}

          {/* Local Inbox Workspace for testing feedback */}
          <div className="border-t-3 border-dashed border-black/15 pt-6 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-sans font-black text-base text-black flex items-center gap-1.5">
                <Inbox size={16} className="text-[#3B82F6]" />
                <span>测试发件箱 / Sent Outbox ({messages.length})</span>
              </h4>
              {messages.length > 0 && (
                <button
                  onClick={onClearMessages}
                  className="flex items-center gap-1 text-[10px] font-mono text-red-600 hover:bg-red-50 border border-red-200 px-2 py-1 rounded"
                >
                  <Trash2 size={11} />
                  <span>清空缓存 / Clear</span>
                </button>
              )}
            </div>

            {messages.length === 0 ? (
              <p className="text-xs text-gray-400 border-2 border-dashed border-gray-100 p-6 rounded-xl text-center">
                出站邮箱现在是空的。尝试撰写并在上方发射一条，瞧瞧反馈吧！
              </p>
            ) : (
              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                {messages.map(msg => (
                  <div key={msg.id} className="p-3 bg-gray-50 border border-black rounded-lg space-y-1 shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)] text-xs">
                    <div className="flex justify-between items-center font-bold text-black border-b border-black/5 pb-1">
                      <span>👤 {msg.name}</span>
                      <span className="text-[9px] text-gray-400 font-normal">{msg.date}</span>
                    </div>
                    <p className="text-gray-500 text-[10px]">Email: {msg.email} | Sub: {msg.subject}</p>
                    <p className="text-gray-700 leading-normal font-medium mt-1 whitespace-pre-line">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t-4 border-black bg-gray-50 text-center text-xs text-gray-400 font-mono">
          STORES DATA SECURELY IN CLIENT LOCALSTORAGE
        </div>

      </div>
    </div>
  );
};
