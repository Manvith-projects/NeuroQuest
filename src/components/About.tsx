import { Brain, Target, User, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
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

  const getIconBgClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500/20 dark:bg-blue-400/20",
      purple: "bg-purple-500/20 dark:bg-purple-400/20",
      yellow: "bg-yellow-500/20 dark:bg-yellow-400/20",
      green: "bg-green-500/20 dark:bg-green-400/20"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-muted";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
            About NeuroQuest
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NeuroQuest is where the worlds of technology, artificial intelligence, general knowledge, 
            and pop culture collide in an epic battle of minds! 🧠⚡
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYnJhaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODEzMTU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Neural network visualization"
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl text-foreground">
              🎯 The Perfect Blend of Academic Excellence & Fun
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Designed for curious individuals who love to explore the cutting-edge world of technology 
              while staying connected to general knowledge and the vibrant Tollywood film industry. 
              Our questions span from the latest AI breakthroughs to your favorite movie dialogues!
            </p>
            <div className={`flex items-center gap-3 ${getIconColorClasses("blue")}`}>
              <Brain className="w-6 h-6" />
              <span>Individual competition challenging all knowledge levels</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className={`text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 ${getColorClasses("blue")}`}>
            <CardContent className="pt-6">
              <div className={`w-16 h-16 ${getIconBgClasses("blue")} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-border`}>
                <Target className={`w-8 h-8 ${getIconColorClasses("blue")}`} />
              </div>
              <h4 className="text-xl mb-3 text-foreground">Multi-Domain Challenge</h4>
              <p className="text-muted-foreground">
                Test your knowledge across Technology, AI/ML, General Knowledge, and Tollywood references
              </p>
            </CardContent>
          </Card>
          
          <Card className={`text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 ${getColorClasses("purple")}`}>
            <CardContent className="pt-6">
              <div className={`w-16 h-16 ${getIconBgClasses("purple")} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-border`}>
                <User className={`w-8 h-8 ${getIconColorClasses("purple")}`} />
              </div>
              <h4 className="text-xl mb-3 text-foreground">Individual Excellence</h4>
              <p className="text-muted-foreground">
                Showcase your personal knowledge and skills in this individual competition
              </p>
            </CardContent>
          </Card>
          
          <Card className={`text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 ${getColorClasses("yellow")}`}>
            <CardContent className="pt-6">
              <div className={`w-16 h-16 ${getIconBgClasses("yellow")} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-border`}>
                <Award className={`w-8 h-8 ${getIconColorClasses("yellow")}`} />
              </div>
              <h4 className="text-xl mb-3 text-foreground">Exciting Prizes</h4>
              <p className="text-muted-foreground">
                Compete for amazing prizes and gain recognition in the academic community
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}