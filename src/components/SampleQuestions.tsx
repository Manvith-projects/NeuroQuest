import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Lightbulb, Brain, Film, Cpu } from 'lucide-react';

export function SampleQuestions() {
  const sampleQuestions = [
    {
      category: "AI/ML",
      icon: Brain,
      color: "blue",
      question: "Which activation function is commonly known as the 'dying ReLU' problem solver?",
      options: ["A) Sigmoid", "B) Tanh", "C) Leaky ReLU", "D) Softmax"],
      answer: "C) Leaky ReLU",
      explanation: "Leaky ReLU allows small negative values, preventing neurons from becoming inactive.",
      emoji: "🧠"
    },
    {
      category: "Technology",
      icon: Cpu,
      color: "purple",
      question: "What does 'API' stand for in software development?",
      options: ["A) Advanced Programming Interface", "B) Application Programming Interface", "C) Automated Program Integration", "D) Applied Programming Instructions"],
      answer: "B) Application Programming Interface",
      explanation: "APIs allow different software applications to communicate with each other.",
      emoji: "💻"
    },
    {
      category: "Tollywood",
      icon: Film,
      color: "yellow",
      question: "Which Telugu movie featured the famous dialogue 'Evadikevadu Ekkadhanu Maryadha'?",
      options: ["A) Magadheera", "B) Chatrapathi", "C) Pokiri", "D) Arjun Reddy"],
      answer: "B) Chatrapathi",
      explanation: "This iconic dialogue was delivered by Prabhas in the movie Chatrapathi.",
      emoji: "🎬"
    },
    {
      category: "General Knowledge",
      icon: Lightbulb,
      color: "green",
      question: "Which element has the highest melting point in the periodic table?",
      options: ["A) Carbon", "B) Tungsten", "C) Iron", "D) Gold"],
      answer: "B) Tungsten",
      explanation: "Tungsten has a melting point of 3,695°K, the highest among all elements.",
      emoji: "🔬"
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

  const getBadgeVariant = (color: string) => {
    const variantMap = {
      blue: "default",
      purple: "secondary",
      yellow: "outline",
      green: "destructive"
    };
    return variantMap[color as keyof typeof variantMap] || "default";
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
            Sample Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a taste of what's coming! Here are some sample questions from each category 🤔💡
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sampleQuestions.map((q, index) => {
            const IconComponent = q.icon;
            return (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-300 ${getColorClasses(q.color)} overflow-hidden`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge variant={getBadgeVariant(q.color)} className="text-sm">
                      {q.emoji} {q.category}
                    </Badge>
                    <IconComponent className={`w-6 h-6 ${getIconColorClasses(q.color)}`} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="text-lg text-foreground leading-relaxed">
                    {q.question}
                  </h4>
                  
                  <div className="space-y-2">
                    {q.options.map((option, optionIndex) => (
                      <div 
                        key={optionIndex} 
                        className={`p-3 rounded-lg text-sm transition-colors ${
                          option === q.answer 
                            ? 'bg-green-500/15 border border-green-500/40 text-green-600 dark:bg-green-400/20 dark:border-green-400/50 dark:text-green-400' 
                            : 'bg-card border border-border text-muted-foreground hover:bg-muted/50'
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border">
                    <p className="text-sm text-muted-foreground">
                      <span className="text-green-600 dark:text-green-400 font-medium">✅ Answer: </span>
                      {q.answer}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">💡 Explanation: </span>
                      {q.explanation}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto border border-border">
            <h3 className="text-2xl mb-4 text-foreground">🎯 Think You Can Handle More?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These are just a glimpse of the challenging and fun questions waiting for you in NeuroQuest! 
              Our question bank spans from cutting-edge AI concepts to the latest Tollywood hits.
            </p>
            <p className="text-blue-500">
              Ready to put your knowledge to the ultimate test? 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}