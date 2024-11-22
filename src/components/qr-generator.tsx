import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Utensils, ArrowRight, Smartphone } from 'lucide-react';

export function QRGenerator() {
  const [dishName, setDishName] = useState('');
  const [qrValue, setQrValue] = useState('');
  const baseUrl = window.location.origin;

  const generateQR = () => {
    if (!dishName.trim()) return;
    const promoUrl = `${baseUrl}/redeem?dish=${encodeURIComponent(dishName)}`;
    setQrValue(promoUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card className="border-2 shadow-lg">
          <CardHeader className="space-y-4">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Utensils className="h-7 w-7 text-orange-500" />
              <span>Restaurant QR Promotion</span>
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Generate a QR code for your customers to claim their free dish
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="dishName" className="text-base">Free Dish Name</Label>
                <Input
                  id="dishName"
                  placeholder="e.g., Margherita Pizza"
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                  className="h-12"
                />
              </div>
              
              <Button 
                className="w-full h-12 text-lg bg-orange-500 hover:bg-orange-600"
                onClick={generateQR}
                disabled={!dishName.trim()}
              >
                Generate QR Code
              </Button>

              {qrValue && (
                <div className="mt-8 space-y-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-6 bg-white rounded-xl shadow-md border-2 border-orange-100">
                      <QRCodeSVG value={qrValue} size={200} />
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4 space-y-4">
                    <h3 className="font-semibold flex items-center gap-2 text-orange-700">
                      <Smartphone className="h-5 w-5" />
                      How it works:
                    </h3>
                    <div className="space-y-2 text-sm text-orange-600">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        <p>Customers scan this QR code with their smartphone</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        <p>They'll be redirected to a form to enter their details</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        <p>Upon submission, they can claim their free {dishName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}