import { AboutMeSection } from "../../entities/about-me-section";
import { ProfileSection } from "../../entities/profile-section";
import { useRefs } from "../../app/context/ref-context";

export function HomePage() {
  const aboutMeRef = useRefs();

  return (
    <>
      <ProfileSection />
      <AboutMeSection forwardRef={aboutMeRef} />
    </>
  );
}
