// this file serves as a wrapper for the pages
import "@/assets/styles/globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/Footer";

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
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
