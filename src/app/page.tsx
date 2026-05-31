import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col mx-auto pt-28 pb-8 px-6">
        <Navbar />
          
          {/* HOME */}
          <section id="home" className="text-center mb-20 mt-12">
            <Image
              className="mx-auto dark:invert"
              src="/image-processing-project-tutorial-deep-learning-happy-not-happy-classification/next.svg"
              alt="logo"
              width={120}
              height={30}
              priority
            />

            <h1 className="mt-8 text-4xl font-bold text-black dark:text-white">
              Image Binary Classification Tutorial
            </h1>

            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Deep Learning classification: Happy vs Not Happy
            </p>
          </section>

          {/* INTRODUCTION */}
          <section id="introduction" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
Facial emotion recognition is an important research area in computer vision and affective computing, with applications in human-computer interaction, intelligent surveillance, healthcare monitoring, educational technologies, and multimedia analysis. Recent advances in deep learning have significantly improved image classification performance; however, many real-world applications require models that not only achieve high accuracy but also operate efficiently in resource-constrained environments.

To address this challenge, this project investigates the effectiveness of transfer learning using ResNet18 and MobileNetV2. By leveraging pretrained ImageNet representations, the framework reduces training time while improving feature extraction performance on relatively small datasets. The study combines modern training strategies including data augmentation, early stopping, learning-rate scheduling, stratified K-fold cross-validation, and independent holdout testing to provide a robust and reproducible evaluation pipeline.
            </p>
            <Image
              className="mx-auto mt-6"
              src="/image-processing-project-tutorial-deep-learning-happy-not-happy-classification/images/introduction.png"
              alt="Introduction"
              width={500}
              height={400}
            />
          </section>

          {/* MOTIVATION */}
          <section id="motivation" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
Facial emotion recognition has become an increasingly important area of research within computer vision and artificial intelligence due to its potential applications in human-computer interaction, healthcare, education, security systems, and affective computing. The ability of machines to automatically interpret human emotions from facial expressions can improve communication between humans and intelligent systems and enable more adaptive and personalized technologies.

Recent advances in deep learning have significantly improved image classification performance; however, selecting an appropriate neural network architecture often involves balancing predictive accuracy and computational efficiency. High-capacity models can achieve strong classification results but may require substantial computational resources, limiting their deployment on mobile devices, embedded platforms, and other resource-constrained environments. Conversely, lightweight architectures are designed for efficient inference but may sacrifice some predictive performance. Understanding this trade-off is essential for designing practical real-world systems.

This project is motivated by the need to evaluate whether lightweight deep learning models can achieve performance comparable to more established convolutional neural network architectures in a facial emotion classification task. Using image frames extracted from the RAVDESS dataset, the study investigates the effectiveness of transfer learning with ResNet18 and MobileNetV2 for binary classification of happy versus not-happy facial expressions. The project also seeks to establish a rigorous evaluation methodology through stratified 5-fold cross-validation and independent holdout testing, providing reliable estimates of model generalization performance.

In addition to addressing a practical computer vision problem, this work serves as an opportunity to apply and integrate several important machine learning concepts, including convolutional neural networks, transfer learning, data augmentation, hyperparameter optimization, early stopping, and model evaluation. By comparing a residual-based architecture with a lightweight mobile-oriented architecture under identical experimental conditions, the study aims to provide insights into the relationship between classification accuracy, model complexity, and deployment efficiency. These considerations are increasingly relevant as artificial intelligence applications continue to expand toward edge computing and real-time intelligent systems.

Ultimately, the motivation of this project is to develop a robust, reproducible, and computationally efficient deep learning framework for facial emotion classification while contributing to the broader understanding of how modern transfer learning techniques can be applied to practical image recognition problems.
            </p>
          </section>

          {/* DATASET */}
          <section id="dataset" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Dataset</h2>

<p className="text-zinc-600 dark:text-zinc-400">
The dataset used in this project is derived from the <strong>Ryerson Audio-Visual Database of Emotional Speech and Song (RAVDESS)</strong>, a widely used benchmark dataset for emotion recognition research. While the original RAVDESS dataset contains both audio and video recordings of actors expressing various emotions, this study focuses exclusively on the visual modality by extracting image frames from the video recordings and using them for binary image classification.
</p>

