import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">

      {/* ✅ ADD NAVBAR */}
      <Navbar />

      <main className="flex flex-1 w-full max-w-4xl flex-col mx-auto py-24 px-6">
        
        {/* HERO SECTION */}
        <section id="intro" className="text-center mb-20">
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

        {/* DATASET */}
        <section id="dataset" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Dataset</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Describe your dataset here...
          </p>
        </section>

        {/* METHOD */}
        <section id="method" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Method</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            CNN / model architecture explanation...
          </p>
        </section>

        {/* RESULTS */}
        <section id="results" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Accuracy, graphs, images...
          </p>
        </section>

        {/* PIPELINE */}
        <section id="pipeline" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Pipeline</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Python preprocessing → model → prediction
          </p>
        </section>

        {/* CODE */}
        <section id="code" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Code</h2>
          <a
            className="text-blue-600 underline"
            href="https://github.com/pepealania/image-processing-project-tutorial-deep-learning-happy-not-happy-classification"
          >
            GitHub Repository
          </a>
        </section>

        {/* CITATION */}
        <section id="citation" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Citation</h2>
          <pre className="text-sm bg-zinc-100 dark:bg-zinc-900 p-4 rounded">
          </pre>
        </section>

      </main>
    </div>
  );
}