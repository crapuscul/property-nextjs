// this file serves as a wrapper for the pages
import "@/assets/styles/globals.css";
import NavBar from "@/components/navbar";

export const metadata = {
  title: "Property Pro",
  keywords: "rental, property, real-estate,",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
