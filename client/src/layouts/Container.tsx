import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="pt-[72px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
