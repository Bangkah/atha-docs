"use client";

import { trackCtaClick } from "./analytics";

type TrackedLinkProps = {
  href: string;
  label: string;
  location: string;
  className?: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
  rel?: string;
};

export default function TrackedLink({
  href,
  label,
  location,
  className,
  children,
  target = "_blank",
  rel = "noreferrer",
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => trackCtaClick({ label, location, href })}
    >
      {children}
    </a>
  );
}
