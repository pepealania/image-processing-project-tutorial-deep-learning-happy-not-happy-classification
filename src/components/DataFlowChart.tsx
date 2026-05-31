export default function DataFlowChart() {
  return (
    <section className="w-full overflow-x-auto py-8">
      <div className="min-w-[1200px] flex items-center justify-center gap-4">

        {/* Dataset */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-64 h-48 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Dataset
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col items-center justify-center text-center text-sm">
            <p>RAVDESS Frames</p>
            <p>9,003 Images</p>
            <p>Happy / Not Happy</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Preprocessing */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-72 h-48 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Preprocessing
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>Label Assignment</p>
            <p>Dataset Balancing</p>
            <p>Resize 224×224</p>
            <p>Normalization</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Data Partition */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-72 h-58 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Data Partition
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>80/20 Split</p>
            <p>Train/Validation: 1,865</p>
            <p>Test: 467</p>
            <p>5-Fold Cross Validation</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Transfer Learning */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-[420px] h-48 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Transfer Learning
          </h3>

          <div className="flex-1 flex items-center justify-center gap-6">
            <div className="border border-gray-600 w-36 h-24 flex items-center justify-center text-sm font-medium">
              ResNet18
            </div>

            <div className="border border-gray-600 w-36 h-24 flex items-center justify-center text-sm font-medium">
              MobileNetV2
            </div>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Training */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-72 h-48 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Training
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>Adam Optimizer</p>
            <p>CrossEntropy Loss</p>
            <p>LR Scheduler</p>
            <p>Early Stopping</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Evaluation */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-72 h-48 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Evaluation
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>Accuracy</p>
            <p>Precision</p>
            <p>Recall</p>
            <p>F1-Score</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Results */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-64 h-48 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Results
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col items-center justify-center text-center text-sm">
            <p>ResNet18 vs</p>
            <p>MobileNetV2</p>
            <p>Performance</p>
          </div>
        </div>

      </div>
    </section>
  );
}