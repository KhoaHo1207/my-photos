import { Loader2 } from "lucide-react";

interface LoadingProps {
  className?: string;
  size: "xs" | "sm" | "md" | "lg";
  fullScreen?: boolean;
  inline?: boolean;
}

export default function Loading({
  className,
  size,
  fullScreen,
  inline,
}: LoadingProps) {
  const sizeMap = {
    xs: "size-4",
    sm: "size-6",
    md: "size-8",
    lg: "size-10",
  };

  const sizeClass = sizeMap[size] || sizeMap.md;

  if (inline) {
    return (
      <Loader2
        className={`${sizeClass} animate-spin ${className || "text-current"}`}
      />
    );
  }

  if (fullScreen) {
    return (
      <div
        className={`flex min-h-screen items-center justify-center bg-slate-50 ${className}`}
      >
        <Loader2 className={`${sizeClass} animate-spin text-red-600`} />
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center ${className || "py-24"}`}>
      <Loader2 className={`${sizeClass} animate-spin text-red-600`} />
    </div>
  );
}
