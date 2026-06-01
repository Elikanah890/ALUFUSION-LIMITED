import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("cookie-ok")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-50 bg-card border border-border rounded-xl shadow-2xl p-5">
      <p className="text-sm text-foreground mb-4">
        We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            localStorage.setItem("cookie-ok", "1");
            setShow(false);
          }}
          className="flex-1 px-4 py-2 rounded-md bg-gradient-orange text-white font-semibold text-sm"
        >
          Accept
        </button>
        <button
          onClick={() => setShow(false)}
          className="px-4 py-2 rounded-md border border-border text-sm font-semibold"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
