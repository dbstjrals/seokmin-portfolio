import * as S from "./project-section.styled";
import { SectionTitle } from "../../shared/components/Section";
import { useEffect, useState } from "react";
import type {
  ProjectId,
  ProjectColor,
  ProjectProps,
} from "./project-section.types";
import ProjectTable from "./components/ProjectTable";
import ProjectDetail from "./components/ProjectDetail";
import { theme } from "../../app/styles";

export function ProjectSection({
  forwardRef,
}: {
  forwardRef: React.RefObject<HTMLElement>;
}) {
  const [currentProject, setCurrentProject] = useState<ProjectId>();
  const [showProgressBar, setShowProgressBar] = useState<ProjectColor>();

  useEffect(() => {
    const hideScrollBar = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      document.body.style.overflow = "hidden";
    };

    if (currentProject) {
      hideScrollBar();
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [currentProject]);

  const showProjectDetail = async ({ id, color }: ProjectProps) => {
    await activateProgressBar(color);
    setCurrentProject(id);
  };

  async function activateProgressBar(color: string) {
    setShowProgressBar(color);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setShowProgressBar(undefined);
  }

  const hideProjectDetail = () => {
    setCurrentProject(undefined);
    setShowProgressBar(undefined);
  };

  return (
    <>
      <S.ProjectSection ref={forwardRef}>
        <S.ProjectWrapper>
          <SectionTitle title='Projects' bg={theme.color.secondary} />
          <ProjectTable setShowProjectDetail={showProjectDetail} />
        </S.ProjectWrapper>
      </S.ProjectSection>

      {showProgressBar && <S.ProgressBar $color={showProgressBar} />}

      <ProjectDetail
        currentProject={currentProject}
        hideProjectDetail={hideProjectDetail}
      />
    </>
  );
}
