import Footer from "./components/Footer";
import Graph from "./components/Graph";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Graph>
          <div className="bg-gray-100 max-w-5xl mx-auto px-4">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Graph>
      </body>
    </html>
  );
}
