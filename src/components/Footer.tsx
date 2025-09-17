import { Heart, Mail, Users, Calendar, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Department Logo */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
              <ImageWithFallback 
                src="/AIMSA.png"
                alt="KHIT College Logo"
                className="w-24 h-24 object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <div className="text-lg font-medium text-white">Department of</div>
              <div className="text-lg font-medium text-white">Artificial Intelligence And Machine Learning</div>
            </div>
          </div>

          {/* Event Info */}
          <div className="space-y-4">
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              🧠 NeuroQuest
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Where Technology meets Knowledge in the ultimate individual academic quiz competition. 
              Join us for an exciting journey through AI, Technology, General Knowledge, and Pop Culture!
            </p>
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Academic Year 2024-25</span>
            </div>
          </div>
          
          {/* Contact & Support */}
          <div className="space-y-4">
            <h4 className="text-xl mb-4 flex items-center gap-2">
              📞 Contact & Support
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">AIMSA@KHITGUNTUR.AC.IN</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">Event Coordinators Available</span>
              </div>
              <p className="text-sm">
                Have questions? Reach out to our organizing committee for any queries 
                about registration, rules, or event details.
              </p>
            </div>
          </div>
          
          {/* Event Credits */}
          <div className="space-y-4">
            <h4 className="text-xl mb-4 flex items-center gap-2">
              🎉 Event Credits
            </h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div>
                <span className="text-blue-300">Organizing Committee:</span>
                <div className="mt-1">Academic Events Team</div>
              </div>
              <div>
                <span className="text-purple-300">Question Curation:</span>
                <div className="mt-1">Faculty & Industry Experts</div>
              </div>
              <div>
                <span className="text-yellow-300">Technical Support:</span>
                <div className="mt-1">IT & Development Team</div>
              </div>
              <div>
                <span className="text-green-300">Special Thanks:</span>
                <div className="mt-1">All Participants & Volunteers</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>for curious minds</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 NeuroQuest. All rights reserved.
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-400 text-sm">
            <p>🚀 Ready to explore the frontiers of knowledge? Join NeuroQuest today!</p>
          </div>
        </div>
        
        {/* Fun Elements */}
        <div className="text-center mt-8 opacity-60">
          <div className="text-2xl space-x-4 animate-pulse">
            🧠 💡 🚀 🎯 🏆 🎉
          </div>
        </div>
      </div>
    </footer>
  );
}