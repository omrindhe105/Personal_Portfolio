import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#03040B] text-white">
      <div className="text-center max-w-xl px-6">
        <h1 className="text-8xl font-serif font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-900">
          404
        </h1>
        <h2 className="text-3xl font-medium mb-6">Page not found</h2>
        <p className="text-lg text-muted-foreground mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full border border-purple-400 shadow-md hover:shadow-lg shadow-amber-600 transition duration-300 ease-in-out"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
}
