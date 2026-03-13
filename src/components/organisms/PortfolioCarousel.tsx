import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PortfolioCard from "@/components/molecules/PortfolioCard";
import { useTranslations } from "next-intl";

const portfolioData = [
  {
    id: "docManagement",
    image: "/projects/gestion-documentos.png",
    githubLink:
      "https://github.com/CodeFactory-EP17-InnoSistemas-Feature-5/Frontend",
  },
  {
    id: "inventory",
    image: "/projects/gestion-inventario.png",
    githubLink: "https://github.com/WilmerSoto/Gestion-Inventario",
  },
  {
    id: "digitalTransformation",
    image: "/projects/backend-pi2.png",
    githubLink: "https://github.com/ProyecetoIntegrador2/PI_backend",
  },
];

// Carrousel (usando Shadcn) usado para los proyectos. Usa las card ya definidas.
export default function PortfolioCarousel() {
  const t = useTranslations("Main.Portfolio");
  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {portfolioData.map((project) => (
          <CarouselItem key={project.id}>
            <PortfolioCard
              image={project.image}
              imageAlt={t(`items.${project.id}.imageAlt`)}
              title={t(`items.${project.id}.title`)}
              description={t(`items.${project.id}.description`)}
              longDescription={t(`items.${project.id}.longDescription`)}
              githubLink={project.githubLink}
            ></PortfolioCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
