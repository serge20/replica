"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Contact {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface QuickTransferProps {
  contacts: Contact[];
}

export default function QuickTransfer({ contacts }: QuickTransferProps) {
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [amount, setAmount] = useState('525.50');
  
  const handleContactSelect = (id: string) => {
    setSelectedContact(selectedContact === id ? null : id);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedContact || !amount) return;
    
    // Here you would handle the transfer
    console.log(`Transferring $${amount} to contact ${selectedContact}`);
  };
  
  return (
    <div>
      <div className="flex space-x-4 mb-6">
        {contacts.map((contact) => (
          <div 
            key={contact.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleContactSelect(contact.id)}
          >
            <div className={`w-16 h-16 rounded-full overflow-hidden mb-2 ${selectedContact === contact.id ? 'ring-2 ring-blue-500' : ''}`}>
              <Image
                src={contact.avatar}
                alt={contact.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-medium text-sm">{contact.name}</p>
            <p className="text-xs text-gray-500">{contact.role}</p>
          </div>
        ))}
        
        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center self-center mt-3 ml-2">
          <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
          placeholder="Write Amount"
          className="w-full px-4 py-3 rounded-l-lg border border-gray-300 text-gray-700 focus:outline-none bg-gray-100"
        />
        <button
          type="submit"
          className="bg-gray-800 text-white px-6 py-3 rounded-r-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          Send
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}