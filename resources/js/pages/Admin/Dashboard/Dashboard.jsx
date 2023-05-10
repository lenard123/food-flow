import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import useDashboardQuery from "../../../queries/useDashboardQuery";
import colors from "tailwindcss/colors"

const sampleData = [
    [1, 2, 3, 4, 5],
    [2, 2, 5, 3, 3],
    [3, 5, 2, 2, 5],
    [4, 2, 5, 6, 2],
    [1, 4, 1, 6, 1],
];

const chartColor = [
    { borderColor: colors.blue[500] },
    { borderColor: colors.green[500] },
    { borderColor: colors.yellow[500] },
    { borderColor: colors.purple[500] },
    { borderColor: colors.cyan[500] },
]

const BestSalesData = ({ data }) => {
    const labels = data?.chart_data?.labels ?? []

    const datasets = Object.values(data?.chart_data?.data ?? {}).map((data,i) => {
        return {
            data: labels.map(label => data.find(x => x.transaction_date == label)?.sale ?? 0),
            label: data[0].name,
            cubicInterpolationMode: 'monotone',
            fill: true,
            ...chartColor[i % chartColor.length]
        }
    });

    console.log({ datasets })

    return (
        <Line
            datasetIdKey="id"
            data={{
                labels,
                datasets,
            }}
        />
    );
};

const DataCard = ({ label, value, loading }) => {
    return (
        <div className="bg-white shadow">
            <div className="p-3 border-b font-bold text-primary">{label}</div>
            <div className="p-3 text-slate-600">
                {loading ? (
                    <span className="italic">Loading...</span>
                ) : (
                    <span>₱{value}</span>
                )}
            </div>
        </div>
    );
};

export default function Dashboard() {
    const { data, isLoading } = useDashboardQuery();

    return (
        <div className="p-3">
            <div className="grid grid-cols-4 gap-3">
                <DataCard
                    label="Today Sales"
                    value={data?.today_sales}
                    loading={isLoading}
                />
                <DataCard
                    label="Yesterday Sales"
                    value={data?.yesterday_sales}
                    loading={isLoading}
                />
                <DataCard
                    label="Last 7 days"
                    value={data?.week_sales}
                    loading={isLoading}
                />
                <DataCard
                    label="All time Sales"
                    value={data?.all_time_sales}
                    loading={isLoading}
                />
            </div>

            <div className="mt-3 flex gap-3">
                <div className="bg-white p-4 shadow flex-grow">
                    <h1 className="text-xl font-bold">
                        Best Sales Item All Time
                    </h1>
                    <BestSalesData data={data} loading={isLoading}/>
                </div>

                <div className="bg-white shadow w-[300px]">
                    <div className="p-3 border-b">
                        <h1 className="text-xl font-bold">Top 5 Items</h1>
                    </div>
                    <div className="p-3">
                        <div className="flex flex-col divide-y text-lg">
                            {data?.top_products?.map((product, i) => (
                                <div key={product.id} className="flex justify-between py-2">
                                    <div>{i + 1}. {product.name}</div>
                                    <div>₱{product.sale}</div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
