import Header1 from "@/components/atoms/Header1";
import LabelExtraSkills from "@/components/molecules/LabelExtraSkills";
import { useTranslations } from "next-intl";

const ExtraSkillsData = [
  { skill: "Github, Git, GitHub Actions" },
  { skill: "NextJS, TailwindCSS" },
  { skill: "SpringBoot" },
  { skill: "Docker, Docker Compose" },
  { skill: "PostgreSQL, DBeave" },
  { skill: "APIs REST, Postman" },
];

// Parte de habilidades extras del sidebar. Se utiliza el label ya definido anteriormente.
export default function SidebarExtraSkills() {
  const t = useTranslations("Sidebar");

  return (
    <div className="flex flex-col gap-y-2">
      <Header1 className="text-base">{t("Titles.extraSkills")}</Header1>
      {ExtraSkillsData.map((entry, index) => (
        <LabelExtraSkills key={index}>{entry.skill}</LabelExtraSkills>
      ))}
    </div>
  );
}
