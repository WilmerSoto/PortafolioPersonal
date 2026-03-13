import Header1 from "@/components/atoms/Header1";
import Text from "@/components/atoms/Text";
import ContactDataButton from "@/components/molecules/ContactDataButton";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";

// Texto utilizado para la introduccion (Hero section). Tambien incluye el boton de contacto.
export default function TextIntroduction() {
  const t = useTranslations("Main.Hero");

  return (
    <div className="flex flex-col gap-y-4">
      <LanguageSwitcher />
      <Header1 className="text-3xl">
        {t.rich("title", {
          y: (chunks) => <span className="text-yellow-500">{chunks}</span>,
        })}
      </Header1>
      <Text>{t("description")}</Text>
      <div>
        <ContactDataButton />
      </div>
    </div>
  );
}
