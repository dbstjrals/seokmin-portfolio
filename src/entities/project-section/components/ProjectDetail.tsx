import type { ProjectId } from "../project-section.types";
import { ProjectDetail as DetailWrapper } from "../project-section.styled";

export default function ProjectDetail({
  currentProject,
  hideProjectDetail,
}: {
  currentProject: ProjectId;
  hideProjectDetail: () => void;
}) {
  return (
    <DetailWrapper
      className={
        currentProject ? "project_detail_active" : "project_detail_hidden"
      }
      onClick={() => hideProjectDetail()}
    >
      {currentProject}
    </DetailWrapper>
  );
}
