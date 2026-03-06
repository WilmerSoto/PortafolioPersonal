import Main from "@/components/templates/Main";
import Sidebar from "@/components/templates/Sidebar";
import LinksSidebar from "@/components/molecules/LinksSidebar";

export default function Home() {
  return (
    <div className="flex h-screen flex-col sm:flex-row">
      <Sidebar />
      <Main />
      <LinksSidebar />
    </div>
  );
}
