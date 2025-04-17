"use client";
import React from "react";
import { CreditCardIcon, DollarSign, LogIn } from "lucide-react";

type Tx = {
  title: string;
  date: string;
  amount: string;
  icon: React.ReactNode;
  bg: string;
  fg: string;
};
const data: Tx[] = [
  {
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    icon: <CreditCardIcon className="w-5 h-5" />,
    bg: "bg-yellow-100",
    fg: "text-red-500",
  },
  {
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    icon: <LogIn className="w-5 h-5" />,
    bg: "bg-blue-100",
    fg: "text-green-500",
  },
  {
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    icon: <DollarSign className="w-5 h-5" />,
    bg: "bg-green-100",
    fg: "text-green-500",
  },
];

export default function TransactionList() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Recent Transaction
      </h2>
      <ul className="space-y-4">
        {data.map((tx, i) => (
          <li key={i} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full ${tx.bg}`}>{tx.icon}</div>
              <div>
                <div className="font-medium text-gray-800">{tx.title}</div>
                <div className="text-sm text-gray-500">{tx.date}</div>
              </div>
            </div>
            <div className={`font-semibold ${tx.fg}`}>{tx.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
