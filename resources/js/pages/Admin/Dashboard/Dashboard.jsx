import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const sampleData = [
    [1, 2, 3, 4, 5],
    [2, 2, 5, 3, 3],
    [3, 5, 2, 2, 5],
    [4, 2, 5, 6, 2],
    [1, 4, 1, 6, 1],
];

const BestSalesData = () => {
    const datasets = sampleData.map((data, i) => {
        return {
            id: i,
            label: i,
            data,
            fill: true,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
            cubicInterpolationMode: "monotone",
        };
    });

    console.log({ datasets });

    return (
        <Line
            datasetIdKey="id"
            data={{
                labels: [1, 2, 3, 4, 5],
                datasets,
            }}
        />
    );
};

export default function Dashboard() {
    return (
        <div className="p-3">
            <div className="grid grid-cols-4 gap-3">
                <div className="bg-white shadow">
                    <div className="p-3 border-b font-bold text-primary">
                        Today
                    </div>
                    <div className="p-3 text-slate-600">₱1000.00</div>
                </div>

                <div className="bg-white shadow">
                    <div className="p-3 border-b font-bold text-primary">
                        Yesterday
                    </div>
                    <div className="p-3 text-slate-600">₱1000.00</div>
                </div>

                <div className="bg-white shadow">
                    <div className="p-3 border-b font-bold text-primary">
                        Last 7 days
                    </div>
                    <div className="p-3 text-slate-600">₱1000.00</div>
                </div>

                <div className="bg-white shadow">
                    <div className="p-3 border-b font-bold text-primary">
                        Total Sales
                    </div>
                    <div className="p-3 text-slate-600">₱1000.00</div>
                </div>
            </div>

            <div className="mt-3 flex gap-3">
                <div className="bg-white p-4 shadow flex-grow">
                    <h1 className="text-xl font-bold">
                        Best Sales Item All Time
                    </h1>
                    <BestSalesData />
                </div>

                <div className="bg-white shadow w-[300px]">
                    <div className="p-3 border-b">
                        <h1 className="text-xl font-bold">Top 5 Items</h1>
                    </div>
                    <div className="p-3">
                      <div className="flex flex-col divide-y text-lg">
                        <div className='flex justify-between py-2'>
                          <div>1. Product 1</div>
                          <div>2000PHP</div>
                        </div>

                        <div className='flex justify-between py-2'>
                          <div>1. Product 1</div>
                          <div>2000PHP</div>
                        </div>

                        <div className='flex justify-between py-2'>
                          <div>1. Product 1</div>
                          <div>2000PHP</div>
                        </div>

                        <div className='flex justify-between py-2'>
                          <div>1. Product 1</div>
                          <div>2000PHP</div>
                        </div>

                        <div className='flex justify-between py-2'>
                          <div>1. Product 1</div>
                          <div>2000PHP</div>
                        </div>

                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
