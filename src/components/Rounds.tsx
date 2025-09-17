import { FileSearch, Eye, Zap, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Rounds() {
  const rounds = [
    {
      icon: FileSearch,
      title: "Screening Round",
      description: "Initial written test covering all four domains",
      details: [
        "📝 Written assessment format",
        "🕒 Time-bound questions",
        "🎯 Qualifying round for next stages",
        "📊 Mixed difficulty levels"
      ],
      color: "blue",
      emoji: "📋"
    },
    {
      icon: Eye,
      title: "Visual/Logo Round",
      description: "Identify logos, symbols, and visual puzzles",
      details: [
        "👁️ Image-based questions",
        "🏢 Corporate logos & tech brands",
        "🎬 Movie posters & stills",
        "🧩 Visual pattern recognition"
      ],
      color: "purple",
      emoji: "👀"
    },
    {
      icon: Zap,
      title: "Buzzer Round",
      description: "Fast-paced rapid-fire questions",
      details: [
        "⚡ Quick response required",
        "🔔 Buzzer-based answers",
        "⏱️ High-pressure environment",
        "🚀 Test your reflexes & knowledge"
      ],
      color: "yellow",
      emoji: "⚡"
    },
    {
      icon: Trophy,
      title: "Finals",
      description: "Ultimate showdown for the champions",
      details: [
        "🏆 Top participants compete",
        "🎪 Live audience experience",
        "🧠 Complex multi-part questions",
        "👑 Crown the NeuroQuest Champions"
      ],
      color: "green",
      emoji: "🏆"
    }
  ];

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
            Competition Rounds
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four exciting rounds designed to test different aspects of your knowledge and skills 🎯
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rounds.map((round, index) => {
            const IconComponent = round.icon;
            return (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 hover:scale-105 ${getColorClasses(round.color)}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-card rounded-full flex items-center justify-center shadow-lg border border-border">
                    <IconComponent className={`w-8 h-8 ${getIconColorClasses(round.color)}`} />
                  </div>
                  <CardTitle className="text-xl flex items-center justify-center gap-2">
                    {round.emoji} {round.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center mb-4">
                    {round.description}
                  </p>
                  <div className="space-y-2">
                    {round.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-0.5">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  <Badge variant="secondary" className="w-full justify-center mt-4">
                    Round {index + 1}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-card rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl mb-4 text-foreground">🎯 Round Progression</h3>
            <p className="text-muted-foreground leading-relaxed">
              Participants advance through each round based on their individual performance. Only the top performers 
              from each stage move forward, culminating in an exciting finale where the ultimate 
              NeuroQuest champion will be crowned! 👑
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}