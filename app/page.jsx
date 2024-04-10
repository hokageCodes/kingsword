import ActionSection from "@/components/action/ActionSection";
import EventsSection from "@/components/event/EventSection";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import VideoSection from "@/components/video-section/VideoSection";
import WorshipForm from "@/components/worship/WorshipForm";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <VideoSection />
      <WorshipForm />
      <EventsSection />
      <ActionSection />
    </div>
  );
}
