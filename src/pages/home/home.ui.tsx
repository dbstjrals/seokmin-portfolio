import { useRefs } from "../../app/context/ref-context";
import { AboutMeSection } from "../../entities/about-me-section";
import { ProfileSection } from "../../entities/profile-section";
import { ProjectSection } from "../../entities/project-section";

export function HomePage() {
  const { aboutMeRef, projectRef } = useRefs();

  return (
    <>
      <ProfileSection />
      <AboutMeSection forwardRef={aboutMeRef} />
      <ProjectSection forwardRef={projectRef} />
    </>
  );
}
