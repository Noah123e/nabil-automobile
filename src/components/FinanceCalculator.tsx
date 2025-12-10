import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";

interface FinanceCalculatorProps {
  vehiclePrice: number;
}

const FinanceCalculator = ({ vehiclePrice }: FinanceCalculatorProps) => {
  const [downPayment, setDownPayment] = useState(vehiclePrice * 0.2);
  const [months, setMonths] = useState(48);
  const [interestRate] = useState(3.9);

  const calculateMonthlyRate = () => {
    const loanAmount = vehiclePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const monthlyPayment =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
      (Math.pow(1 + monthlyInterestRate, months) - 1);
    return monthlyPayment;
  };

  const monthlyRate = calculateMonthlyRate();
  const totalCost = monthlyRate * months + downPayment;
  const totalInterest = totalCost - vehiclePrice;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="bg-card border-border p-6">
      <h3 className="font-display text-2xl font-bold text-foreground mb-6">
        Finance Calculator
      </h3>

      <div className="space-y-6">
        {/* Down Payment */}
        <div>
          <Label className="text-foreground mb-2 block">
            Down Payment: {formatCurrency(downPayment)}
          </Label>
          <Slider
            value={[downPayment]}
            onValueChange={(v) => setDownPayment(v[0])}
            min={0}
            max={vehiclePrice}
            step={1000}
            className="mt-2"
          />
        </div>

        {/* Duration */}
        <div>
          <Label className="text-foreground mb-2 block">Term: {months} Months</Label>
          <Slider
            value={[months]}
            onValueChange={(v) => setMonths(v[0])}
            min={12}
            max={84}
            step={12}
            className="mt-2"
          />
        </div>

        {/* Interest Rate (Read-only) */}
        <div>
          <Label className="text-foreground mb-2 block">Interest Rate</Label>
          <Input
            type="text"
            value={`${interestRate}% APR`}
            disabled
            className="bg-muted border-border"
          />
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black border border-white/10 p-8 space-y-4"
        >
          <div className="flex justify-between items-center">
            <span className="text-white/60 font-light tracking-wider uppercase text-sm">Monthly Payment</span>
            <span className="font-display text-4xl font-light text-white">
              {formatCurrency(monthlyRate)}
            </span>
          </div>

          <div className="border-t border-white/10 pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-white/60 font-light">Loan Amount</span>
              <span className="text-white font-light">
                {formatCurrency(vehiclePrice - downPayment)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60 font-light">Total Cost</span>
              <span className="text-white font-light">{formatCurrency(totalCost)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60 font-light">Total Interest</span>
              <span className="text-white font-light">{formatCurrency(totalInterest)}</span>
            </div>
          </div>
        </motion.div>

        <p className="text-xs text-muted-foreground">
          * This is an example calculation. Actual terms may vary. Please contact us for a personalized offer.
        </p>
      </div>
    </Card>
  );
};

export default FinanceCalculator;