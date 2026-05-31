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
              src="/next.svg"
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
              src="/images/introduction.png"
              alt="Introduction"
              width={500}
              height={400}
            />
          </section>

          {/* MOTIVATION */}
          <section id="motivation" className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              CNN / model architecture explanation...
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