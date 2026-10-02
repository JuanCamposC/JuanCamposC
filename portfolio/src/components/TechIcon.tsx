import type { IconType } from "react-icons";
import {
  SiAngular,
  SiArduino,
  SiAstro,
  SiCloudflare,
  SiCss,
  SiDocker,
  SiEspressif,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMediapipe,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiOpencv,
  SiPhp,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWordpress,
} from "react-icons/si";
// Simple Icons no incluye el logo de AWS (lo retiró por marca registrada),
// así que ese único ícono viene de Font Awesome.
import { FaAws } from "react-icons/fa6";
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
  SiLaravel,
  SiReact,
  SiNestjs,
  SiFastapi,
  SiAstro,
  SiTailwindcss,
  SiVite,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiCloudflare,
  SiVercel,
  FaAws,
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
