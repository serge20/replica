"use client";

export default function BalanceHistoryChart() {
  // Sample data for balance history
  const data = [
    { month: 'Jul', balance: 300 },
    { month: 'Aug', balance: 400 },
    { month: 'Sep', balance: 700 },
    { month: 'Oct', balance: 500 },
    { month: 'Nov', balance: 600 },
    { month: 'Dec', balance: 400 },
    { month: 'Jan', balance: 650 },
  ];

  const minBalance = 0;
  const maxBalance = 800;
  const chartHeight = 200;
  const chartWidth = 600;

  // Helper function to map data point to SVG coordinates
  const mapToSvgPoint = (index: number, balance: number) => {
    const x = (index / (data.length - 1)) * chartWidth;
    const y = chartHeight - ((balance - minBalance) / (maxBalance - minBalance)) * chartHeight;
    return { x, y };
  };

  // Generate SVG path for the line
  const generateLinePath = () => {
    if (data.length < 2) return '';

    let path = '';
    
    // Move to the first point
    const firstPoint = mapToSvgPoint(0, data[0].balance);
    path += `M ${firstPoint.x} ${firstPoint.y}`;
    
    // Create cubic Bezier curves between points for a smooth line
    for (let i = 0; i < data.length - 1; i++) {
      const p0 = i > 0 ? mapToSvgPoint(i - 1, data[i - 1].balance) : firstPoint;
      const p1 = mapToSvgPoint(i, data[i].balance);
      const p2 = mapToSvgPoint(i + 1, data[i + 1].balance);
      const p3 = i < data.length - 2 ? mapToSvgPoint(i + 2, data[i + 2].balance) : p2;
      
      // Calculate control points for smooth curve
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    
    return path;
  };

  // Generate SVG path for the fill area
  const generateFillPath = () => {
    const linePath = generateLinePath();
    const lastPoint = mapToSvgPoint(data.length - 1, data[data.length - 1].balance);
    const firstPoint = mapToSvgPoint(0, data[0].balance);
    
    return `${linePath} L ${lastPoint.x} ${chartHeight} L ${firstPoint.x} ${chartHeight} Z`;
  };

  // Path strings
  const linePath = generateLinePath();
  const fillPath = generateFillPath();

  return (
    <div>
      <div className="relative w-full h-60">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400 w-10">
          <div>800</div>
          <div>600</div>
          <div>400</div>
          <div>200</div>
          <div>0</div>
        </div>
        
        {/* X-axis labels */}
        <div className="absolute bottom-0 left-14 right-0 flex justify-between text-xs text-gray-400">
          {data.map((point, index) => (
            <div key={index}>{point.month}</div>
          ))}
        </div>
        
        {/* Chart */}
        <div className="absolute inset-0 pt-2 pr-2 pb-6 pl-14">
          <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
            {/* Area fill */}
            <path 
              d={fillPath} 
              fill="rgba(59, 130, 246, 0.1)" 
              stroke="none"
            />
            
            {/* Line */}
            <path 
              d={linePath} 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data points */}
            {data.map((point, index) => {
              const svgPoint = mapToSvgPoint(index, point.balance);
              return (
                <circle 
                  key={index}
                  cx={svgPoint.x} 
                  cy={svgPoint.y} 
                  r="4"
                  fill="#3b82f6"
                  stroke="#fff"
                  strokeWidth="2"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}