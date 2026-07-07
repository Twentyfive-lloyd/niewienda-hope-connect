import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  label?: string;
  priority?: boolean;
};

export function SmartImage({ src, alt, className, ratio = "aspect-[4/3]", label, priority }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={cn("relative overflow-hidden bg-muted", ratio, className)}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sage-soft to-muted p-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-navy/60">Image</div>
          <div className="font-display text-2xl text-navy">{label ?? src.split("/").pop()}</div>
          <div className="text-xs text-muted-foreground">Placeholder — sera remplacée</div>
        </div>
      )}
    </div>
  );
}