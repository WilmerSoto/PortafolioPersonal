import SectionHeader from "@/components/molecules/SectionHeader";
import { CheckCircle, Lightbulb, Network } from "lucide-react";
import { useTranslations } from "next-intl";
import FeatureCard from "@/components/molecules/FeatureCard";

const whyHireMeData = [
  { id: "problemSolving", icon: Lightbulb },
  { id: "comprehensive", icon: Network },
  { id: "quality", icon: CheckCircle },
];
//Seccion completa de ¿Por Qué Contratarme?. Utiliza el Header de Seccion y la card generica feature.
export default function WhyHireMeSection() {
  const t = useTranslations("Main.WhyHireMe");
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeader
        title={t("title")}
        description={t("description")}
      ></SectionHeader>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {whyHireMeData.map((card) => (
          <FeatureCard
            key={card.id}
            Icon={card.icon}
            title={t(`cards.${card.id}.title`)}
            description={
              <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
                {t
                  .raw(`cards.${card.id}.items`)
                  .map((entry: string, index: number) => (
                    <li key={index}>{entry}</li>
                  ))}
              </ul>
            }
          />
        ))}
      </div>
    </div>
  );
}
