import type { FC } from "react";

type ParagraphType = {
  children: string | React.ReactNode;
  className?: string;
};

const Paragraph: FC<ParagraphType> = ({ children, className = "" }) => {
  return (
    <p className={`font-sans mt-8 font-medium leading-8 ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
