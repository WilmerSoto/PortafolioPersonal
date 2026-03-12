import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface LearnMorePortfolioProps {
  longDescription: string;
  githubLink: string;
}

// DropdownMenu generico para la parte de "Conoce mas." de cada item de mis proyectos. Recibe el link de github
// y la descripcion mas detallada.
export default function LearnMorePortfolio({
  longDescription,
  githubLink,
}: LearnMorePortfolioProps) {
  const t = useTranslations("Main.Portfolio.button");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
          {t("title")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full max-w-sm">
        <DropdownMenuLabel>{t("subtitle")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* Se usa .split ya que el texto de descripcion se separa con \n. Se divide cada parrafo en un item del menu */}
        {longDescription.split("\n").map((paragraph, index) => (
          <DropdownMenuItem key={index}>{paragraph}</DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 underline decoration-sky-500"
          >
            {t("github")}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
