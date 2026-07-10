import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  label?: string;
  priority?: boolean;
  previewable?: boolean;
  previewLabel?: string;
};

export function SmartImage({
  src,
  alt,
  className,
  ratio = "aspect-[4/3]",
  label,
  priority,
  previewable = false,
  previewLabel,
}: Props) {
  const [failed, setFailed] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  const openPreview = (event?: React.MouseEvent | React.KeyboardEvent) => {
    if (!previewable) return;
    event?.stopPropagation();
    setPreviewOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPreview(event);
    }
  };

  return (
    <>
      <div
        className={cn("relative overflow-hidden bg-muted", ratio, className, previewable && "cursor-zoom-in")}
        role={previewable ? "button" : undefined}
        tabIndex={previewable ? 0 : undefined}
        onClick={(event) => openPreview(event)}
        onKeyDown={previewable ? handleKeyDown : undefined}
      >
        {!failed ? (
          <>
            <img
              src={src}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              onError={() => setFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {previewable && (
              <div className="absolute right-3 top-3 rounded-full border border-white/70 bg-black/45 p-2 text-white shadow-sm backdrop-blur-sm">
                <Maximize2 className="h-4 w-4" />
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sage-soft to-muted p-6 text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-navy/60">Image</div>
            <div className="font-display text-2xl text-navy">{label ?? src.split("/").pop()}</div>
            <div className="text-xs text-muted-foreground">Placeholder — sera remplacée</div>
          </div>
        )}
      </div>

      {previewable && (
        <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
          <DialogContent className="max-w-5xl border-0 bg-background/95 p-0 sm:rounded-[1.75rem]">
            <div className="flex max-h-[85vh] items-center justify-center overflow-hidden bg-background">
              <img src={src} alt={alt} className="max-h-[85vh] w-full object-contain" />
            </div>
            <div className="border-t border-border bg-background/95 px-6 py-4">
              <p className="text-sm text-foreground/70">{previewLabel ?? label ?? alt}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}