import LabelValue from "@/components/molecules/LabelValue";
import { ageFromDateOfBirthday } from "@/lib/utils";
import { useTranslations } from "next-intl";

// Informacion personal del sidebar. Usa el label definido anteriormente.
export default function SidebarInfo() {
  const t = useTranslations("Sidebar");

  const myCurrentAge = ageFromDateOfBirthday("2002-11-23");

  const InfoData = [
    { first: t("Profile.age"), second: myCurrentAge },
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
