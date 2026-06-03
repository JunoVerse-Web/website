"use client";

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { useLenis } from "lenis/react";

type CustomLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; // ← Important
};

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ children, className, target, rel, onClick, ...props }, ref) => {
    const lenis = useLenis();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Call the original onClick passed from parent (toggleMenu)
      onClick?.(e);

      // Your Lenis scroll behavior
      if (!target || target === "_self") {
        lenis?.scrollTo(0, { lerp: 1, duration: 0.6 }); // Better to scroll to top
      }
    };

    return (
      <Link
        ref={ref}
        className={clsx(className)}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        {...props}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }
);

CustomLink.displayName = "CustomLink";

export default CustomLink;