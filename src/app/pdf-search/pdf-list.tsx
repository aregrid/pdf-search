/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZoWyLKDRWWE
 */

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// import { useState } from "react";

export default function PDFList() {
  const pdfList = [
    {
      title: "PDF Title 1",
      authorName: "Author Name 1",
      cover: "https://generated.vusercontent.net/placeholder.svg",
    },
    {
      title: "PDF Title 2",
      authorName: "Author Name 2",
      cover: "https://generated.vusercontent.net/placeholder.svg",
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
      {pdfList.map(function (pdf) {
        return (
          <div
            className="relative group overflow-hidden rounded-lg"
            key={pdf.title}
          >
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              className="object-cover w-full h-60"
              height="300"
              src={pdf.cover}
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="bg-white p-4 dark:bg-zinc-950">
              <h3 className="font-semibold text-lg md:text-xl">{pdf.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {pdf.authorName}
              </p>
            </div>
          </div>
        );
      })}
      ;
    </section>
  );
}
