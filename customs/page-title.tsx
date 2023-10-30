import type { FC } from "react";

type PageTitle = {
  children: string;
  className?: string;
};

const PageTitle: FC<PageTitle> = ({ children, className }) => {
  return <h1 className={`text-5xl font-black ${className}`}>{children}</h1>;
};

export default PageTitle;
