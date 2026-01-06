
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      initials: 'AV',
      name: 'Akshay V',
      role: 'Senior Product Designer, Jupiter Meta',
      text: '"An absolute pleasure to work with. The attention to detail in the frontend implementation was outstanding. Delivered ahead of schedule!"',
      stars: 5,
    },
    {
      initials: 'DG',
      name: 'Devanand G',
      role: 'Lead Developer, Amrita Create',
      text: '"Transformed our Figma designs into a fully functional, responsive website with pixel-perfect accuracy. Highly recommended for any frontend work."',
      stars: 5,
    },
    {
      initials: 'SP',
      name: 'Sarath S Potty',
      role: 'Senior Unity Developer, Amrita Create',
      text: '"Excellent communication and technical skills. Solved complex React state management issues we were facing effortlessly."',
      stars: 4.5,
    },
    {
      initials: 'AS',
      name: 'Abhinandha S',
      role: 'Management Specialist, Press Ganey',
      text: '"Exceptional talent. He didn\'t just build the UI, he improved the UX by suggesting better interaction patterns. True partner in development."',
      stars: 5,
    },
    {
      initials: 'AA',
      name: 'Akshay Ajith',
      role: 'Design Engineer, Marsol Technologies',
      text: '"The performance optimization work was incredible. Our Lighthouse scores jumped from 60 to 98. A master of modern web technologies."',
      stars: 5,
    },
  ];

  // Duplicate the array to ensure seamless infinite scrolling
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-primary/5 border-y border-slate-200 dark:border-border-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Client Testimonials</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">See what others are saying about my work and collaboration style.</p>
      </div>

      <div className="relative pause-on-hover mask-fade">
        <div className="flex animate-marquee gap-8 w-max px-4">
          {extendedTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] bg-white dark:bg-[#080f0f] p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-border-dark relative group hover:shadow-xl transition-all duration-300"
            >
              <span className="material-symbols-outlined absolute top-6 right-6 text-4xl text-primary/10 group-hover:text-primary/30 transition-colors">format_quote</span>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xl font-bold text-slate-500 dark:text-slate-300 shrink-0">
                  {t.initials}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-slate-900 dark:text-white truncate">{t.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{t.role}</p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed min-h-[80px]">
                {t.text}
              </p>

              <div className="flex gap-1 mt-6 text-yellow-400 text-sm">
                {[...Array(5)].map((_, idx) => {
                  const starValue = idx + 1;
                  const isHalf = t.stars === idx + 0.5;
                  const isFull = t.stars >= starValue;

                  return (
                    <span key={idx} className={`material-symbols-outlined text-[18px] ${isFull || isHalf ? 'fill-current' : ''}`}>
                      {isHalf ? 'star_half' : 'star'}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
