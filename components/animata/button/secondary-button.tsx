import { ArrowRight } from "lucide-react";

export default function SecondaryButton() {
  return (
    <button className="group relative rounded-full border-2 border-white/30 bg-transparent px-4 py-2 text-white transition-all hover:border-white/60 hover:scale-110 active:scale-105">
      <div className="flex items-center justify-center gap-2">
        <span className="font-semibold">View Projects</span>
        <ArrowRight className="size-5" />
      </div>
    </button>
  );
}
