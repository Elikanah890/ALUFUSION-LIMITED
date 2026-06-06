import { useEffect } from "react";
import { Link } from "react-router-dom";
import { applySEO } from "@/lib/seo";

export default function NotFound() {
  useEffect(() => {
    applySEO({
      title: "404 — Page Not Found",
      description:
        "The page you are looking for does not exist. Return to 867 ALUFUSION LIMITED — premium aluminium and glass works in Tanzania.",
      path: "/404",
      image: "/images/hd.jpeg",
    });
  }, []);

  return (
    <div className="min-h-screen grid place-items-center px-4 pt-24">
      <div className="text-center">
        <h1 className="text-8xl font-display font-black text-gradient-orange">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 rounded-md bg-gradient-orange text-white font-semibold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
