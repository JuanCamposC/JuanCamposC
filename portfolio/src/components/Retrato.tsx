import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

const ARCHIVO = "retrato.jpg";

/**
 * Retrato en duotono ámbar.
 *
 * Comprueba en tiempo de compilación si el archivo existe y, si no está,
 * dibuja un marcador con el aspecto del propio panel en lugar de dejar una
 * imagen rota. Así el diseño no depende de que el archivo haya llegado: sin
 * JavaScript no hay forma de detectar un 404 de imagen, y un hueco gris sería
 * peor que un marcador deliberado.
 */
export default function Retrato({
  alt,
  sinSenal,
  etiqueta,
}: {
  alt: string;
  sinSenal: string;
  etiqueta: string;
}) {
  const hay = existsSync(path.join(process.cwd(), "public", ARCHIVO));

  return (
    <figure className="w-[9.5rem] sm:w-[12rem] md:w-[16rem]">
      <div className="relative aspect-[4/5] w-full border border-rule">
        {/* Cruces de registro en las esquinas: marca de instrumento calibrado. */}
        <Esquinas />

        {hay ? (
          <>
            <Image
              src={`/${ARCHIVO}`}
              alt={alt}
              width={800}
              height={1000}
              priority
              sizes="(min-width: 768px) 16rem, (min-width: 640px) 12rem, 9.5rem"
              className="retrato h-full w-full object-cover"
            />
            {/* El ámbar va debajo en luminosidad: tiñe sin ensuciar el rostro. */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-signal/85"
              aria-hidden
            />
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-surface px-3 text-center">
            <span className="piloto" aria-hidden />
            <span className="etiqueta">{sinSenal}</span>
            <code className="text-[0.625rem] leading-tight text-faint">
              public/{ARCHIVO}
            </code>
          </div>
        )}
      </div>

      {/* Pie del instrumento: ancla el retrato al lenguaje del panel en vez de
          dejarlo como una foto suelta flotando en la esquina. */}
      <figcaption className="etiqueta mt-2 flex items-center justify-between border-t border-rule pt-2">
        <span>{etiqueta}</span>
        <span className="text-signal">{hay ? "OK" : "—"}</span>
      </figcaption>
    </figure>
  );
}

function Esquinas() {
  const comun =
    "pointer-events-none absolute h-2.5 w-2.5 border-signal opacity-70";
  return (
    <span aria-hidden>
      <span className={`${comun} -left-px -top-px border-l border-t`} />
      <span className={`${comun} -right-px -top-px border-r border-t`} />
      <span className={`${comun} -bottom-px -left-px border-b border-l`} />
      <span className={`${comun} -bottom-px -right-px border-b border-r`} />
    </span>
  );
}
