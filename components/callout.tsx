import { cn } from "@/lib/utils";

export const Callout = ({
  title,
  type,
  children,
}: {
  title: string;
  children: React.ReactNode;
  type: 'info' | 'warning';
}) => {
  const style = {
    info: 'bg-blue-100 border-blue-200 text-blue-900',
    warning: 'bg-yellow-100 border-yellow-200 text-yellow-900',
  }[type]

  return (
    <div className={cn("border p-6 not-prose rounded-lg overflow-hidden", style)}>
      <h2 className="font-bold mb-1">{title}</h2>
      <div>{children}</div>
    </div>
  )
}