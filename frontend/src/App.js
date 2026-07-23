import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { IconColorProvider } from "@/context/IconColorContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/Home";
import Icons from "@/pages/Icons";
import Playground from "@/pages/Playground";
import Docs from "@/pages/Docs";
import NotFound from "@/pages/NotFound";
import ScrollToTop from "@/components/shared/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <IconColorProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/icons" element={<Icons />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#121214",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
              },
            }}
          />
          <Analytics />
        </BrowserRouter>
      </IconColorProvider>
    </ThemeProvider>
  );
}


export default App;
