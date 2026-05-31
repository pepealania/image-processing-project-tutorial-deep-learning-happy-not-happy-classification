"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="lvh fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6 p-4 text-sm font-medium">
        <div className="flex items-center gap-4">
          <Link href="#home" className="lvh-brand">
            UNM
          </Link>
        </div>

        <div className="hidden sm:flex gap-6 lvh-links">
          <Link href="#home">Home</Link>
          <Link href="#introduction">Introduction</Link>
          <Link href="#motivation">Motivation</Link>
          <Link href="#dataset">Dataset</Link>
          <Link href="#code">Code</Link>
          <Link href="#accessing-dataset">Accessing Dataset</Link>
          <Link href="#paper">Paper</Link>
        </div>
      </div>
    </nav>
  );
}