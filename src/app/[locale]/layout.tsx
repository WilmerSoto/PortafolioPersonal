import "../globals.css";
import { inter } from "../fonts";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import type { Metadata, ResolvingMetadata } from "next";

// const t = await getTranslations("Metadata");

// export const metadata: Metadata = {
//   title: t(),
//   description: "Pagina del portafolio de Wilmer Soto",
// };

type MetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <body
          className={`${inter.className} flex min-h-screen flex-col antialiased`}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
