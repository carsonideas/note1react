import React, { useState } from 'react';
import { Search, Sun, LogIn, Sparkles, ArrowRight, Mail } from 'lucide-react';
import '../App.css';

// Import images
import blogAiProductivity from '../assets/images/blog-ai-productivity.png';
import blogFutureNotes from '../assets/images/blog-future-notes.png';
import blogRemoteWork from '../assets/images/blog-remote-work.png';
import blogNewsletter from '../assets/images/blog-newsletter.png';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Posts',
    'Productivity',
    'AI & Technology',
    'Remote Work',
    'Updates',
    'Tutorials'
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    // Initialize Lucide icons if needed
    console.log('Blog page loaded');
  }, []);

  return (
    <div className="antialiased text-zinc-100 bg-[#0a0a12] min-h-screen">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(138,92,246,0.55),rgba(18,18,27,0))]"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.45),rgba(18,18,27,0))]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                Latest Insights
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight mb-6">
              Ideas worth<br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">sharing</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 mb-8">
              Insights on productivity, AI, and the future of note-taking from the Nova team and our community.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input w-full px-4 py-3 pl-12 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-400 focus:outline-none"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`category-tag px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white'
                    : 'bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-2">Featured Article</h2>
            <p className="text-zinc-400">Our latest deep dive into the future of productivity</p>
          </div>

          <div className="blog-card rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-square overflow-hidden">
                <img src={blogAiProductivity} alt="AI enhancing productivity" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium">AI & Technology</span>
                  <span className="text-zinc-500 text-sm">5 min read</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 leading-tight">
                  How AI is Revolutionizing Personal Productivity in 2025
                </h3>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  Discover how artificial intelligence is transforming the way we work, think, and organize our ideas. From smart suggestions to automated workflows, explore the cutting-edge features that are making productivity tools more intelligent than ever.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                      <span className="text-white font-medium text-sm">AS</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Alex Smith</p>
                      <p className="text-zinc-400 text-xs">Jan 15, 2025</p>
                    </div>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-2">Recent Articles</h2>
            <p className="text-zinc-400">Stay updated with our latest insights and tips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="blog-card rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur">
              <div className="aspect-video overflow-hidden">
                <img src={blogFutureNotes} alt="Future of note-taking" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium">Productivity</span>
                  <span className="text-zinc-500 text-sm">8 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                  The Future of Note-Taking: Beyond Text and Into Intelligence
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  Explore how note-taking is evolving from simple text capture to intelligent knowledge management systems that understand context and connections.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <span className="text-white font-medium text-xs">MJ</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs">Maria Johnson</p>
                      <p className="text-zinc-500 text-xs">Jan 12, 2025</p>
                    </div>
                  </div>
                  <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">Read →</a>
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="blog-card rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur">
              <div className="aspect-video overflow-hidden">
                <img src={blogRemoteWork} alt="Remote work productivity" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">Remote Work</span>
                  <span className="text-zinc-500 text-sm">6 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                  Remote Work Productivity: Tools and Techniques That Actually Work
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  Practical strategies and tools for maintaining high productivity while working remotely, based on real-world experience from distributed teams.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                      <span className="text-white font-medium text-xs">DL</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs">David Lee</p>
                      <p className="text-zinc-500 text-xs">Jan 10, 2025</p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 text-sm font-medium">Read →</a>
                </div>
              </div>
            </article>

            {/* Post 3 */}
            <article className="blog-card rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur">
              <div className="aspect-video overflow-hidden">
                <img src={blogNewsletter} alt="Newsletter insights" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-medium">Updates</span>
                  <span className="text-zinc-500 text-sm">4 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-tight">
                  Nova 2.0: What's New and What's Coming Next
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                  A comprehensive overview of the latest features in Nova 2.0 and a sneak peek at what we're building for the future.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                      <span className="text-white font-medium text-xs">SC</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs">Sarah Chen</p>
                      <p className="text-zinc-500 text-xs">Jan 8, 2025</p>
                    </div>
                  </div>
                  <a href="#" className="text-orange-400 hover:text-orange-300 text-sm font-medium">Read →</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Popular Posts Sidebar */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-white mb-8">More Articles</h2>
              <div className="space-y-8">
                {/* Additional articles would go here */}
                <div className="text-center py-12">
                  <p className="text-zinc-400">More articles coming soon...</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold text-white mb-6">Popular Posts</h3>
              <div className="space-y-6">
                <div className="popular-post-card group cursor-pointer">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                        10 AI Productivity Hacks That Will Change Your Life
                      </h3>
                      <p className="text-zinc-400 text-sm mb-3">
                        Discover how artificial intelligence can automate repetitive tasks and boost your productivity by 300%.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span>Sarah Chen</span>
                        <span>•</span>
                        <span>Dec 15, 2024</span>
                        <span>•</span>
                        <span>12,450 views</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="popular-post-card group cursor-pointer">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                        The Science of Note-Taking: Why Digital Beats Paper
                      </h3>
                      <p className="text-zinc-400 text-sm mb-3">
                        Research-backed insights into why digital note-taking tools improve retention and recall by 40%.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span>Emma Kim</span>
                        <span>•</span>
                        <span>Dec 12, 2024</span>
                        <span>•</span>
                        <span>9,820 views</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="popular-post-card group cursor-pointer">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        Building a Remote Team Culture That Actually Works
                      </h3>
                      <p className="text-zinc-400 text-sm mb-3">
                        Practical strategies for creating connection and collaboration in distributed teams.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span>Marcus Rodriguez</span>
                        <span>•</span>
                        <span>Dec 10, 2024</span>
                        <span>•</span>
                        <span>8,650 views</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="popular-post-card group cursor-pointer">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                        From Chaos to Clarity: Organizing Your Digital Life
                      </h3>
                      <p className="text-zinc-400 text-sm mb-3">
                        A step-by-step guide to decluttering your digital workspace and maintaining long-term organization.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span>Sarah Chen</span>
                        <span>•</span>
                        <span>Dec 8, 2024</span>
                        <span>•</span>
                        <span>7,920 views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Statistics Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-card p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-600/10 border border-violet-500/20 backdrop-blur text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">150+</div>
              <div className="text-white font-semibold mb-1">Articles Published</div>
              <div className="text-zinc-400 text-sm">Comprehensive guides and insights</div>
            </div>

            <div className="stat-card p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 backdrop-blur text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">50K+</div>
              <div className="text-white font-semibold mb-1">Monthly Readers</div>
              <div className="text-zinc-400 text-sm">Growing community of learners</div>
            </div>

            <div className="stat-card p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20 backdrop-blur text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">12</div>
              <div className="text-white font-semibold mb-1">Expert Authors</div>
              <div className="text-zinc-400 text-sm">Industry thought leaders</div>
            </div>

            <div className="stat-card p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 backdrop-blur text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-white font-semibold mb-1">Reader Satisfaction</div>
              <div className="text-zinc-400 text-sm">Based on feedback surveys</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40 p-8 text-center backdrop-blur">
            <div className="floating mb-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mx-auto">
                <Mail className="text-white h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Stay in the loop</h2>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              Get the latest articles, insights, and Nova updates delivered straight to your inbox. No spam, just valuable content.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-zinc-400 focus:outline-none focus:border-violet-500"
                />
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-medium hover:from-violet-600 hover:to-indigo-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-zinc-500 mt-3">Unsubscribe anytime. We respect your privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-16 sm:mt-20 border-t border-zinc-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="text-white h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 6v12"></path>
                  <path d="M17.196 9 6.804 15"></path>
                  <path d="m6.804 9 10.392 6"></path>
                </svg>
              </span>
              <span>© 2025 Nova Labs</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Privacy</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Terms</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
