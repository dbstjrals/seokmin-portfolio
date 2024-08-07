import type { ProjectProps } from "../project-section.types";
import * as S from "../project-section.styled";
import { PROJECTS } from "../project-section.constants";

export default function ProjectTable({
  setShowProjectDetail,
}: {
  setShowProjectDetail: ({ id, color }: ProjectProps) => void;
}) {
  const handleCardClick = ({ id, color }: ProjectProps) => {
    setShowProjectDetail({ id, color });
  };

  return (
    <S.ProjectCardWrapper>
      {PROJECTS.map((project) => (
        <S.ProjectCard
          key={project.id}
          $color={project.color}
          onClick={() => handleCardClick(project)}
        >
          {project.title}
        </S.ProjectCard>
      ))}
    </S.ProjectCardWrapper>
  );
}
