"use client"
import Navigation from "@/components/navigation/Navigation";

export default function Contact() {
  // Remove unused state or pass it to Navigation if needed
  return (
    <div className="relative">
      <Navigation onMenuToggle={() => {}} />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Contact Page</h1>
      </div>
    </div>
  );
}
