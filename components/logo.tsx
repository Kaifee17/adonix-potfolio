import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function Logo({ locale }: { locale: Locale }) {
  return <Link href={`/${locale}`} className="logo" aria-label="Adonix Digital"><Image src="/logo.svg" alt="Adonix" width={205} height={78} priority /></Link>;
}
