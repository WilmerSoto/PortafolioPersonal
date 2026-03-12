import SectionHeader from "@/components/molecules/SectionHeader";
import WhyHireMeCarousel from "@/components/organisms/WhyHireMeCarousel";
import { useTranslations } from "next-intl";

//Seccion completa de ¿Por Qué Contratarme?. Utiliza el Header de Seccion y el carrousel definido.
export default function WhyHireMeSection() {
  const t = useTranslations("Main.WhyHireMe");
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeader
        title={t("title")}
        description={t("description")}
      ></SectionHeader>
      <div className="flex items-center justify-center pr-5 pl-5 align-middle">
        <WhyHireMeCarousel />
      </div>
    </div>
  );
}
