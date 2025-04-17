"use client";

interface CreditCardProps {
  balance: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  variant?: 'dark' | 'light';
}

export default function CreditCard({
  balance,
  cardNumber,
  cardHolder,
  expiryDate,
  variant = 'dark'
}: CreditCardProps) {
  const bgColor = variant === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = variant === 'dark' ? 'text-white' : 'text-gray-800';
  const borderColor = variant === 'dark' ? '' : 'border border-gray-200';
  
  return (
    <div className={`rounded-xl ${bgColor} ${textColor} ${borderColor} p-5 shadow-sm flex flex-col justify-between h-44`}>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs opacity-70">Balance</div>
          <div className="text-xl font-bold">{balance}</div>
        </div>
        
        {/* Card type logo */}
        <div>
          {variant === 'dark' ? (
            <div className="flex">
              <div className="w-5 h-5 rounded-full bg-gray-400 opacity-80 relative -right-2 z-10"></div>
              <div className="w-5 h-5 rounded-full bg-gray-300 opacity-90"></div>
            </div>
          ) : (
            <div className="flex">
              <div className="w-5 h-5 rounded-full bg-gray-300 opacity-70 relative -right-2 z-10"></div>
              <div className="w-5 h-5 rounded-full bg-gray-200 opacity-90"></div>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <div className="text-xs uppercase opacity-70 mb-0.5">CARD HOLDER</div>
          <div className="text-sm font-medium">{cardHolder}</div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase opacity-70 mb-0.5">VALID THRU</div>
          <div className="text-sm font-medium">{expiryDate}</div>
        </div>
      </div>
      
      <div className="font-medium text-sm">{cardNumber}</div>
    </div>
  );
}