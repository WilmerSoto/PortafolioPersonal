import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

// Se usa DropdownMenu con un array para los datos de contacto. Esto para el boton de "Mira mis datos de contacto!"
export default function ContactDataButton() {
  const t = useTranslations("Main.Hero.button");
  const ContactData = [
    {
      href: "https://www.linkedin.com/in/wilmer-soto-04346a367/",
      title: "Linkedin",
      Icon: FaLinkedin,
    },
    { href: "mailto:wsoto04@gmail.com", title: t("email"), Icon: Mail },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
          {t("title")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("subtitle")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ContactData.map((entry, index) => (
          <DropdownMenuItem key={index}>
            <Link
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-2"
            >
              {entry.title} <entry.Icon />
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
