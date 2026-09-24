import Hero from "@/components/Hero";
import CredStrip from "@/components/CredStrip";
import AuthorAbout from "@/components/AuthorAbout";
import Method from "@/components/Method";
import Videos from "@/components/Videos";
import BookSection from "@/components/BookSection";
import Proof from "@/components/Proof";
import Offer from "@/components/Offer";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <CredStrip />
      <AuthorAbout />
      <Method />
      <Videos />
      <BookSection />
      <Proof />
      <Offer />
      <FaqSection />
    </main>
  );
}
