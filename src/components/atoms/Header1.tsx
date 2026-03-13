import { cn } from "@/lib/utils";

export default function Header1({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-lg font-semibold sm:text-xl", className)}>
      {children}
    </h1>
  );
}
