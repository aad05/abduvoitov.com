"use client";
import Link from "next/link";
import type { ElementType, FC } from "react";

interface LinkType<E extends ElementType = ElementType> {
  children: string;
  className?: string;
  href: string;
  target?: "_blank" | "_self" | "_blank" | "_top";
  as?: E;
}

const Anchor: FC<LinkType> = ({
  children,
  className = "",
  href,
  target = "_blank",
}) => {
  return (
    <Link href={href} target={target}>
      {children}
    </Link>
  );
};

export default Anchor;
