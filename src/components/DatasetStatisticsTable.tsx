export default function DatasetStatisticsTable() {
  const stats = [
    { metric: "Total Videos", value: "2,760" },
    { metric: "Total Frames Extracted", value: "9,003" },
    { metric: "Original Happy Frames", value: "1,166" },
    { metric: "Original Not Happy Frames", value: "7,837" },
    { metric: "Balanced Dataset Size", value: "2,332" },
    { metric: "Train/Validation Pool", value: "1,865" },
    { metric: "Holdout Test Set", value: "467" },
    { metric: "Cross-Validation", value: "5-Fold Stratified" },
  ];

  return (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-3 text-left font-semibold">Metric</th>
            <th className="px-4 py-3 text-left font-semibold">Value</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((item) => (
            <tr
              key={item.metric}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="px-4 py-3">{item.metric}</td>
              <td className="px-4 py-3 font-medium">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}