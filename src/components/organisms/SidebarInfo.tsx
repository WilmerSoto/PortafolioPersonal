import LabelValue from "@/components/molecules/LabelValue";
import { useTranslations } from "next-intl";

// Informacion personal del sidebar. Usa el label definido anteriormente.
export default function SidebarInfo() {
  const t = useTranslations("Sidebar");

  const InfoData = [
    { first: t("Profile.age"), second: "22" },
    { first: t("Profile.city"), second: "Medellin" },
    { first: "Email:", second: "wsoto04@gmail.com" },
  ];

  return (
    <div className="flex flex-col gap-y-1">
      {InfoData.map((entry, index) => (
        <LabelValue
          key={index}
          first={entry.first}
          second={entry.second}
        ></LabelValue>
      ))}
    </div>
  );
}