<p className="text-zinc-600 dark:text-zinc-400">
A total of <strong>2,760 video files</strong> were successfully extracted from the RAVDESS dataset. From these videos, <strong>9,003 image frames</strong> were generated and loaded into the dataset. Labels were assigned automatically based on the emotion code embedded within each filename. Frames corresponding to emotion code <strong>03 (Happy)</strong> were assigned to the positive class (<strong>Happy = 1</strong>), while frames associated with all other emotion categories were grouped into the negative class (<strong>Not Happy = 0</strong>).
</p>

<h3>Original Dataset Distribution</h3>

<p className="text-zinc-600 dark:text-zinc-400">
The initial dataset was highly imbalanced, containing:
</p>

<ul>
    <li><strong>Happy frames (Class 1):</strong> 1,166 samples (12.95%)</li>
    <li><strong>Not Happy frames (Class 0):</strong> 7,837 samples (87.05%)</li>
    <li><strong>Total frames:</strong> 9,003 samples</li>
</ul>

<p className="text-zinc-600 dark:text-zinc-400">
Such class imbalance can bias deep learning models toward the majority class and negatively affect classification performance. To address this issue, a balancing procedure was applied by downsampling the majority class ("Not Happy") to match the number of samples in the minority class ("Happy").
</p>

<h3>Balanced Dataset</h3>

<table className="min-w-full border-collapse border border-slate-300">
    <thead className="bg-slate-100">
        <tr>
            <th className="border border-slate-300 px-3 py-2 text-left">Class</th>
            <th className="border border-slate-300 px-3 py-2 text-left">Number of Samples</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="border border-slate-300 px-3 py-2">Happy (1)</td>
            <td className="border border-slate-300 px-3 py-2">1,166</td>
        </tr>
        <tr>
            <td className="border border-slate-300 px-3 py-2">Not Happy (0)</td>
            <td className="border border-slate-300 px-3 py-2">1,166</td>
        </tr>
        <tr>
            <td className="border border-slate-300 px-3 py-2 font-semibold">Total</td>
            <td className="border border-slate-300 px-3 py-2 font-semibold">2,332</td>
        </tr>
    </tbody>
</table>

<p className="text-zinc-600 dark:text-zinc-400">
After balancing, the dataset contained <strong>2,332 samples</strong> equally distributed between the two classes.
</p>

<h3>Train-Test Split</h3>

<p className="text-zinc-600 dark:text-zinc-400">
The balanced dataset was divided using a <strong>stratified 80/20 split</strong>, preserving the class distribution across all subsets. This resulted in:
</p>

<ul>
    <li><strong>Training/Validation Pool:</strong> 1,865 samples (80%)</li>
    <li><strong>Independent Generalization Test Set:</strong> 467 samples (20%)</li>
</ul>

<p className="text-zinc-600 dark:text-zinc-400">
The independent test set was completely isolated from the training process and used only for final model evaluation, providing an unbiased estimate of real-world generalization performance.
</p>

<h3>5-Fold Cross-Validation</h3>

<p className="text-zinc-600 dark:text-zinc-400">
To obtain robust performance estimates and reduce dependence on a single train-validation split, the training/validation pool was further partitioned using <strong>Stratified 5-Fold Cross-Validation</strong>.
</p>

