import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Star, PartyPopper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SuccessMessageProps {
  dishName: string;
}

export function SuccessMessage({ dishName }: SuccessMessageProps) {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50;

      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2
        },
        colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'],
        shapes: ['star', 'circle'],
        gravity: 1.2,
        scalar: 0.7,
        drift: 0,
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 shadow-xl bg-white/90 backdrop-blur-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="flex items-center justify-center gap-3 text-2xl text-orange-600">
            <PartyPopper className="h-8 w-8" />
            <span>Woohoo!</span>
            <Gift className="h-8 w-8" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-xl font-semibold text-gray-800">
                Congratulations! 🎉
              </p>
              <p className="text-lg text-gray-700">
                You've successfully claimed your free
              </p>
              <p className="text-2xl font-bold text-orange-600 flex items-center justify-center gap-2">
                <Star className="h-5 w-5" />
                {dishName}
                <Star className="h-5 w-5" />
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-gray-600 italic">
                "Good food is good mood!"
              </p>
              <p className="text-sm text-gray-500">
                Show this screen to the staff to redeem your treat.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}