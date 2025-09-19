import { Trophy, Award, Medal, Gift, Crown, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';

export function Prizes() {
  const prizes = [
    {
      position: '1st',
      title: 'Champion',
      icon: Crown,
      reward: 'Premium Tech Gadget',
      description: 'Latest Tech Device + Certificate + Trophy',
      bgColor: 'from-yellow-400 to-yellow-600',
      borderColor: 'border-yellow-500',
      iconColor: 'text-yellow-600',
      badgeColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      position: '2nd',
      title: 'Runner Up',
      icon: Trophy,
      reward: 'Tech Gadget',
      description: 'Tech Gadget + Certificate + Trophy',
      bgColor: 'from-gray-300 to-gray-500',
      borderColor: 'border-gray-400',
      iconColor: 'text-gray-600',
      badgeColor: 'bg-gray-100 text-gray-800',
    },
    {
      position: '3rd',
      title: 'Second Runner Up',
      icon: Medal,
      reward: 'Movie Tickets',
      description: 'Movie Vouchers + Certificate + Medal',
      bgColor: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-500',
      iconColor: 'text-orange-600',
      badgeColor: 'bg-orange-100 text-orange-800',
    },
  ];

  return (
    <section id="prizes" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Gift className="w-16 h-16 text-blue-500 animate-bounce" />
              <Star className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
            🏆 Prizes & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exciting rewards await the top performers! Show your knowledge and win big! 🎉
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {prizes.map((prize, index) => (
            <Card 
              key={prize.position}
              className={`relative hover:shadow-2xl transition-all duration-500 hover:scale-105 ${prize.borderColor} border-2 bg-gradient-to-br ${prize.bgColor} p-1`}
            >
              <div className="bg-card rounded-lg p-6 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${prize.bgColor} flex items-center justify-center shadow-lg`}>
                      <prize.icon className="w-10 h-10 text-white" />
                    </div>
                    <Badge className={`absolute -top-2 left-1/2 transform -translate-x-1/2 ${prize.badgeColor} border-0`}>
                      {prize.position} Place
                    </Badge>
                  </div>
                  <h3 className="text-2xl text-foreground mb-2">{prize.title}</h3>
                </CardHeader>
                
                <CardContent className="text-center space-y-4">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {prize.reward}
                  </div>
                  <p className="text-muted-foreground">
                    {prize.description}
                  </p>
                  
                  {index === 0 && (
                    <div className="mt-6 p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Crown className="w-4 h-4 text-yellow-600" />
                        <span>NeuroQuest Champion Title</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl mb-6 text-center text-foreground">🎯 Additional Recognition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                <div>
                  <div className="font-medium text-foreground">Participation Certificates</div>
                  <div className="text-sm text-muted-foreground">For all participants</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-purple-500" />
                <div>
                  <div className="font-medium text-foreground">Special Mentions</div>
                  <div className="text-sm text-muted-foreground">For outstanding performance</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-green-500" />
                <div>
                  <div className="font-medium text-foreground">Best in Category</div>
                  <div className="text-sm text-muted-foreground">AI/ML, Tech, GK, Pop Culture</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Medal className="w-6 h-6 text-orange-500" />
                <div>
                  <div className="font-medium text-foreground">Department Recognition</div>
                  <div className="text-sm text-muted-foreground">Academic achievement points</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-500/40">
            <Gift className="w-5 h-5" />
            <span className="font-medium">Amazing Prizes Worth Thousands!</span>
          </div>
        </div>
      </div>
    </section>
  );
}