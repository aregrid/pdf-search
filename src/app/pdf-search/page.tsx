"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZoWyLKDRWWE
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PDFList from "./pdf-list";
import PDFDetail from "./pdf-detail";
export default function Component() {
  return (
    <section className="space-y-6 m-auto">
      <div className="grid w-full max-w-sm items-center p-4 md:p-6">
        <Label className="text-md py-4">Upload PDF/Files/Image</Label>
        <Input accept=".pdf" id="pdf" type="file" />
      </div>
      <div className="flex w-full">
        <div className="flex flex-1">
          <PDFDetail />
        </div>
        <div className="flex flex-1">
          <PDFList />
        </div>
      </div>
    </section>
  );
}
