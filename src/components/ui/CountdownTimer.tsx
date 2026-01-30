import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const target = targetDate || new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    const difference = target.getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
        <span className="text-base font-semibold">{String(value).padStart(2, '0')}</span>
      </div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-4">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-2xl font-bold text-[#DB4444]">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-2xl font-bold text-[#DB4444]">:</span>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl font-bold text-[#DB4444]">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
