"use client";

export default function WeeklyActivityChart() {
  // Sample data for weekly activity
  const data = [
    { day: "Sat", deposit: 250, withdraw: 400 },
    { day: "Sun", deposit: 130, withdraw: 340 },
    { day: "Mon", deposit: 250, withdraw: 320 },
    { day: "Tue", deposit: 370, withdraw: 460 },
    { day: "Wed", deposit: 240, withdraw: 160 },
    { day: "Thu", deposit: 230, withdraw: 380 },
    { day: "Fri", deposit: 340, withdraw: 390 },
  ];

  const maxValue = 500; // Maximum value for the y-axis
  const getBarHeight = (value: number) => Math.round((value / maxValue) * 100); // Calculate percentage height

  return (
    <div>
      {/* Chart legend */}
      <div className="flex items-center justify-end space-x-6 mb-4">
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></div>
          <span className="text-sm text-gray-400">Deposit</span>
        </div>
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-black mr-2"></div>
          <span className="text-sm text-gray-400">Withdraw</span>
        </div>
      </div>

      {/* Chartbox with rounded border */}
      <div className="border border-blue-200 rounded-3xl p-6">
        <div className="relative h-[300px]">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400 w-8 pointer-events-none">
            <div>500</div>
            <div>400</div>
            <div>300</div>
            <div>200</div>
            <div>100</div>
            <div>0</div>
          </div>

          {/* Horizontal grid lines */}
          <div className="absolute right-0 left-10 top-0 bottom-8 flex flex-col justify-between pointer-events-none">
            <div className="border-t border-gray-100 w-full h-0"></div>
            <div className="border-t border-gray-100 w-full h-0"></div>
            <div className="border-t border-gray-100 w-full h-0"></div>
            <div className="border-t border-gray-100 w-full h-0"></div>
            <div className="border-t border-gray-100 w-full h-0"></div>
            <div className="border-t border-gray-100 w-full h-0"></div>
          </div>

          {/* Chart bars */}
          <div className="absolute left-10 right-0 top-0 bottom-8 flex">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center justify-end h-full"
              >
                <div className="flex items-end space-x-2 h-[240px]">
                  {/* Black bar - Withdraw */}
                  <div
                    className="w-2 bg-black rounded-full"
                    style={{ height: `${getBarHeight(item.withdraw)}%` }}
                  ></div>

                  {/* Blue bar - Deposit */}
                  <div
                    className="w-2 bg-blue-500 rounded-full"
                    style={{ height: `${getBarHeight(item.deposit)}%` }}
                  ></div>
                </div>

                {/* X-axis label */}
                <div className="mt-2 text-xs text-gray-400">{item.day}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
