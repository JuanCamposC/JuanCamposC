import type { IconType } from "react-icons";
import {
  SiAngular,
  SiArduino,
  SiAstro,
  SiCss,
  SiDocker,
  SiEspressif,
  SiFastapi,
  SiHtml5,
  SiJavascript,
  SiMediapipe,
  SiMongodb,
  SiNestjs,
  SiOpencv,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
} from "react-icons/si";
import { HiOutlineCube } from "react-icons/hi2";

/** Íconos empaquetados localmente — sin peticiones a CDN externos en runtime. */
const ICONS: Record<string, IconType> = {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
  SiAngular,
  SiReact,
  SiNestjs,
  SiFastapi,
  SiAstro,
  SiTailwindcss,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiOpencv,
  SiMediapipe,
  SiArduino,
  SiEspressif,
  SiWordpress,
};

export default function TechIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const Icon = ICONS[icon] ?? HiOutlineCube;
  return <Icon className={className} aria-hidden />;
}
