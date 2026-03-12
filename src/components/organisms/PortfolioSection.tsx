import SectionHeader from "@/components/molecules/SectionHeader";
import PortfolioCarousel from "@/components/organisms/PortfolioCarousel";
import { useTranslations } from "next-intl";

//Seccion completa de Proyectos. Utiliza el Header de Seccion y el carrousel.
export default function PortfolioSection() {
  const t = useTranslations("Main.Portfolio");
  return (
    <div className="flex flex-col gap-y-4">
      <SectionHeader
        title={t("title")}
        description={t("description")}
      ></SectionHeader>
      <div className="flex items-center justify-center pr-5 pl-5 align-middle">
        <PortfolioCarousel />
      </div>
    </div>
  );
}
