import Translation, {
  TranslationReturnType,
} from "../../../shared/components/Translation";
import * as S from "../about-me-section.styled";

export default function Skills() {
  return (
    <S.Skills>
      <h3>Skills</h3>
      {skillItems.map(({ id, tag, skills }) => (
        <SkillItems key={id} tag={tag} skills={skills} />
      ))}
    </S.Skills>
  );
}

function SkillItems({
  tag,
  skills,
}: {
  tag: TranslationReturnType;
  skills: string | TranslationReturnType;
}) {
  return (
    <S.SkillsItem>
      <h4>{tag}</h4>
      <span>{skills}</span>
    </S.SkillsItem>
  );
}

const skillItems = [
  {
    id: "language",
    tag: <Translation id='language' />,
    skills: "JavaScript, TypeScript, Python, Java",
  },
  {
    id: "front-end",
    tag: <Translation id='frontEnd' />,
    skills: "HTML/CSS, React, react-query, redux, zustand",
  },
  {
    id: "styling",
    tag: <Translation id='styling' />,
    skills: "styled-components, emotion",
  },
  {
    id: "test",
    tag: <Translation id='test' />,
    skills: "Jest, Vitest",
  },
  {
    id: "version-control",
    tag: <Translation id='versionControl' />,
    skills: "Git, Github",
  },
  {
    id: "deployment",
    tag: <Translation id='deployment' />,
    skills: "AWS, Vercel, Netlify, Github Actions, Firebase",
  },
  {
    id: "communication",
    tag: <Translation id='communication' />,
    skills: "Notion, Slack, Jira, Confluence, Figma, Discord",
  },
  {
    id: "multilingual",
    tag: <Translation id='multilingual' />,
    skills: <Translation id='multilingualItems' />,
  },
];
