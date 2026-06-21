export default function DataFlowChart() {
  return (
    <section className="w-full overflow-x-auto py-8">
      <div className="min-w-[1400px] flex items-center justify-start gap-4">

        {/* Dataset */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-64 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Dataset
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col items-center justify-center text-center text-sm">
            <p>RAVDESS Video Frames</p>
            <p>2,332 Images</p>
            <p>Binary Labels</p>
            <p>Happy / Not Happy</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Preprocessing */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-72 h-52 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Preprocessing
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>Label Assignment</p>
            <p>Class Balancing (Downsampling)</p>
            <p>Resize 224×224</p>
            <p>ImageNet Normalization</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Data Split */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-80 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Data Partitioning
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>Stratified 80/20 Split</p>
            <p>Train/Val: 1,865</p>
            <p>Test Set: 467 (Holdout)</p>
            <p>No Leakage to Test Set</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Cross Validation */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-80 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            5-Fold Cross Validation
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>StratifiedKFold (K=5)</p>
            <p>Train on 4 folds</p>
            <p>Validate on 1 fold</p>
            <p>Repeat for all folds</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Transfer Learning */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-[420px] h-52 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Transfer Learning (ImageNet Pretrained)
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
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-80 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Training
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>Adam Optimizer</p>
            <p>Cross-Entropy Loss</p>
            <p>LR Scheduler</p>
            <p>Early Stopping</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Model Selection */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-72 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Model Selection
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>Best Fold Selected</p>
            <p>Lowest Validation Loss</p>
            <p>Best Model Saved</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Evaluation */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-72 h-52 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Evaluation
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col justify-center text-center text-sm">
            <p>Accuracy</p>
            <p>Precision</p>
            <p>Recall</p>
            <p>F1-Score</p>
            <p>Confusion Matrix</p>
          </div>
        </div>

        <div className="text-3xl font-bold">→</div>

        {/* Results */}
        <div className="border-2 border-gray-700 bg-gray-50 p-4 w-72 flex flex-col">
          <h3 className="text-center font-bold uppercase mb-4">
            Final Results
          </h3>

          <div className="border border-gray-600 flex-1 flex flex-col items-center justify-center text-center text-sm">
            <p>ResNet18 vs MobileNetV2</p>
            <p>Test Set Performance</p>
            <p>Generalization Analysis</p>
          </div>
        </div>

      </div>
    </section>
  );
}