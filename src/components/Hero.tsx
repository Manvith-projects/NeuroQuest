import { Brain, Zap, Trophy, User } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Hero Image */}
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1543295523-78c9bbdba65c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdGVjaG5vbG9neSUyMGNhbXB1c3xlbnwxfHx8fDE3NTgxMzE4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Students on campus with technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-purple-900/90 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Brain className="w-24 h-24 text-white animate-pulse drop-shadow-lg" />
            <Zap className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-bounce drop-shadow-lg" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 text-white drop-shadow-2xl">
          NeuroQuest
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
          🧠 Where Technology Meets Knowledge 🚀<br />
          The Ultimate Individual Academic Quiz Competition
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30">
            <Brain className="w-5 h-5 text-blue-300" />
            <span className="text-white">AI/ML</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30">
            <Zap className="w-5 h-5 text-purple-300" />
            <span className="text-white">Technology</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30">
            <Trophy className="w-5 h-5 text-yellow-300" />
            <span className="text-white">General Knowledge</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30">
            <User className="w-5 h-5 text-green-300" />
            <span className="text-white">Pop Culture</span>
          </div>
        </div>
        
        <Button
          size="lg"
          className="text-lg px-8 py-6 bg-white text-blue-900 hover:bg-white/90 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          asChild
        >
          <a
            href="https://forms.gle/LSz44v7JX4t7BiG86"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Quest 🚀
          </a>
        </Button>
      </div>
    </section>
  );
}