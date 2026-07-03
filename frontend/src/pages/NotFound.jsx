import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatedArrowLeft } from "motive-icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar onSearchClick={() => {}} />
      <main className="flex-1 flex items-center justify-center px-5">
        <div className="text-center">
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            404
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tightest">
            Icon not found.
          </h1>
          <p className="mt-3 text-muted-foreground">
            That page doesn&apos;t exist — but a lot of others do.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 h-11 px-5 rounded-md bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium"
          >
            <AnimatedArrowLeft size={16} trigger="hover" /> Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