<table className="min-w-full border-collapse border border-slate-300">
    <thead className="bg-slate-100">
        <tr>
            <th className="border border-slate-300 px-3 py-2 text-left">Fold</th>
            <th className="border border-slate-300 px-3 py-2 text-left">Training Samples</th>
            <th className="border border-slate-300 px-3 py-2 text-left">Validation Samples</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="border border-slate-300 px-3 py-2">Fold 1</td>
            <td className="border border-slate-300 px-3 py-2">1,492</td>
            <td className="border border-slate-300 px-3 py-2">373</td>
        </tr>
        <tr>
            <td className="border border-slate-300 px-3 py-2">Fold 2</td>
            <td className="border border-slate-300 px-3 py-2">1,492</td>
            <td className="border border-slate-300 px-3 py-2">373</td>
        </tr>
        <tr>
            <td className="border border-slate-300 px-3 py-2">Fold 3</td>
            <td className="border border-slate-300 px-3 py-2">1,492</td>
            <td className="border border-slate-300 px-3 py-2">373</td>
        </tr>
        <tr>
            <td className="border border-slate-300 px-3 py-2">Fold 4</td>
            <td className="border border-slate-300 px-3 py-2">1,492</td>
            <td className="border border-slate-300 px-3 py-2">373</td>
        </tr>
        <tr>
            <td className="border border-slate-300 px-3 py-2">Fold 5</td>
            <td className="border border-slate-300 px-3 py-2">1,492</td>
            <td className="border border-slate-300 px-3 py-2">373</td>
        </tr>
    </tbody>
</table>

<p className="text-zinc-600 dark:text-zinc-400">
This procedure allowed every sample in the training/validation pool to be used for validation exactly once while participating in training during the remaining folds. Such a strategy provides a more reliable estimate of model performance and helps detect overfitting.
</p>

<h3>Preprocessing and Data Augmentation</h3>

<p className="text-zinc-600 dark:text-zinc-400">
Prior to training, all images were resized to <strong>224 × 224 pixels</strong> and normalized using the standard <strong>ImageNet mean and standard deviation values</strong> to ensure compatibility with pretrained convolutional neural network architectures.
</p>

<p className="text-zinc-600 dark:text-zinc-400">
Data augmentation techniques were applied exclusively to the training subsets and included:
</p>

<ul>
    <li>Random horizontal flipping</li>
    <li>Random rotations</li>
    <li>Random cropping</li>
</ul>

<p className="text-zinc-600 dark:text-zinc-400">
These transformations introduce additional variability into the training data and help improve model generalization.
</p>

<h3>Data Loading Pipeline</h3>

<p className="text-zinc-600 dark:text-zinc-400">
The dataset pipeline was implemented using a custom PyTorch dataset class that dynamically loads images during execution, reducing memory requirements and enabling efficient mini-batch training.
</p>

<ul>
    <li><strong>Total videos processed:</strong> 2,760</li>
    <li><strong>Total extracted frames:</strong> 9,003</li>
    <li><strong>Balanced dataset size:</strong> 2,332</li>
    <li><strong>Training/Validation samples:</strong> 1,865</li>
    <li><strong>Independent test samples:</strong> 467</li>
    <li><strong>Number of folds:</strong> 5</li>
    <li><strong>Generalization test batches:</strong> 15</li>
</ul>

<p className="text-zinc-600 dark:text-zinc-400">
Overall, the dataset preparation pipeline transforms the original RAVDESS video recordings into a balanced binary facial emotion classification dataset containing <strong>2,332 samples</strong>, supported by a rigorous evaluation protocol based on stratified cross-validation and independent holdout testing. This design ensures reproducibility, balanced class representation, and reliable benchmarking of transfer learning approaches using ResNet18 and MobileNetV2.
</p>            
          </section>

          {/* CODE */}
          <section id="code" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Code</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Python preprocessing → model → prediction. View the pipeline folder on GitHub:
              <a
                className="ml-1 text-blue-600 underline"
                href="https://github.com/pepealania/image-processing-project-tutorial-deep-learning-happy-not-happy-classification/tree/main/pipeline"
                target="_blank"
                rel="noreferrer"
              >
                pipeline
              </a>
            </p>
          </section>

          {/* ACCESSING-DATASET */}
          <section id="accessing-dataset" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Accessing the Dataset</h2>
            <a
              className="text-blue-600 underline"
              href="https://github.com/pepealania/image-processing-project-tutorial-deep-learning-happy-not-happy-classification"
            >
              GitHub Repository
            </a>
          </section>

          {/* PAPER */}
          <section id="paper" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Paper</h2>
            <pre className="text-sm bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
            </pre>
          </section>

        </main>
    </div>
  );
}