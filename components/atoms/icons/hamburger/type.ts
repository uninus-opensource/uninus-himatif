import { MouseEventHandler } from "react";

export type THamburgerProps = {
  className?: string;
  onClick?: MouseEventHandler<SVGElement>;
  open?: boolean;
};
