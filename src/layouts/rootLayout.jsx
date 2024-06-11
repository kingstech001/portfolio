import { Outlet } from "react-router-dom";
import Header from "../components/header";

const RootLayout = () => {
  

  
  return (
    <div className="  h-screen ">
      <Header />
      <main className="bg-hero-pattern bg-center bg-cover bg-no-repea bg-fixed">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
