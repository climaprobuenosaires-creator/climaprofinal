import { useState } from "react";
import { Maximize2, ZoomIn, ZoomOut, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import splitReference from "@/assets/split-circuito-referencia.jpeg.asset.json";

export const splitReferenceUrl = splitReference.url;

/** Imagen didáctica con ampliación, acercamiento y apertura del original. */
export function ZoomableImage({ src, title, note, alt }: { src: string; title: string; note: string; alt?: string }) {
  const [zoomed, setZoomed] = useState(false);
  return (
    <figure className="mt-3">
      <Dialog onOpenChange={() => setZoomed(false)}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="block h-auto w-full p-0 hover:bg-transparent" aria-label={`Ampliar imagen: ${title}`}>
            <img src={src} alt={alt ?? title} className="split-reference-image rounded-lg" loading="lazy" />
          </Button>
        </DialogTrigger>
        <div className="split-reference-toolbar">
          <DialogTrigger asChild><Button variant="outline"><Maximize2 />Ampliar imagen</Button></DialogTrigger>
        </div>
        <DialogContent className="split-reference-dialog">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{note}</DialogDescription>
          <div className="split-reference-toolbar">
            <Button variant="outline" onClick={() => setZoomed(!zoomed)} aria-label={zoomed ? "Ajustar imagen" : "Acercar imagen"}>{zoomed ? <ZoomOut /> : <ZoomIn />}</Button>
            <Button variant="outline" asChild><a href={src} target="_blank" rel="noreferrer" aria-label="Abrir imagen original"><ExternalLink /></a></Button>
          </div>
          <div className={`split-reference-scroll ${zoomed ? "is-zoomed" : ""}`}><img src={src} alt={title} /></div>
        </DialogContent>
      </Dialog>
      <figcaption className="mt-2 text-sm text-muted-foreground">{note}</figcaption>
    </figure>
  );
}

export function SplitReferenceImage() {
  return (
    <ZoomableImage
      src={splitReference.url}
      title="Equipo split y circuito de refrigeración"
      alt="Equipo split con etiquetas en español y circuito de refrigeración superpuesto"
      note="Referencia aportada: esquema simplificado en modo frío, no un plano de instalación. A la salida de la expansión hay una mezcla de líquido y vapor, no líquido puro. La ubicación de la expansión y el estado en las cañerías dependen del equipo; consultar su manual."
    />
  );
}
