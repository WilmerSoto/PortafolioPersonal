import SectionHeader from "@/components/molecules/SectionHeader";
import EducationCard from "@/components/molecules/EducationCard";
import HorizontalDivider from "@/components/atoms/HorizontalDivider";
import React from "react";
import { useTranslations } from "next-intl";

//Seccion completa de Educacion. Utiliza el Header de Seccion y la card definida en moleculas.
export default function EducationSection() {
  const t = useTranslations("Main.Education");
  const educationKeys = ["udea", "nextjs"];

  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeader
        title={t("title")}
        description={t("headerDescription")}
      ></SectionHeader>
      <div className="flex flex-col gap-y-5 bg-white p-2 sm:p-8">
        {educationKeys.map((entry, index) => (
          <React.Fragment key={index}>
            <EducationCard
              institution={t(`items.${entry}.institution`)}
              dateRange={t(`items.${entry}.date`)}
              degree={t(`items.${entry}.degree`)}
              description={t(`items.${entry}.description`)}
            ></EducationCard>
            {index < educationKeys.length - 1 && <HorizontalDivider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
