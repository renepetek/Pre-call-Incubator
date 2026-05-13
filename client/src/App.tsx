import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { trackPixelPageView } from "@/lib/pixel";
import NotFound from "@/pages/NotFound";
import { Analytics } from "@vercel/analytics/react";
import { useEffect, useRef } from "react";
import { Redirect, Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import FreeTraining from "./pages/FreeTraining";
import Terms from "./pages/Terms";
import ThankYou from "./pages/ThankYou";
import Training from "./pages/Training";


function Router() {
  return (
    <Switch>
      <Route path="/">{() => <Redirect to="/free-training" />}</Route>
      <Route path="/free-training" component={FreeTraining} />
      <Route path="/training" component={Training} />
      <Route path="/thankyou" component={ThankYou} />
      <Route path="/terms" component={Terms} />
      {/* Anything else: send the visitor to the opt-in instead of a 404 */}
      <Route>{() => <Redirect to="/free-training" />}</Route>
    </Switch>
  );
}

// Meta Pixel auto-fires PageView once from the snippet in index.html on
// initial load. For SPA navigation we manually fire PageView on every
// subsequent route change, skipping the first render to avoid a duplicate.
function PixelRouteTracker() {
  const [location] = useLocation();
  const firstMount = useRef(true);
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    trackPixelPageView();
  }, [location]);
  return null;
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <PixelRouteTracker />
          <Router />
          <Analytics />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
