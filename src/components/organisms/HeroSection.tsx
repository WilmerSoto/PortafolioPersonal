import TextIntroduction from "@/components/molecules/TextIntroduction";
import PersonalPhoto from "@/components/atoms/PersonalPhoto";

//Seccion completa de Introduccion. Utiliza el texto definido en moleculas y la foto personal en atomos.
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center bg-white p-6 lg:flex-row">
      <TextIntroduction />
      <PersonalPhoto className="h-70 w-70" />
    </div>
  );
}
