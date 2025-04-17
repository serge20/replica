"use client";
import React from "react";

const cards = [
  {
    variant: "dark",
    holder: "Eddy Cusuma",
    number: "3778 **** **** 1234",
    valid: "12/22",
    balance: "$5,756",
    type: "mastercard"
  },
  {
    variant: "light",
    holder: "Eddy Cusuma",
    number: "3778 **** **** 1234",
    valid: "12/22",
    balance: "$5,756",
    type: "visa"
  },
];

export default function CardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`relative p-5 rounded-xl shadow-sm flex flex-col justify-between h-44 ${
            card.variant === "dark"
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-800 border border-gray-200"
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs opacity-70">Balance</div>
              <div className="text-xl font-bold">{card.balance}</div>
            </div>
            <div>
              {card.type === "mastercard" ? (
                <div className="flex">
                  <div className="w-5 h-5 rounded-full bg-gray-300 opacity-70 relative -right-2 z-10"></div>
                  <div className="w-5 h-5 rounded-full bg-gray-400 opacity-90"></div>
                </div>
              ) : (
                <div className="w-8 h-5">
                  <svg viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M14 16H9V0H14V16Z" fill="white"/>
                    <path d="M9.5 8C9.5 3.6 11.9 0 15 0C16.6 0 17.9 0.6 19 1.7C20.1 2.8 20.5 4.5 20.5 6.3C20.5 10.7 18.1 14.3 15 14.3C13.4 14.3 12.1 13.7 11 12.6C9.9 11.5 9.5 9.8 9.5 8Z" fill="white"/>
                    <path d="M48 8C48 12.4 45.6 16 42.5 16C40.9 16 39.6 15.4 38.5 14.3C37.4 13.2 37 11.5 37 9.7C37 5.3 39.4 1.7 42.5 1.7C44.1 1.7 45.4 2.3 46.5 3.4C47.6 4.5 48 6.2 48 8Z" fill="white"/>
                    <path d="M37 8C37 11.5 35.5 14.3 33.5 14.3C31.5 14.3 30 11.5 30 8C30 4.5 31.5 1.7 33.5 1.7C35.5 1.7 37 4.5 37 8Z" fill="white"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div>
              <div className="text-xs uppercase opacity-70 mb-0.5">CARD HOLDER</div>
              <div className="text-sm font-medium">{card.holder}</div>
            </div>
            <div className="text-right">
              <div className="text-xs uppercase opacity-70 mb-0.5">VALID THRU</div>
              <div className="text-sm font-medium">{card.valid}</div>
            </div>
          </div>
          
          <div className="font-medium text-sm">{card.number}</div>
        </div>
      ))}
    </div>
  );
}