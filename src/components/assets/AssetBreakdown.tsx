import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const COLORS = ['#00E5BE', '#2563EB', '#FF6B6B', '#FFD93D', '#4834D4', '#686DE0'];

const currencyData = [
  { name: 'Bitcoin (BTC)', value: 45, amount: '₿ 1.245', usdValue: '$52,390' },
  { name: 'Ethereum (ETH)', value: 30, amount: 'Ξ 15.721', usdValue: '$34,927' },
  { name: 'USDT', value: 15, amount: '$ 17,500', usdValue: '$17,500' },
  { name: 'SOL', value: 10, amount: 'SOL 89.32', usdValue: '$11,611' },
];

const assetClassData = [
  { name: 'Cryptocurrencies', value: 55, usdValue: '$64,001' },
  { name: 'Stablecoins', value: 25, usdValue: '$29,091' },
  { name: 'DeFi Tokens', value: 12, usdValue: '$13,964' },
  { name: 'NFTs', value: 8, usdValue: '$9,309' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1A2333] p-4 rounded-lg border border-white/10">
        <p className="text-white font-medium">{payload[0].payload.name}</p>
        <p className="text-[#00E5BE]">{payload[0].payload.amount}</p>
        <p className="text-gray-400">{payload[0].payload.usdValue}</p>
      </div>
    );
  }
  return null;
};

const AssetBreakdown = () => {
  const [activeView, setActiveView] = useState<'currency' | 'class'>('currency');
  const data = activeView === 'currency' ? currencyData : assetClassData;

  return (
    <Card className="bg-[#0B1221]/50 border-white/10 backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl text-white">Asset Breakdown</CardTitle>
          <p className="text-sm text-gray-400 mt-1">Total Portfolio Value: $116,428</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={activeView === 'currency' ? 'default' : 'outline'}
            onClick={() => setActiveView('currency')}
            className={activeView === 'currency' ? 'bg-[#00E5BE] hover:bg-[#00E5BE]/90' : 'border-white/10'}
          >
            By Currency
          </Button>
          <Button 
            variant={activeView === 'class' ? 'default' : 'outline'}
            onClick={() => setActiveView('class')}
            className={activeView === 'class' ? 'bg-[#00E5BE] hover:bg-[#00E5BE]/90' : 'border-white/10'}
          >
            By Asset Class
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="middle" 
                  align="right"
                  layout="vertical"
                  formatter={(value: string) => (
                    <span className="text-gray-400">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {data.map((item, index) => (
              <div 
                key={item.name}
                className="bg-[#1A2333]/50 p-4 rounded-lg border border-white/10 hover:border-[#00E5BE]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-white">{item.name}</span>
                  </div>
                  <span className="text-[#00E5BE]">{item.usdValue}</span>
                </div>
                <div className="mt-2">
                  <div className="bg-white/10 h-1.5 rounded-full">
                    <div 
                      className="h-full rounded-full bg-[#00E5BE]" 
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetBreakdown;