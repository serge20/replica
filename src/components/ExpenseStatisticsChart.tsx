"use client";

export default function ExpenseStatisticsChart() {
  // Data showing the expense distribution percentages 
  const expenseData = [
    { category: 'Entertainment', percentage: 30, color: '#383874' },
    { category: 'Bill Expense', percentage: 15, color: '#F4754C' },
    { category: 'Investment', percentage: 20, color: '#376FFF' },
    { category: 'Others', percentage: 35, color: '#1E1E30' },
  ];

  // Calculate angles for pie segments
  let startAngle = 0;
  const segments = expenseData.map(item => {
    const angle = (item.percentage / 100) * 360;
    const segment = {
      ...item,
      startAngle,
      endAngle: startAngle + angle,
    };
    startAngle += angle;
    return segment;
  });

  return (
    <div>
      <div className="w-full h-60 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full max-w-xs">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.1" />
            </filter>
          </defs>
          
          {/* Circle segments */}
          {segments.map((segment, index) => {
            // Convert angles to radians
            const startRad = (segment.startAngle - 90) * (Math.PI / 180);
            const endRad = (segment.endAngle - 90) * (Math.PI / 180);
            
            // Calculate the coordinates of the path
            const centerX = 100;
            const centerY = 100;
            const radius = 80;
            
            const startX = centerX + radius * Math.cos(startRad);
            const startY = centerY + radius * Math.sin(startRad);
            const endX = centerX + radius * Math.cos(endRad);
            const endY = centerY + radius * Math.sin(endRad);
            
            // Check if the arc is larger than 180 degrees
            const largeArc = segment.endAngle - segment.startAngle > 180 ? 1 : 0;
            
            // Path definition
            const path = `
              M ${centerX} ${centerY}
              L ${startX} ${startY}
              A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}
              Z
            `;
            
            // Calculate the middle angle to position the percentage text
            const midAngle = (segment.startAngle + segment.endAngle) / 2 - 90;
            const midRad = midAngle * (Math.PI / 180);
            const textRadius = radius * 0.6; // Position at 60% of the radius
            const textX = centerX + textRadius * Math.cos(midRad);
            const textY = centerY + textRadius * Math.sin(midRad);
            
            return (
              <g key={index}>
                <path
                  d={path}
                  fill={segment.color}
                  stroke="#fff"
                  strokeWidth="1"
                  filter="url(#shadow)"
                />
                
                {/* Add percentage labels if segment is large enough */}
                {segment.percentage >= 10 && (
                  <text
                    x={textX}
                    y={textY}
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {segment.percentage}%
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
        {expenseData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 rounded-sm mr-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className="flex justify-between w-full">
              <span className="text-sm text-gray-600">{item.category}</span>
              <span className="text-sm font-medium">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}