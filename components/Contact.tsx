
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks for your message! This is a demo.');
  };

  return (
    <section className="py-20 bg-section-alt-dark text-white relative overflow-hidden border-t border-border-dark" id="contact">
      <div className="absolute top-0 left-0 -ml-20 -mt-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Let's work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">together.</span>
            </h2>

            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative injection, let's chat.
            </p>

            <div className="space-y-6 mb-10">
              <a className="flex items-center gap-4 group" href="mailto:vishnu4693@gmail.com">
                <div className="w-12 h-12 rounded-full bg-card-dark border border-border-dark flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email</span>
                  <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">vishnu4693@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-card-dark border border-border-dark flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Location</span>
                  <span className="text-lg font-medium text-white">Kollam, Kerala, IN</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pl-2">

              <a className="text-gray-400 hover:text-white transition-colors" href="https://github.com/agenwida" target="_blank" rel="noopener noreferrer"><span><i class="devicon-facebook-plain"></i></span></a>
              <a className="text-gray-400 hover:text-white transition-colors" href="mailto:vishnu4693@gmail.com"><span ><i class="devicon-github-original"></i></span></a>
              <a className="text-gray-400 hover:text-white transition-colors" href="https://www.linkedin.com/in/vishnu-s-darsan-b87231153/" target="_blank" rel="noopener noreferrer"><span><i class="devicon-linkedin-plain"></i></span></a>
              {/* {['In', 'Tw', 'Gh'].map((social) => (
                <button key={social} className="w-10 h-10 rounded-lg bg-card-dark border border-border-dark flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                  <span className="text-xs font-bold">{social}</span>
                </button>
              ))} */}
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-card-dark rounded-2xl p-8 border border-border-dark">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Name</label>
                  <input
                    required
                    className="w-full bg-[#102222] border border-border-dark rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Email</label>
                  <input
                    required
                    className="w-full bg-[#102222] border border-border-dark rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Subject</label>
                <select
                  className="w-full bg-[#102222] border border-border-dark rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option>Project Inquiry</option>
                  <option>General Question</option>
                  <option>Hiring</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Message</label>
                <textarea
                  required
                  className="w-full bg-[#102222] border border-border-dark rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                className="w-full py-4 bg-primary hover:bg-primary/90 text-background-dark font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(19,236,236,0.2)] hover:shadow-[0_0_30px_rgba(19,236,236,0.4)] active:scale-[0.98]"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
