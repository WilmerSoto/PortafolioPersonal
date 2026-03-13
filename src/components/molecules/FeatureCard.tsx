import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureCardsProps {
  title: string;
  description: React.ReactNode;
  Icon: React.ElementType;
}

// Card generica (usando Shadcn) para la parte de Mis conocimientos. Recibe un icono, titulo y descripcion de este.
export default function FeatureCard({
  title,
  description,
  Icon,
}: FeatureCardsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center p-0">
        <Icon className="mb-4 h-16 w-16 text-yellow-500" />
        <CardTitle className="px-5 text-center text-lg font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="px-5 text-center text-neutral-700">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
