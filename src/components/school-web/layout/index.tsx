import { Login } from "../../../pages/login";
import { PropsWithChildren } from "react";
import Header from "../header";
import { Footer } from "../footer";
import { ThemeProvider } from "@/context/them-provider";

export const LayoutHomepage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <div> {children}</div>
      </ThemeProvider>
      <div className="bg-slate-400 pt-8">
        <Footer />
      </div>
    </div>
  );
};
