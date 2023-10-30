import type { FC } from "react";

type PageTitle = {
  children: string;
};

const PageTitle: FC<PageTitle> = ({ children }) => {
  return <h1 className="text-5xl font-black">{children}</h1>;
};

export default PageTitle;
