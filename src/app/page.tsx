"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CreditCard from "@/components/CreditCard";
import TransactionItem from "@/components/TransactionItem";
import WeeklyActivityChart from "@/components/WeeklyActivityChart";
import ExpenseStatisticsChart from "@/components/ExpenseStatisticsChart";
import BalanceHistoryChart from "@/components/BalanceHistoryChart";
import QuickTransfer from "@/components/QuickTransfer";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const contacts = [
    { id: "1", name: "Livia Bator", role: "CEO", avatar: "/avatar.jpg" },
    { id: "2", name: "Randy Press", role: "Director", avatar: "/avatar.jpg" },
    { id: "3", name: "Workman", role: "Designer", avatar: "/avatar.jpg" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-lg">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="border border-gray-200 rounded-lg p-6 bg-white mb-6">
            {/* Top row - Cards and Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* My Cards */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    My Cards
                  </h2>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    See All
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CreditCard
                    balance="$5,756"
                    cardNumber="3778 **** **** 1234"
                    cardHolder="Eddy Cusuma"
                    expiryDate="12/22"
                    variant="dark"
                  />
                  <CreditCard
                    balance="$5,756"
                    cardNumber="3778 **** **** 1234"
                    cardHolder="Eddy Cusuma"
                    expiryDate="12/22"
                    variant="light"
                  />
                </div>
              </div>

              {/* Recent Transactions */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Recent Transaction
                </h2>
                <div className="space-y-4">
                  <TransactionItem
                    icon="card"
                    title="Deposit from my Card"
                    date="28 January 2021"
                    amount="-$850"
                  />
                  <TransactionItem
                    icon="paypal"
                    title="Deposit Paypal"
                    date="25 January 2021"
                    amount="+$2,500"
                  />
                  <TransactionItem
                    icon="user"
                    title="Jemi Wilson"
                    date="21 January 2021"
                    amount="+$5,400"
                  />
                </div>
              </div>
            </div>

            {/* Middle row - Weekly Activity and Expense Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Weekly Activity */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Weekly Activity
                </h2>
                <WeeklyActivityChart />
              </div>

              {/* Expense Statistics */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Expense Statistics
                </h2>
                <ExpenseStatisticsChart />
              </div>
            </div>

            {/* Bottom row - Quick Transfer and Balance History */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Quick Transfer */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Quick Transfer
                </h2>
                <QuickTransfer contacts={contacts} />
              </div>

              {/* Balance History */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Balance History
                </h2>
                <BalanceHistoryChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
