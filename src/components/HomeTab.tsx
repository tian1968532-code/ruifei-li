/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, FolderOpen, ArrowRight, UserCheck, Star, Award, Edit3 } from 'lucide-react';
import { UserProfile, Service } from '../types';
import { WebDesignMockup, UIUXDesignMockup, ProductDesignMockup, CartoonAvatarHero, CartoonAvatarAbout } from './SVGIcons';

interface HomeTabProps {
  profile: UserProfile;
  services: Service[];
  creatorMode: boolean;
  onProfileChange: (updates: Partial<UserProfile>) => void;
  onTabChange: (tab: 'home' | 'about' | 'articles' | 'works') => void;
  onContactClick: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  profile,
  services,
  creatorMode,
  onProfileChange,
  onTabChange,
  onContactClick,
}) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* SECTION 1: HERO SECTION (Ref: Image 3) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center pt-4">
        {/* Left Side: Bold Text Headers */}
        <div className="md:col-span-7 space-y-8 text-left">
          
          <div className="space-y-4">
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-black leading-tight tracking-tight">
              I'm{' '}
              {creatorMode ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => onProfileChange({ name: e.target.value })}
                  className="bg-white border-2 border-dashed border-[#FF5A5F] px-3 py-1 text-[#FF5A5F] rounded-xl focus:outline-none w-auto max-w-xs font-black"
                />
              ) : (
                <span className="text-white bg-[#FF5A5F] px-4 py-1.5 rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)] inline-block select-all rotate-[-1deg] transform transition-transform hover:rotate-[1deg] hover:scale-105 duration-250">
                  {profile.name}
                </span>
              )}
              ,
              <br />
              a{' '}
              {creatorMode ? (
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => onProfileChange({ title: e.target.value })}
                  className="bg-white border-2 border-dashed border-black px-3 py-1 rounded-xl focus:outline-none w-auto max-w-xs text-black font-black"
                />
              ) : (
                <span>{profile.title}</span>
              )}{' '}
              from{' '}
              {creatorMode ? (
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => onProfileChange({ location: e.target.value })}
                  className="bg-white border-2 border-dashed border-[#3B82F6] px-3 py-1 text-[#3B82F6] rounded-xl focus:outline-none w-auto max-w-xs font-black inline-block"
                />
              ) : (
                <span className="text-white bg-[#3B82F6] px-4 py-1 rounded-lg shadow-[3px_3px_0px_rgba(0,0,0,1)] inline-block select-all rotate-[1.5deg] transform transition-transform hover:rotate-[-1.5deg] hover:scale-105 duration-250">
                  {profile.location}
                </span>
              )}
            </h1>

            {creatorMode ? (
              <textarea
                value={profile.bio}
                onChange={(e) => onProfileChange({ bio: e.target.value })}
                className="w-full text-base sm:text-lg text-gray-700 bg-white border-2 border-dashed border-gray-400 p-3 rounded-xl focus:outline-none min-h-[100px]"
              />
            ) : (
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-[540px]">
                {profile.bio}
              </p>
            )}
          </div>

          {/* Action Call buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 px-6 py-4 rounded-2xl border-3 border-black font-bold shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              <Mail size={18} strokeWidth={2.5} />
              <span>开始合作 / Get in touch</span>
            </button>

            <button
              id="hero-portfolio-btn"
              onClick={() => onTabChange('works')}
              className="flex items-center gap-2 bg-white text-black hover:bg-gray-50 px-6 py-4 rounded-2xl border-3 border-black font-bold shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              <FolderOpen size={18} strokeWidth={2.5} />
              <span>查看作品 / View portfolio</span>
            </button>
          </div>
        </div>

        {/* Right Side: High fidelity cartoon Portrait card */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-[340px] md:max-w-none">
            <CartoonAvatarHero className="transform hover:rotate-2 transition-transform duration-350" />
          </div>
        </div>
      </section>

      {/* SECTION 2: BROAD SERVICES SECTION (Ref: Image 1) */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-black md:leading-tight">
            My broad{' '}
            <span className="text-white bg-[#FF5A5F] px-4 py-1 rounded-sm rotate-[1deg] inline-block shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              set of services
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed doler.
          </p>
        </div>

        {/* 3 cards matching Grid layout and specific visuals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all flex flex-col group"
            >
              {/* Illustration Top area with grey background */}
              <div className="relative">
                {service.type === 'web' && <WebDesignMockup />}
                {service.type === 'uiux' && <UIUXDesignMockup />}
                {service.type === 'product' && <ProductDesignMockup />}
              </div>

              {/* Text content area */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow text-left space-y-3">
                <h3 className="font-sans font-black text-xl text-black group-hover:text-[#FF5A5F] transition-colors flex items-center gap-2">
                  <span
                    className="w-3.5 h-3.5 rounded-sm border-2 border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] inline-block"
                    style={{ backgroundColor: service.accentColor }}
                  ></span>
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: INTRO PORTRAIT (Ref: Image 2) */}
      <section className="bg-gray-50 border-4 border-black rounded-[36px] p-8 md:p-12 lg:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* Left Circular Avatar with laptop */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="w-[260px] sm:w-[320px] md:w-full max-w-[340px]">
            <CartoonAvatarAbout className="transform hover:scale-105 transition-transform duration-350" />
          </div>
        </div>

        {/* Right Info list */}
        <div className="md:col-span-7 text-left space-y-6">
          <div className="space-y-3">
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-black leading-tight">
              {creatorMode ? (
                <input
                  type="text"
                  value={profile.aboutIntro}
                  onChange={(e) => onProfileChange({ aboutIntro: e.target.value })}
                  className="bg-white border-2 border-dashed border-black px-3 py-1 rounded-xl w-full text-black font-black"
                />
              ) : (
                <span>
                  {profile.aboutIntro.split(' ').slice(0, -2).join(' ')}{' '}
                  <span className="bg-[#3B82F6] text-white px-3 py-0.5 rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,1)] rotate-[-1deg] inline-block font-black">
                    {profile.aboutIntro.split(' ').slice(-2).join(' ')}
                  </span>
                </span>
              )}
            </h2>

            {creatorMode ? (
              <textarea
                value={profile.aboutBody}
                onChange={(e) => onProfileChange({ aboutBody: e.target.value })}
                className="w-full text-sm text-gray-600 bg-white border-2 border-dashed border-gray-400 p-3 rounded-xl h-24 focus:outline-none"
              />
            ) : (
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {profile.aboutBody}
              </p>
            )}
          </div>

          {/* Core Bullet Checkpoints matching Image 2 exactly */}
          <div className="space-y-4 pt-2">
            <div className="flex gap-3.5 items-start">
              <div className="w-6 h-6 rounded-lg bg-[#3B82F6] border-2 border-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <div className="space-y-0.5">
                <h4 className="font-sans font-black text-sm text-black">
                  {creatorMode ? (
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={profile.experienceYears}
                        onChange={(e) => onProfileChange({ experienceYears: parseInt(e.target.value) || 0 })}
                        className="w-14 bg-white border border-black px-1 rounded-md"
                      />
                      <span>+ 年设计经验 / years of experience</span>
                    </div>
                  ) : (
                    <span>{profile.experienceYears}+ years of experience</span>
                  )}
                </h4>
                <p className="text-xs text-gray-500">
                  Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.
                </p>
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <div className="w-6 h-6 rounded-lg bg-[#FF5A5F] border-2 border-black shadow-[2.5px_2.5px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5">
                ✓
              </div>
              <div className="space-y-0.5">
                <h4 className="font-sans font-black text-sm text-black">
                  {creatorMode ? (
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={profile.completedProjects}
                        onChange={(e) => onProfileChange({ completedProjects: parseInt(e.target.value) || 0 })}
                        className="w-14 bg-white border border-black px-1 rounded-md"
                      />
                      <span>+ 交付项目 / successful projects</span>
                    </div>
                  ) : (
                    <span>{profile.completedProjects}+ successful projects</span>
                  )}
                </h4>
                <p className="text-xs text-gray-500">
                  Eu pellentesque arcu ornare velit faucibus egestas me gravida sed in purus enim molestie gravida.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => onTabChange('about')}
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-2xl border-3 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
            >
              <UserCheck size={18} />
              <span>了解更多关于我 / More about me</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
