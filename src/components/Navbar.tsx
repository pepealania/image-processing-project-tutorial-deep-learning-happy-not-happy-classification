"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="lvh fixed inset-x-0 top-0 z-50 bg-white border-b shadow-sm">
      {/* thin top strip with UNM link */}
      <div className="lvh-top text-xs text-zinc-600">
        <div className="max-w-6xl mx-auto flex items-center justify-start p-2">
          <Link href="/" className="mr-4">UNM</Link>
        </div>
      </div>

      {/* main header: title + nav */}
      <div className="max-w-6xl mx-auto flex flex-col gap-4 p-4 text-sm font-medium">
        <div>
          <Link href="/" className="lvh-brand lvh-title">
            Image Binary Classification Tutorial
          </Link>
          <div className="lvh-subtitle text-sm text-zinc-600">Deep Learning classification: Happy vs Not Happy</div>
        </div>

        <div className="w-full">
          <nav className="flex flex-wrap gap-4 lvh-links">
            <Link href="#home">Home</Link>
            <Link href="#introduction">Introduction</Link>
            <Link href="#motivation">Motivation</Link>
            <Link href="#dataset">Dataset</Link>
            <Link href="#code">Code</Link>
            <Link href="#accessing-dataset">Accessing Dataset</Link>
            <Link href="#paper">Paper</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}