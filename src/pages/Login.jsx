import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles, Shield, Zap, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import person1 from '../assets/people_images/person1.jpg';
import person2 from '../assets/people_images/person2.jpg';
import person3 from '../assets/people_images/person3.jpg';
import person4 from '../assets/people_images/person4.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem('theme') || 'dark';
      const isDarkMode = theme === 'dark' || document.documentElement.className === 'dark';
      setIsDark(isDarkMode);
    };

    checkTheme();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Access your notes instantly across all devices'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'End-to-end encryption keeps your thoughts safe'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Smart suggestions that understand your context'
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className={`w-1/2 flex items-center justify-center p-8 ${isDark ? 'bg-[#0a0a12]' : 'bg-white'}`}>
        <div className="w-full max-w-md">
          {/* Header */}
           <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="assesium-logo.png" alt="Assesium Logo" className="h-12" />
            </div>
            
            <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Welcome back</h1>
            <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>Sign in to continue to your account</p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className={`w-full ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-zinc-100 border-zinc-200 text-zinc-900 hover:bg-zinc-200'}`}
            >
              <Chrome className="w-4 h-4 mr-2" />
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className={`w-full ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-zinc-100 border-zinc-200 text-zinc-900 hover:bg-zinc-200'}`}
            >
              <Github className="w-4 h-4 mr-2" />
              Continue with GitHub
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${isDark ? 'bg-[#0a0a12] text-zinc-400' : 'bg-white text-zinc-600'}`}>Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`pl-10 focus:ring-2 focus:ring-violet-400/50 ${isDark ? 'bg-white/5 border-white/10 text-white placeholder:text-zinc-500' : 'bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400'}`}
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`} />
                <Input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`pl-10 pr-10 focus:ring-2 focus:ring-violet-400/50 ${isDark ? 'bg-white/5 border-white/10 text-white placeholder:text-zinc-500' : 'bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400'}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-violet-600 bg-white/5 border-white/10 rounded focus:ring-violet-400/50"
                />
                <span className="ml-2 text-sm text-zinc-300">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-violet-400 hover:text-violet-300">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white py-3 text-lg font-semibold"
            
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-zinc-400">
              Don't have an account?{' '}
              <Link to="/get-started" className="text-violet-400 hover:text-violet-300 font-medium">
                Sign up for free
              </Link>
            </p>
          </div>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-white">Secure Login</span>
            </div>
            <p className="text-xs text-zinc-400">
              Your login is protected with enterprise-grade security and end-to-end encryption.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Features & Branding */}
      <div className={`w-1/2 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-violet-900/20 to-indigo-900/20' : 'bg-gradient-to-br from-violet-50 to-indigo-50'}`}>
        <div className="relative z-10 flex flex-col justify-center p-12 max-w-lg mx-auto">
          {/* Header */}
          <div className="gradient-bg"></div>
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-violet-400 border-violet-400/20 bg-violet-400/10">
              <Sparkles className="w-3 h-3 mr-1" />
              Trusted by 50,000+ users
            </Badge>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Your assessments deserve the best platform
            </h2>
            <p className="text-zinc-3000 text-lg leading-relaxed">
              Join thousands of educators, institutions, and parents who have transformed their exam marking with Assesium's AI-powered platform.
            </p>
          </div>

          {/* Features */}
          
          <div className="space-y-6">
            
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="gradient-bg"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="gradient-bg"></div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-zinc-9400">{feature.description}</p>
                
                </div>
             <div className="gradient-bg"></div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur">
            <div className="gradient-bg"></div>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-600 text-yellow-600"></Star>
              ))}
            </div>

            
                        
            <p className="text-zinc-1900 mb-4 italic">
              "Assesium has completely transformed how I mark and evaluate student assessments. The AI marking is incredibly accurate, and the performance analytics help me track student progress effectively."
            </p>
            <div className="flex items-center gap-3">
              <img src={person4} alt="Prof. Rachel Kim" className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-zinc-900 shadow-lg" />
              
              <div>
                <p className="text-black font-medium">Prof. Rachel Kim</p>
                <p className="text-zinc-9900 text-sm">Education Department, MIT</p>
              </div>
            <div className="gradient-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

