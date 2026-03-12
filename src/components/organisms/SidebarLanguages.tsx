import Header1 from "@/components/atoms/Header1";
import { Progress } from "@/components/ui/progress";
import LabelValue from "@/components/molecules/LabelValue";
import React from "react";
import { useTranslations } from "next-intl";

//Seccion de lenguajes del sidebar. Usa tambien el label definidos anteriormente.
export default function SidebarLanguages() {
  const t = useTranslations("Sidebar");
  const LanguagesData = [
    { first: t("Languages.spanish"), second: "100%", percentage: 100 },
    { first: t("Languages.english"), second: "90%", percentage: 90 },
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <Header1 className="text-base">{t("Titles.languages")}</Header1>
      {LanguagesData.map((entry, index) => (
        <React.Fragment key={index}>
          <LabelValue
            className="font-extralight text-neutral-700"
            first={entry.first}
            second={entry.second}
          ></LabelValue>
          <Progress value={entry.percentage}></Progress>
        </React.Fragment>
      ))}
    </div>
  );
}
