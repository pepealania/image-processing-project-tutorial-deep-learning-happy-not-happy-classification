"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex gap-6 p-4 text-sm font-medium">
        
        <Link href="#intro">Intro</Link>
        <Link href="#dataset">Dataset</Link>
        <Link href="#method">Method</Link>
        <Link href="#results">Results</Link>
        <Link href="#pipeline">Pipeline</Link>
        <Link href="#code">Code</Link>
        <Link href="#citation">Citation</Link>

      </div>
    </nav>
  );
}