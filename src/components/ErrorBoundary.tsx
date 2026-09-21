import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { error: Error | null };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught render error:", error);
    console.error("Component stack:", info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen grid place-items-center bg-background px-4">
          <div className="max-w-lg text-center">
            <h1 className="font-display font-black text-3xl mb-3">Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              An unexpected error occurred while rendering this page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-md bg-gradient-orange text-white font-semibold"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
