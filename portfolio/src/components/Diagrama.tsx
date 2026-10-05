/**
 * Esquemas de arquitectura, uno por proyecto. Son SVG en línea, dibujados con
 * `currentColor` y sin texto traducible más allá de nombres propios de
 * tecnología, así que sirven igual en los dos idiomas y cambian con el tema.
 *
 * La idea es que digan algo que la prosa no dice: por dónde pasan los datos.
 * Un diagrama que solo repite el nombre del proyecto sería decoración.
 */

type Clave = "cimarq" | "iglesia" | "iot" | "banubot" | "lai";

const TRAZO = 1;

function Caja({
  x,
  y,
  w = 62,
  h = 20,
  children,
  fuerte = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  children: string;
  fuerte?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="none"
        stroke="currentColor"
        strokeWidth={fuerte ? TRAZO * 1.6 : TRAZO}
        opacity={fuerte ? 1 : 0.55}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 3}
        textAnchor="middle"
        fontSize="8"
        fill="currentColor"
        opacity={fuerte ? 1 : 0.8}
      >
        {children}
      </text>
    </g>
  );
}

function Flecha({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeWidth={TRAZO}
      opacity={0.4}
      markerEnd="url(#punta)"
    />
  );
}

function Lienzo({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 112"
      className="h-auto w-full max-w-md text-signal"
      role="img"
      aria-hidden
    >
      <defs>
        <marker
          id="punta"
          viewBox="0 0 8 8"
          refX="7"
          refY="4"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M0 1 L7 4 L0 7" fill="none" stroke="currentColor" />
        </marker>
      </defs>
      {children}
    </svg>
  );
}

export default function Diagrama({ clave }: { clave: Clave }) {
  if (clave === "iglesia") {
    return (
      <Lienzo>
        <Caja x={2} y={46} w={56}>
          visitante
        </Caja>
        <Flecha x1={60} y1={56} x2={104} y2={56} />
        <Caja x={106} y={44} w={74} h={24} fuerte>
          Worker
        </Caja>
        <Flecha x1={182} y1={50} x2={236} y2={24} />
        <Flecha x1={182} y1={56} x2={236} y2={56} />
        <Flecha x1={182} y1={62} x2={236} y2={88} />
        <Caja x={238} y={14} w={56}>
          D1
        </Caja>
        <Caja x={238} y={46} w={56}>
          R2
        </Caja>
        <Caja x={238} y={78} w={56}>
          KV
        </Caja>
        <Caja x={106} y={4} w={74}>
          Access · JWT
        </Caja>
        <Flecha x1={143} y1={26} x2={143} y2={42} />
        <text x={2} y={104} fontSize="7.5" fill="currentColor" opacity={0.45}>
          panel y sitio público en el mismo Worker
        </text>
      </Lienzo>
    );
  }

  if (clave === "cimarq") {
    return (
      <Lienzo>
        <Caja x={2} y={16} w={58}>
          sensores
        </Caja>
        <Flecha x1={62} y1={26} x2={100} y2={26} />
        <Caja x={102} y={14} w={70} h={24} fuerte>
          NestJS
        </Caja>
        <Flecha x1={174} y1={26} x2={214} y2={26} />
        <Caja x={216} y={16} w={62}>
          MongoDB
        </Caja>
        <Flecha x1={137} y1={40} x2={137} y2={62} />
        <Caja x={102} y={64} w={70} h={24} fuerte>
          FastAPI
        </Caja>
        <Flecha x1={174} y1={76} x2={214} y2={76} />
        <Caja x={216} y={66} w={62}>
          predicción
        </Caja>
        <text x={2} y={80} fontSize="7.5" fill="currentColor" opacity={0.45}>
          Perceptrón
        </text>
        <text x={2} y={104} fontSize="7.5" fill="currentColor" opacity={0.45}>
          series temporales · MAE / MSE / RMSE
        </text>
      </Lienzo>
    );
  }

  if (clave === "iot") {
    return (
      <Lienzo>
        <Caja x={2} y={14} w={54}>
          cámara
        </Caja>
        <Flecha x1={58} y1={24} x2={96} y2={24} />
        <Caja x={98} y={12} w={94} h={24} fuerte>
          OpenCV · LBPH
        </Caja>
        <Flecha x1={194} y1={24} x2={232} y2={24} />
        <Caja x={234} y={14} w={62}>
          identidad
        </Caja>
        <Caja x={2} y={62} w={54}>
          ESP8266
        </Caja>
        <Flecha x1={58} y1={72} x2={96} y2={72} />
        <Caja x={98} y={60} w={94} h={24} fuerte>
          DHT11
        </Caja>
        <Flecha x1={194} y1={72} x2={232} y2={72} />
        <Caja x={234} y={62} w={62}>
          Telegram
        </Caja>
        <text x={2} y={104} fontSize="7.5" fill="currentColor" opacity={0.45}>
          dos cadenas independientes · visión y telemetría
        </text>
      </Lienzo>
    );
  }

  // WordPress: lo honesto es un esquema de contenido, no de arquitectura.
  const titulo = clave === "lai" ? "LAI-UNAB" : "BanuBot";
  return (
    <Lienzo>
      <Caja x={2} y={44} w={74} h={24} fuerte>
        WordPress
      </Caja>
      <Flecha x1={78} y1={50} x2={128} y2={22} />
      <Flecha x1={78} y1={56} x2={128} y2={56} />
      <Flecha x1={78} y1={62} x2={128} y2={90} />
      <Caja x={130} y={12} w={86}>
        servicios
      </Caja>
      <Caja x={130} y={46} w={86}>
        investigación
      </Caja>
      <Caja x={130} y={80} w={86}>
        contacto
      </Caja>
      <text x={2} y={104} fontSize="7.5" fill="currentColor" opacity={0.45}>
        {titulo} · estructura y administración
      </text>
    </Lienzo>
  );
}
