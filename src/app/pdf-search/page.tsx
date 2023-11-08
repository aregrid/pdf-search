/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZoWyLKDRWWE
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Component() {
  return (
    <section className="space-y-6">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="pdf">Upload PDF</Label>
        <Input accept=".pdf" id="pdf" type="file" />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="PDF Cover 1"
            className="object-cover w-full h-60"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="bg-white p-4 dark:bg-zinc-950">
            <h3 className="font-semibold text-lg md:text-xl">PDF Title 1</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Author Name 1</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="PDF Cover 2"
            className="object-cover w-full h-60"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="bg-white p-4 dark:bg-zinc-950">
            <h3 className="font-semibold text-lg md:text-xl">PDF Title 2</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Author Name 2</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="PDF Cover 3"
            className="object-cover w-full h-60"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="bg-white p-4 dark:bg-zinc-950">
            <h3 className="font-semibold text-lg md:text-xl">PDF Title 3</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Author Name 3</p>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="PDF Cover 4"
            className="object-cover w-full h-60"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="bg-white p-4 dark:bg-zinc-950">
            <h3 className="font-semibold text-lg md:text-xl">PDF Title 4</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Author Name 4</p>
          </div>
        </div>
      </section>
    </section>
  )
}
