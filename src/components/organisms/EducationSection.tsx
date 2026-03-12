import SectionHeader from "@/components/molecules/SectionHeader";
import EducationCard from "@/components/molecules/EducationCard";
import HorizontalDivider from "@/components/atoms/HorizontalDivider";
import React from "react";
import { useTranslations } from "next-intl";

//Seccion completa de Educacion. Utiliza el Header de Seccion y la card definida en moleculas.
export default function EducationSection() {
  const t = useTranslations("Main.Education");
  const EducationData = [
    {
      institution: "Universidad de Antioquia",
      dateRange: "2020-2025",
      degree: "Ingeniero de Sistemas",
      description:
        "Profundizando en los fundamentos de la informática, algoritmos, estructuras de datos, y el desarrollo de sistemas complejos.",
    },
    {
      institution: "Curso Oficial NextJS",
      dateRange: "2025",
      degree: "Fundamentos de React y App Router NextJS",
      description:
        "Dominio de los principios esenciales de React para construir interfaces de usuario dinámicas, complementado con la arquitectura moderna y capacidades de renderizado del App Router de Next.js para aplicaciones de alto rendimiento.",
    },
  ];

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
            {index < EducationData.length - 1 && <HorizontalDivider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
