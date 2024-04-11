
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" /> 
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script> */}
      </body>
    </html>
  );
}
