export default function Pseudocode() {
  const lines = [
    "function BinaryClassificationFramework()",
    "Load extracted RAVDESS frames",
    "Assign labels:",
    "  Happy (1) if emotion code = 03",
    "  Not Happy (0) otherwise",
    "Balance dataset using downsampling",
    "Split dataset using stratified 80/20 split",
    "  Train/Validation: 1,865 samples",
    "  Holdout Test: 467 samples",
    "Apply 5-Fold Cross Validation",
    "",
    "for each fold do",
    "  Create training and validation subsets",
    "  Apply preprocessing:",
    "    Resize images to 224×224",
    "    Normalize using ImageNet statistics",
    "    Apply data augmentation",
    "",
    "  Initialize ResNet18",
    "  Initialize MobileNetV2",
    "  Replace final layer with 2 classes",
    "",
    "  Configure training:",
    "    Loss = CrossEntropyLoss",
    "    Optimizer = Adam",
    "    Scheduler = ReduceLROnPlateau",
    "    Early Stopping = 3 epochs",
    "",
    "  Train model",
    "  Validate model",
    "  Save best model",
    "end for",
    "",
    "Aggregate fold metrics",
    "Select best-performing model",
    "Evaluate on holdout test set",
    "Compute Accuracy, Precision, Recall, F1",
    "Compare ResNet18 vs MobileNetV2",
    "return Results",
    "end function"
  ];

  return (
    <div className="w-full max-w-4xl border border-zinc-400 bg-white text-sm">
      <div className="border-b border-zinc-400 px-4 py-2 font-semibold">
        Algorithm 1 Binary Classification Framework
      </div>

      <div className="font-mono text-[13px]">
        {lines.map((line, index) => (
          <div
            key={index}
            className="grid grid-cols-[40px_1fr] px-2 py-[2px]"
          >
            <div className="text-right pr-3 text-zinc-500">
              {index + 1}:
            </div>

            <div
              className={`whitespace-pre-wrap ${
                line.startsWith("function") ||
                line.startsWith("for each") ||
                line.startsWith("end ") ||
                line.startsWith("return")
                  ? "font-semibold"
                  : ""
              }`}
            >
              {line}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}