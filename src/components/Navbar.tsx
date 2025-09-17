import { useState } from 'react';
import { Menu, X, Brain, Award } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Logo - KHIT College */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10  rounded-full flex items-center justify-center">
              <ImageWithFallback 
                src="/KHIT.webp"
                alt="KHIT College Logo"
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-foreground">Kallam HaranadhaReddy Institute Of Technology</div>
              {/* <div className="text-xs text-muted-foreground">College</div> */}
            </div>
          </div>

          {/* Center Brand */}
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-foreground">NeuroQuest</span>
          </div>

          {/* Right Logo - Department */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <div className="text-sm font-medium text-foreground">Department of</div>
              <div className="text-xs text-foreground">Artificial Intelligence and Machine Learning</div>
            </div>
            <div className="w-10 h-10  rounded-full flex items-center justify-center">
              <ImageWithFallback 
                src="/AIMSA.png"
                alt="KHIT College Logo"
                className="w-14 h-12 object-cover rounded-full"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center py-2 border-t border-border">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('rounds')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Rounds
            </button>
            <button 
              onClick={() => scrollToSection('prizes')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Prizes
            </button>
            <button 
              onClick={() => scrollToSection('questions')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Questions
            </button>
            <button 
              onClick={() => scrollToSection('registration')}
              className="text-sm text-white font-medium bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-3 py-1 rounded-full transition-colors"
            >
              Register
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('rounds')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Rounds
              </button>
              <button 
                onClick={() => scrollToSection('prizes')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Prizes
              </button>
              <button 
                onClick={() => scrollToSection('questions')}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Questions
              </button>
              <Button 
                onClick={() => scrollToSection('registration')}
                className="mt-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}