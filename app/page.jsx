import ActionSection from "../components/action/ActionSection";
import EventsSection from "../components/event/EventSection";
import HeroSection from "../components/hero/HeroSection";
import VideoSection from "../components/video-section/VideoSection";
import WorshipPage from "../components/worship/WorshipForm";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <VideoSection />
      <WorshipPage />
      <EventsSection />
      <ActionSection />
    </div>
  );
}
