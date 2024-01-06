import { PropsWithChildren } from "react";
import { NavBar } from "../components/NavBar";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <div className="min-h-full min-w-ful">{children}</div>
    </>
  );
};
