import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import Checkout from "@/pages/Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-soft focus:bg-background focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:text-foreground focus:shadow-soft"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
