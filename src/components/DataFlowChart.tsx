export default function DataFlowChart() {
  const box =
    "flex-1 min-w-0 border-2 border-gray-700 bg-gray-50 p-3 flex flex-col";
  const inner =
    "border border-gray-600 flex-1 flex flex-col justify-center items-center text-center text-xs";

  return (
    <section className="w-full py-8">
      <div className="flex items-stretch gap-2 w-full">

        <div className={box}>
          <h3 className="mb-3 text-center font-bold uppercase text-sm">
            Dataset
          </h3>
          <div className={inner}>
            <p>RAVDESS Video Frames</p>
            <p>2,332 Images</p>
            <p>Binary Labels</p>
            <p>Happy / Not Happy</p>
          </div>
        </div>

        <div className="self-center text-xl font-bold">→</div>

        <div className={box}>
          <h3 className="mb-3 text-center font-bold uppercase text-sm">
            Preprocessing
          </h3>
          <div className={inner}>
            <p>Label Assignment</p>
            <p>Class Balancing</p>
            <p>Resize 224×224</p>
            <p>Normalization</p>
          </div>
        </div>

        <div className="self-center text-xl font-bold">→</div>

        <div className={box}>
          <h3 className="mb-3 text-center font-bold uppercase text-sm">
            Data Partitioning
          </h3>
          <div className={inner}>
            <p>80/20 Split</p>
            <p>Train/Val: 1,865</p>
            <p>Test: 467</p>
            <p>No Leakage</p>
          </div>
        </div>

        <div className="self-center text-xl font-bold">→</div>

        <div className={box}>
          <h3 className="mb-3 text-center font-bold uppercase text-sm">
            5-Fold CV
          </h3>
          <div className={inner}>
            <p>StratifiedKFold</p>
            <p>Train ×4</p>
            <p>Validate ×1</p>
            <p>Repeat ×5</p>
          </div>
        </div>

        <div className="self-center text-xl font-bold">→</div>

        <div className={`${box} flex-[1.4]`}>
          <h3 className="mb-3 text-center font-bold uppercase text-sm">
            Transfer Learning
          </h3>

          <div className="flex flex-1 items-center gap-2">
            <div className="flex-1 border border-gray-600 p-2 text-center text-xs font-medium">
              ResNet18
            </div>

            <div className="flex-1 border border-gray-600 p-2 text-center text-xs font-medium">
              MobileNetV2
            </div>
          </div>
        </div>

        <div className="self-center text-xl font-bold">→</div>

        <div className={box}>
          <h3 className="mb-3 text-center font-bold uppercase text-sm">
            Training
          </h3>
          <div className={inner}>
            <p>Adam</p>
            <p>Cross-Entropy</p>
            <p>LR Scheduler</p>
            <p>Early Stopping</p>
          </div>
        </div>

        <div className="self-center text-xl font-bold">→</div>

        <div className={box}>
          <h3 className="mb-3 text-center font-bold uppercase text-sm">
            Model Selection
          </h3>
          <div className={inner}>
            <p>Best Fold</p>
            <p>Lowest Val Loss</p>
            <p>Saved Model</p>
          </div>
        </div>

        <div className="self-center text-xl font-bold">→</div>

        <div className={box}>
          <h3 className="mb-3 text-center font-bold uppercase text-sm">
            Evaluation
          </h3>
          <div className={inner}>
            <p>Accuracy</p>
            <p>Precision</p>
            <p>Recall</p>
            <p>F1</p>
            <p>Confusion Matrix</p>
          </div>
        </div>

        <div className="self-center text-xl font-bold">→</div>

        <div className={box}>
          <h3 className="mb-3 text-center font-bold uppercase text-sm">
            Final Results
          </h3>
          <div className={inner}>
            <p>ResNet18 vs MobileNetV2</p>
            <p>Test Performance</p>
            <p>Generalization</p>
          </div>
        </div>

      </div>
    </section>
  );
}