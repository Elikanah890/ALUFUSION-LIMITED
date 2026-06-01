import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center px-4 pt-24">
      <div className="text-center">
        <h1 className="text-8xl font-display font-black text-gradient-orange">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 rounded-md bg-gradient-orange text-white font-semibold">
          Go Home
        </Link>
      </div>
    </div>
  );
}
