"use client";

interface TransactionItemProps {
  icon: 'card' | 'paypal' | 'user';
  title: string;
  date: string;
  amount: string;
}

export default function TransactionItem({
  icon,
  title,
  date,
  amount
}: TransactionItemProps) {
  const isDeposit = amount.startsWith('+');
  
  const getIconBackgroundColor = (icon: string) => {
    switch (icon) {
      case 'card':
        return 'bg-yellow-100';
      case 'paypal':
        return 'bg-blue-100';
      case 'user':
        return 'bg-green-100';
      default:
        return 'bg-gray-100';
    }
  };

  const getIconContent = (icon: string) => {
    switch (icon) {
      case 'card':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
        );
      case 'paypal':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        );
      case 'user':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className={`${getIconBackgroundColor(icon)} p-3 rounded-full mr-4`}>
          {getIconContent(icon)}
        </div>
        <div>
          <p className="font-medium text-gray-800">{title}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className={`font-medium ${isDeposit ? 'text-green-500' : 'text-red-500'}`}>
        {amount}
      </div>
    </div>
  );
}