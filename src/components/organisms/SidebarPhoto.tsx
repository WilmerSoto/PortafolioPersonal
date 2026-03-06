import Header1 from "@/components/atoms/Header1";
import Text from "@/components/atoms/Text";
import PersonalPhoto from "@/components/atoms/PersonalPhoto";
import { useTranslations } from "next-intl";

// Foto inicial del sidebar. Utiliza los atomos de foto, header y texto.
export default function SidebarPhoto() {
  const t = useTranslations("SidebarPhoto");

  return (
    <div className="flex flex-col items-center gap-y-4">
      <PersonalPhoto className="rounded-full object-cover" />
      <Header1>Wilmer Soto Vidal</Header1>
      <Text>{t("text")}</Text>
    </div>
  );
}
