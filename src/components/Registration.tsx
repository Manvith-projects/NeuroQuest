import { ExternalLink, User, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Registration() {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-blue-500/40 bg-blue-500/10 dark:border-blue-400/50 dark:bg-blue-400/15",
      purple: "border-purple-500/40 bg-purple-500/10 dark:border-purple-400/50 dark:bg-purple-400/15",
      yellow: "border-yellow-500/40 bg-yellow-500/10 dark:border-yellow-400/50 dark:bg-yellow-400/15",
      green: "border-green-500/40 bg-green-500/10 dark:border-green-400/50 dark:bg-green-400/15"
    };
    return colorMap[color as keyof typeof colorMap] || "border-border bg-card";
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 dark:text-blue-400",
      purple: "text-purple-600 dark:text-purple-400",
      yellow: "text-yellow-600 dark:text-yellow-400",
      green: "text-green-600 dark:text-green-400"
    };
    return colorMap[color as keyof typeof colorMap] || "text-muted-foreground";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
            Join the Quest
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to showcase your individual knowledge? Register now and be part of the ultimate departmental quiz experience! 🚀
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className={`hover:shadow-xl transition-all duration-300 ${getColorClasses("blue")}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  📋 Registration Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className={`w-5 h-5 ${getIconColorClasses("blue")}`} />
                  <span className="text-muted-foreground">Individual Competition</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className={`w-5 h-5 ${getIconColorClasses("purple")}`} />
                  <span className="text-muted-foreground">Event Date: TBD</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className={`w-5 h-5 ${getIconColorClasses("yellow")}`} />
                  <span className="text-muted-foreground">Duration: Half Day Event</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className={`w-5 h-5 ${getIconColorClasses("green")}`} />
                  <span className="text-muted-foreground">Venue: Department Campus</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`hover:shadow-xl transition-all duration-300 ${getColorClasses("purple")}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  🎯 Eligibility & Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <span className={`${getIconColorClasses("blue")} mt-1`}>•</span>
                  <span>Open to all department students</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <span className={`${getIconColorClasses("blue")} mt-1`}>•</span>
                  <span>Individual participation only</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <span className={`${getIconColorClasses("blue")} mt-1`}>•</span>
                  <span>All decisions by judges are final</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <span className={`${getIconColorClasses("blue")} mt-1`}>•</span>
                  <span>Participants must bring valid student ID</span>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center">
                <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600"
                >
                <a
                  href="https://forms.gle/LSz44v7JX4t7BiG86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Register Now! 🚀
                </a>
                </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Click to open Google Form registration
              </p>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1615494488007-32a3d3c712c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcXVpeiUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc1ODEzMTU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technology quiz competition"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 bg-card dark:bg-card rounded-full p-4 shadow-lg border border-border">
              <div className="text-2xl animate-bounce">🎉</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-4 shadow-lg dark:from-blue-600 dark:to-purple-600">
              <div className="text-center">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-sm">Amazing Prizes</div>
                <div className="text-xs opacity-90">Await Winners!</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg ${getColorClasses("blue")}`}>
              <div className="text-base text-foreground">🎯 Challenging Questions</div>
            </div>
            <div className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg ${getColorClasses("purple")}`}>
              <div className="text-base text-foreground">🧠 Individual Excellence</div>
            </div>
            <div className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-lg ${getColorClasses("green")}`}>
              <div className="text-base text-foreground">🏆 Exciting Prizes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}