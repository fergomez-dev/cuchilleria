"use client";

import { useEffect, useState } from "react";
import { FaTruck, FaCreditCard } from "react-icons/fa";

const benefits = [
  {
    icon: <FaTruck />,
    text: "Envíos a todo el país",
  },
  {
    icon: <FaCreditCard />,
    text: "Todos los medios de pago",
  },
];

export default function TopBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % benefits.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const benefit = benefits[current];

  return (
    <div className="overflow-hidden bg-[var(--primary)] text-white">
      <div className="flex min-h-9 items-center justify-center px-4 text-xs">
        <div
          key={current}
          className="flex animate-[slideUp_0.5s_ease-out] items-center gap-2"
        >
          {benefit.icon}
          <span>{benefit.text}</span>
        </div>
      </div>
    </div>
  );
}