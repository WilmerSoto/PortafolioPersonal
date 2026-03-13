import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PersonalPhoto({ className }: { className?: string }) {
  const t = useTranslations("Sidebar.Profile");
  return (
    <Image
      src="/Profile picture.png"
      alt={t("imageAlt")}
      width={400}
      height={400}
      className={cn("h-45 w-40", className)}
    />
  );
}
