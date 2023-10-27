import { FC } from "react";
import { Provider } from "react-redux";
import store from "../redux";
import { ThemeProvider } from "./theme-provider";

interface PorivderConfType {
  children: React.ReactNode;
}

const ProviderConf: FC<PorivderConfType> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default ProviderConf;
