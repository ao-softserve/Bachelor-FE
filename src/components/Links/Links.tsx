import React from "react";
import { LinkHorizontalStep } from "@vx/shape";

interface ILinksProps {
  links: any[];
}

export const Links: React.FC<ILinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link, linkIndex) => (
        <LinkHorizontalStep
          data={link}
          key={`link-${linkIndex}`}
          stroke="#484848"
          strokeWidth="2"
          fill="none"
          percent={1}
        ></LinkHorizontalStep>
      ))}
    </>
  );
};
