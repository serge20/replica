"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Activity,
  User,
  Briefcase,
  CreditCard,
  DollarSign,
  Settings,
  Clipboard,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Transactions", icon: Activity, href: "#" },
  { name: "Accounts", icon: User, href: "#" },
  { name: "Investments", icon: Briefcase, href: "#" },
  { name: "Credit Cards", icon: CreditCard, href: "#" },
  { name: "Loans", icon: DollarSign, href: "#" },
  { name: "Services", icon: DollarSign, href: "#" },
  { name: "My Privileges", icon: Clipboard, href: "#" },
  { name: "Setting", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200">
      <div className="px-6 py-6 flex items-center">
        <div className="bg-gray-100 p-2 rounded-md mr-2">
          <Clipboard className="w-5 h-5 text-gray-800" />
        </div>
        <span className="text-xl font-semibold text-gray-800">Soar Task</span>
      </div>
      <nav className="mt-6 px-4 space-y-1">
        {navItems.map((item) => {
          // For the purposes of this demo, treat the home page as the dashboard
          const isActive =
            item.name === "Dashboard"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
              flex items-center px-4 py-3 rounded-lg font-medium transition-colors
              ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }
            `}
            >
              <item.icon className="w-5 h-5 mr-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
