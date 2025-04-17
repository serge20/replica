"use client";
import Link from "next/link";
import Image from "next/image";
import { Search, Settings, Bell, Menu } from "lucide-react";

interface HeaderProps {
  toggleSidebar?: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white p-4 border-b border-gray-200">
      <div className="flex items-center md:hidden">
        <button 
          className="mr-4"
          onClick={toggleSidebar}
        >
          <Menu className="w-6 h-6 text-gray-500" />
        </button>
        
        <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
      </div>
      
      <h1 className="text-2xl font-semibold text-gray-800 hidden md:block">Overview</h1>
      
      <div className="flex items-center gap-5 ml-auto">
        <div className="relative bg-gray-100 rounded-full w-60">
          <div className="relative flex items-center">
            <Search className="absolute left-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for something"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>
        
        <div className="p-2 hover:bg-gray-100 rounded-full transition duration-200">
          <Link href="/settings">
            <Settings className="w-5 h-5 text-gray-500" />
          </Link>
        </div>
        
        <div className="relative p-2 hover:bg-gray-100 rounded-full transition duration-200">
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        
        <div>
          <Image
            src="/avatar.jpg"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}