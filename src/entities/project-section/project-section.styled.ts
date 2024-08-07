import styled from "styled-components";
import { SectionWrapper } from "../../shared/components/Section";

export const ProjectSection = styled.section`
  width: 100%;
  height: 1000px;

  background: linear-gradient(
    to right bottom,
    rgba(215, 196, 158, 0.2),
    rgba(249, 249, 249, 0.5)
  );
`;

export const ProjectWrapper = styled(SectionWrapper)`
  padding-bottom: 120px;
`;

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  justify-content: space-between;
`;

export const ProjectCard = styled.div<{ $color: string }>`
  width: calc((100% - 24px) / 3);
  min-width: 364px;
  aspect-ratio: 3/2;

  background-color: ${({ $color }) => $color};
  border: 1px solid black;

  opacity: 0.6;

  cursor: pointer;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
`;

export const ProjectDetail = styled.div`
  visibility: hidden;
  opacity: 0;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100%;
  height: 100%;

  color: white;
  font-size: 100px;

  transform: translateY(100%);
  transition: transform 1s ease-in-out, opacity 1s ease-in-out, visibility 0s 1s;

  &.project_detail_active {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transition: transform 1s ease-in-out, opacity 1s ease-in-out,
      visibility 0s 0s;

    background-color: white;
  }

  &.project_detail_hidden {
    visibility: hidden;
    opacity: 0;
    transform: translateY(100%);
    transition: transform 1s ease-in-out, opacity 1s ease-in-out,
      visibility 0s 1s;

    background-color: white;
  }
`;

export const ProgressBar = styled.div<{ $color: string }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;

  width: 100%;
  height: 8px;
  background-color: ${({ $color }) => $color};

  animation: progress 1.5s linear forwards;

  @keyframes progress {
    0% {
      width: 0;
    }
    33% {
      width: 50%;
    }
    66% {
      width: 70%;
    }
    99% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;
