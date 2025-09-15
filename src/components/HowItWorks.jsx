import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Four steps to effortless and accurate exam marking.</p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5 ">
          <div className="relative rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5 ">
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold">1</span>
            <h3 className="text-lg font-semibold tracking-tight">Import</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Upload handwritten exams, documents, or assignments.</p>
          </div>
          <div className="relative rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5">
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold">2</span>
            <h3 className="text-lg font-semibold tracking-tight">Assist</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">AI analyzes and marks handwritten exams, documents, and assignments.</p>
          </div>
          <div className="relative rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5">
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold">3</span>
            <h3 className="text-lg font-semibold tracking-tight">Review</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Review AI-generated marks and feedback, make adjustments as needed.</p>
          </div>
          <div className="relative rounded-2xl border border-zinc-200 dark:border-blue/10 bg-blue dark:bg-white/5 p-5">
            <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-white inline-flex items-center justify-center text-sm font-semibold">4</span>
            <h3 className="text-lg font-semibold tracking-tight">Sync</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Automatically update marks to the system for students, teachers, and institutions, and generate comprehensive reports.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

