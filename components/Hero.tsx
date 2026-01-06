
import React from 'react';
import { useNavigate, Link } from "react-router-dom";


const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white dark:bg-background-dark" id="about">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Building Digital <br className="hidden lg:block" />
              <span className="gradient-text">Experiences</span> that perform.
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm Vishnu S Darsan. A Front-End Developer with<strong className="text-slate-900 dark:text-white">&nbsp;&nbsp;5+ years of experience</strong> bridging the gap between design and code. I specialize in building responsive, accessible, and high-performance web applications.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => navigate("/works")}
                className="group relative flex h-12 min-w-[160px] items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-6 text-sm font-bold text-background-dark transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(19,236,236,0.3)]"
              >
                <span>View Projects</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
              <button className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-6 text-sm font-bold transition-all hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                <span>Hire Me</span>
              </button>
            </div>

            <div className="mt-8 p-6 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-sm text-left relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                Brief About Me
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                I craft pixel-perfect user interfaces and scalable frontend architectures. My passion lies in clean code and intuitive UX design, transforming complex requirements into elegant solutions.
              </p>
              <a
                onClick={() => navigate("/about")}
                className="inline-flex items-center text-xs font-bold text-primary hover:text-white hover:underline transition-colors" href="#">
                Read Full Story
                <span className="material-symbols-outlined text-[14px] ml-1">arrow_right_alt</span>
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            {/* Animated floating icon - Moved to left to avoid overlapping arrow buttons */}
            <div className="absolute -top-8 -left-8 h-20 w-20 rounded-xl border border-primary/20 bg-background-dark p-4 shadow-xl hidden md:flex items-center justify-center animate-bounce-slow z-20">
              <span className="material-symbols-outlined text-3xl text-primary">code</span>
            </div>

            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-border-dark bg-slate-100 dark:bg-card-dark shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#13ecec_1px,transparent_1px)] [background-size:16px_16px]"></div>

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7Y7R94xEzV9s0ZkS5IqBFbj1-YKM3mbSdu5fSh9NhBkGcxx2xWvWNwJx9lMfZxYDsuIa9Cukn4JBgF0OmWdk_1_w_4qbG9dWnub2a_x35cj5s3TH-xJm8FPhZn19jDMMFiwqCBy1RbsnfYUin232oouu7F9s4KVw-7S6tbuKJY145R8QzhPsLee0_Km3XaSvLI3gmIA8py48gI0ZSeH7RzkEZf3GLStDvfpUUHmS_WJ5dlOkqvmZPJtR-7DUutN3cApV782ZwvEE2")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
              </div>

              {/* Float Controls */}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <button className="p-2 rounded-full bg-background-dark/50 backdrop-blur border border-white/10 text-white hover:bg-primary transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button className="p-2 rounded-full bg-background-dark/50 backdrop-blur border border-white/10 text-white hover:bg-primary transition-colors flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>

              {/* Code Snippet Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background-dark/80 backdrop-blur-md border border-slate-700/50 shadow-lg transform transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-slate-400 ml-auto font-mono">Developer.jsx</span>
                </div>
                <div className="space-y-1 font-mono text-xs sm:text-sm">
                  <div className="flex gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-yellow-300">developer</span>
                    <span className="text-white">=</span>
                    <span className="text-white">{"{"}</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-300">role:</span>
                    <span className="text-green-400">'Front-End Wizard'</span><span className="text-white">,</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-300">experience:</span>
                    <span className="text-orange-400">5</span><span className="text-white">,</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-blue-300">status:</span>
                    <span className="text-green-400">'Ready to Code'</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-white">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
