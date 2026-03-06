import Main from "@/components/templates/Main";
import Sidebar from "@/components/templates/Sidebar";
import LinksSidebar from "@/components/molecules/LinksSidebar";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="flex h-screen flex-col sm:flex-row">
      <Sidebar />
      <Main />
      <LinksSidebar />
    </div>
  );
}
