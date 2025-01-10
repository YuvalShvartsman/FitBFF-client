import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex w-full h-screen justify-center dark:bg-dark">
      {children}
    </div>
  );
}

export default Layout;
