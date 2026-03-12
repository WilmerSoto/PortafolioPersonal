import SectionHeader from "@/components/molecules/SectionHeader";
import KnowledgeCard from "@/components/molecules/KnowledgeCard";
import {
  MonitorSmartphone,
  Server,
  Database,
  Workflow,
  Network,
  ListCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";

//Seccion completa de Conocimientos. Utiliza el Header de Seccion y la card definida en moleculas.
export default function KnowledgeSection() {
  const t = useTranslations("Main.Knowledge");
  const knowledgeData = [
    {
      title: t("cards.web"),
      description:
        "Next.js, Tailwind CSS, HTML, CSS, JavaScript/TypeScript, Microsoft Power Apps/Power Automate",
      Icon: MonitorSmartphone,
    },
    {
      title: t("cards.backend"),
      description: "Spring Boot, APIs REST, Java, Python",
      Icon: Server,
    },
    {
      title: t("cards.db"),
      description: "PostgreSQL, DBeaver, SQL",
      Icon: Database,
    },
    {
      title: t("cards.devops"),
      description:
        "Git, GitHub, Docker, GitHub Actions, Docker Compose, Azure DevOps",
      Icon: Workflow,
    },
    {
      title: "APIs",
      description: "RESTful APIs, GraphQL, Postman",
      Icon: Network,
    },
    {
      title: t("cards.methodologies"),
      description: "Agile, Scrum, Trello",
      Icon: ListCheck,
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 text-wrap">
      <SectionHeader title={t("title")} description={t("description")} />
      <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {knowledgeData.map((card, index) => (
          <KnowledgeCard
            key={index}
            title={card.title}
            description={card.description}
            Icon={card.Icon}
          />
        ))}
      </div>
    </div>
  );
}
