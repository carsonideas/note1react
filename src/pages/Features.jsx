
import { useState, useEffect } from 'react'
import '../App.css'
import { Sparkles, Bot, Search, Cloud, Shield, Lock, Eye, FileCheck, Zap, ArrowRight, LogIn, Sun, Moon, Users, FileText, Download, Mic, BarChart3, Slack, HardDrive, Calendar, Workflow, UserCheck } from 'lucide-react'

function Features() {
  const [isDark, setIsDark] = useState(true)
  const [activeDemo, setActiveDemo] = useState('ai-writing')

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.body.className = 'antialiased text-zinc-100 bg-[#0a0a12]'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.className = 'antialiased text-zinc-900 bg-white'
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const demoTabs = [
    { id: 'ai-writing', label: 'AI Writing' },
    { id: 'smart-search', label: 'Smart Search' },
    { id: 'backlinks', label: 'Backlinks' }
  ]

  return (
    <div className={`antialiased ${isDark ? 'text-zinc-100 bg-[#0a0a12]' : 'text-zinc-900 bg-white'}`} style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial' }}>
      {/* Background glow - only show in dark mode */}
      {isDark && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(138,92,246,0.55),rgba(18,18,27,0))]"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.45),rgba(18,18,27,0))]"></div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 hero-section pt-20 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className={`inline-flex items-center gap-2 rounded-full border ${isDark ? 'border-white/10 bg-white/5 text-zinc-200' : 'border-zinc-200 bg-zinc-100 text-zinc-700'} px-3 py-1 text-xs font-medium backdrop-blur`}>
                <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                Powerful Features
              </span>
            </div>
            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-6`}>
              Everything you need to<br />
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">think clearly</span>
            </h1>
            <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
              Nova combines the power of AI with intuitive design to create the ultimate note-taking experience. Discover features that adapt to how you think.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI-Powered Notes */}
            <div className={`feature-card lg:col-span-2 relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-8 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              {isDark && <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0%,transparent_70%)] opacity-50"></div>}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>AI-Powered Intelligence</h3>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Smart suggestions that understand context</p>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img src="/src/assets/images/ai-powered-notes.png" alt="AI-powered note-taking interface" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Smart Auto-Complete</h4>
                      <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>AI suggests completions as you type</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-medium`}>Content Analysis</h4>
                      <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Automatically extract key insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Search */}
            <div className={`feature-card relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-6 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div>
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img src="/src/assets/images/instant-search.png" alt="Lightning-fast search interface" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Instant Search</h3>
                </div>
                <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Find anything in milliseconds with our lightning-fast search engine.</p>
                <div className="space-y-2">
                  <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                    Full-text search across all notes
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                    Smart filters and tags
                  </div>
                  <div className={`flex items-center gap-2 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                    Search by date, type, or content
                  </div>
                </div>
              </div>
            </div>

            {/* Cross-Platform Sync */}
            <div className={`feature-card lg:col-span-3 relative overflow-hidden ring-1 ${isDark ? 'ring-white/10 bg-white/5' : 'ring-zinc-200 bg-zinc-50'} rounded-3xl p-8 backdrop-blur hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(139,92,246,0.25)]`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <Cloud className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>Seamless Sync</h3>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Your notes, everywhere you need them</p>
                    </div>
                  </div>
                  <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-6`}>
                    Access your notes from any device with real-time synchronization. Whether you're on your phone, tablet, or computer, your thoughts are always with you.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-zinc-100 border-zinc-200'} border`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-6 w-6 rounded bg-emerald-500/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className={`${isDark ? 'text-white' : 'text-zinc-900'} text-sm font-medium`}>Real-time</span>
                      </div>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-xs`}>Changes sync instantly across all devices</p>
                    </div>
                    <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-zinc-100 border-zinc-200'} border`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-6 w-6 rounded bg-blue-500/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </div>
                        <span className={`${isDark ? 'text-white' : 'text-zinc-900'} text-sm font-medium`}>Offline</span>
                      </div>
                      <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-xs`}>Work without internet, sync when connected</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img src="/src/assets/images/cross-platform-sync.png" alt="Cross-platform synchronization" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-4`}>
              Connects with your favorite tools
            </h2>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto`}>
              Nova integrates seamlessly with the tools you already use, creating a unified workflow that enhances your productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/src/assets/images/integrations-ecosystem.png" alt="Nova integrations ecosystem" className="w-full rounded-2xl" />
            </div>
            <div className="space-y-6">
              <div className={`integration-item p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100'} border transition-colors`}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <Slack className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold`}>Slack Integration</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>Share notes and collaborate directly in Slack channels</p>
                  </div>
                </div>
              </div>

              <div className={`integration-item p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100'} border transition-colors`}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <HardDrive className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold`}>Google Drive Sync</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>Automatically backup and sync with Google Drive</p>
                  </div>
                </div>
              </div>

              <div className={`integration-item p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100'} border transition-colors`}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold`}>Calendar Integration</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>Link notes to calendar events and meetings</p>
                  </div>
                </div>
              </div>

              <div className={`integration-item p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-zinc-50 border-zinc-200 hover:bg-zinc-100'} border transition-colors`}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                    <Workflow className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold`}>Zapier Automation</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>Connect with 5000+ apps through Zapier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-4`}>
              Built for performance
            </h2>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto`}>
              Experience lightning-fast performance with industry-leading metrics that keep you productive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className={`metric-card p-6 rounded-2xl ${isDark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-zinc-50 ring-1 ring-zinc-200'} backdrop-blur`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold`}>Search Speed</h4>
                  <span className="text-2xl font-bold text-emerald-400">&lt; 50ms</span>
                </div>
                <div className={`w-full ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'} rounded-full h-2`}>
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm mt-2`}>Average search response time across all notes</p>
              </div>

              <div className={`metric-card p-6 rounded-2xl ${isDark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-zinc-50 ring-1 ring-zinc-200'} backdrop-blur`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold`}>Sync Speed</h4>
                  <span className="text-2xl font-bold text-blue-400">2.3s</span>
                </div>
                <div className={`w-full ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'} rounded-full h-2`}>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm mt-2`}>Average time to sync across all devices</p>
              </div>

              <div className={`metric-card p-6 rounded-2xl ${isDark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-zinc-50 ring-1 ring-zinc-200'} backdrop-blur`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold`}>Uptime</h4>
                  <span className="text-2xl font-bold text-violet-400">99.9%</span>
                </div>
                <div className={`w-full ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'} rounded-full h-2`}>
                  <div className="bg-gradient-to-r from-violet-500 to-indigo-600 h-2 rounded-full" style={{ width: '99%' }}></div>
                </div>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm mt-2`}>Service availability over the last 12 months</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-zinc-50 border-zinc-200'} border`}>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'} mb-1`}>500K+</div>
                  <div className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>Active Users</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-zinc-50 border-zinc-200'} border`}>
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'} mb-1`}>50M+</div>
                  <div className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>Notes Created</div>
                </div>
              </div>
            </div>

            <div>
              <img src="/src/assets/images/performance-metrics.png" alt="Performance dashboard" className="w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Security and Privacy Protection */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/src/assets/images/security-shield.png" alt="Security and privacy protection" className="w-full rounded-2xl" />
            </div>
            <div>
              <div className="mb-8">
                <h2 className={`text-3xl sm:text-4xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-4`}>
                  Security and privacy protection
                </h2>
                <h3 className={`text-xl ${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-4`}>Your privacy is our priority</h3>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Nova uses military-grade encryption and zero-knowledge architecture to ensure your thoughts remain completely private.
                </p>
              </div>

              <div className="space-y-6">
                <div className="security-feature flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold mb-2`}>End-to-End Encryption</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>AES-256 encryption ensures your notes are encrypted on your device before syncing.</p>
                  </div>
                </div>

                <div className="security-feature flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold mb-2`}>Zero-Knowledge Architecture</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>We can't read your notes even if we wanted to. Your encryption keys never leave your devices.</p>
                  </div>
                </div>

                <div className="security-feature flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold mb-2`}>SOC 2 Compliance</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>Independently audited security controls meet the highest industry standards.</p>
                  </div>
                </div>

                <div className="security-feature flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold mb-2`}>Regular Security Audits</h4>
                    <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>Third-party security firms regularly test our systems for vulnerabilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-4`}>
              See Nova in action
            </h2>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto`}>
              Experience the power of Nova with our interactive demo. No signup required.
            </p>
          </div>

          <div className="demo-container max-w-4xl mx-auto">
            <div className="demo-tabs flex justify-center mb-8">
              <div className={`flex ${isDark ? 'bg-white/5' : 'bg-zinc-100'} rounded-full p-1 border ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                {demoTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDemo(tab.id)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeDemo === tab.id
                        ? 'bg-gradient-to-r from-violet-500 to-indigo-600 text-white'
                        : isDark
                        ? 'text-zinc-300 hover:text-white'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                    aria-selected={activeDemo === tab.id}
                    role="tab"
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={`demo-content p-8 rounded-2xl ${isDark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-zinc-50 ring-1 ring-zinc-200'} backdrop-blur`}>
              {activeDemo === 'ai-writing' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold mb-4`}>AI-Powered Writing Assistant</h4>
                    <div className="space-y-3 text-sm">
                      <div className={`flex items-center gap-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                        Smart auto-completion as you type
                      </div>
                      <div className={`flex items-center gap-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        Grammar and style suggestions
                      </div>
                      <div className={`flex items-center gap-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        <div className="h-2 w-2 rounded-full bg-violet-400"></div>
                        Content expansion and summarization
                      </div>
                    </div>
                  </div>
                  <div className={`demo-mockup p-4 rounded-lg ${isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-zinc-300'} border`}>
                    <div className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'} mb-2`}>Nova Editor</div>
                    <div className={`${isDark ? 'text-white' : 'text-zinc-900'} text-sm`}>
                      <span className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>Meeting notes from today's standup...</span>
                      <span className="bg-violet-500/20 text-violet-300 px-1 rounded">AI suggests: "Key action items and next steps"</span>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 'smart-search' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold mb-4`}>Lightning-Fast Search</h4>
                    <div className="space-y-3 text-sm">
                      <div className={`flex items-center gap-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                        Search across all notes instantly
                      </div>
                      <div className={`flex items-center gap-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                        Fuzzy matching and typo tolerance
                      </div>
                      <div className={`flex items-center gap-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                        Filter by tags, dates, and content type
                      </div>
                    </div>
                  </div>
                  <div className={`demo-mockup p-4 rounded-lg ${isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-zinc-300'} border`}>
                    <div className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'} mb-2`}>Search Results</div>
                    <div className="space-y-2 text-sm">
                      <div className={`${isDark ? 'text-white' : 'text-zinc-900'}`}>📝 Project Planning Notes</div>
                      <div className={`${isDark ? 'text-white' : 'text-zinc-900'}`}>💡 Brainstorming Session</div>
                      <div className={`${isDark ? 'text-white' : 'text-zinc-900'}`}>📊 Weekly Report Draft</div>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 'backlinks' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className={`${isDark ? 'text-white' : 'text-zinc-900'} font-semibold mb-4`}>Connected Knowledge</h4>
                    <div className="space-y-3 text-sm">
                      <div className={`flex items-center gap-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        <div className="h-2 w-2 rounded-full bg-violet-400"></div>
                        Automatic link suggestions
                      </div>
                      <div className={`flex items-center gap-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        <div className="h-2 w-2 rounded-full bg-indigo-400"></div>
                        Visual knowledge graph
                      </div>
                      <div className={`flex items-center gap-2 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                        Bidirectional linking
                      </div>
                    </div>
                  </div>
                  <div className={`demo-mockup p-4 rounded-lg ${isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-zinc-300'} border`}>
                    <div className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'} mb-2`}>Knowledge Graph</div>
                    <div className={`text-sm ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      <span className="text-violet-400">[[Project Alpha]]</span> connects to<br />
                      <span className="text-indigo-400">[[Team Meeting]]</span> and<br />
                      <span className="text-purple-400">[[Budget Planning]]</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Experience Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-2xl border ${isDark ? 'border-white/10 bg-gradient-to-br from-zinc-900/70 to-zinc-900/40' : 'border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100'} p-8 text-center backdrop-blur`}>
            <h2 className={`text-3xl sm:text-4xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'} mb-4`}>Ready to experience the future of note-taking?</h2>
            <p className={`${isDark ? 'text-zinc-300' : 'text-zinc-600'} mb-8`}>Join thousands of users who have transformed their thinking with Nova.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#" className={`inline-flex items-center gap-2 ${isDark ? 'hover:bg-white/5 text-zinc-200 border-white/10' : 'hover:bg-zinc-100 text-zinc-700 border-zinc-300'} text-sm font-medium border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-lg`}>
                View pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-semibold ${isDark ? 'text-white' : 'text-zinc-900'} tracking-tight mb-4`}>
              More Features to Love
            </h2>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-2xl mx-auto`}>
              Discover all the features that make Nova the most powerful note-taking app ever built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Rich Text Editor', description: 'Beautiful formatting with Markdown support' },
              { icon: Download, title: 'Export Anywhere', description: 'Export to PDF, Word, or plain text' },
              { icon: Mic, title: 'Voice Notes', description: 'Record and transcribe voice memos' },
              { icon: BarChart3, title: 'Analytics', description: 'Track your writing habits and productivity' },
              { icon: Slack, title: 'Integrations', description: 'Connect with your favorite tools' },
              { icon: HardDrive, title: 'Offline Mode', description: 'Work without an internet connection' },
              { icon: Calendar, title: 'Daily Notes', description: 'Automatic daily note creation' },
              { icon: UserCheck, title: 'Collaboration', description: 'Share and collaborate on notes' }
            ].map((feature, index) => (
              <div key={index} className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-2xl p-6 backdrop-blur hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">
            Ready to transform your note-taking?
          </h2>
          <p className="text-zinc-300 text-lg mb-8">
            Join thousands of users who have already discovered the power of Nova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 shadow-violet-900/25 text-sm font-semibold text-white bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg transform-gpu transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] active:duration-75">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 hover:bg-white/5 text-sm font-medium text-zinc-200 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur-lg">
              View Pricing
            </button>
          </div>
        </div>
      </section>


      <style jsx>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .feature-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.25);
        }
      `}</style>
    </div>
  )
}

export default Features;