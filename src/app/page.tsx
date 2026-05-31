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
              Accuracy, graphs, images...
            </p>
          </section>

          {/* CODE */}
          <section id="code" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Code</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Python preprocessing → model → prediction
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