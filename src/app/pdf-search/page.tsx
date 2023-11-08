/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZoWyLKDRWWE
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PDFList from "./pdf-list";
export default function Component() {
  return (
    <section className="space-y-6 w-4/5 m-auto">
      <div className="grid w-full max-w-sm items-center p-4 md:p-6">
        <Label htmlFor="pdf">Upload PDF</Label>
        <Input accept=".pdf" id="pdf" type="file" />
      </div>
      {/* <div className="w-4/5"> */}
      <PDFList />
      {/* </div> */}
    </section>
  );
}
