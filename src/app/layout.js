import { Maven_Pro } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Maven_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="lemonade" lang="en">
      <body className={inter.className}>
        <div className="min-h-screen garden:grainy">
          <Nav />
          {/* <div className="flex flex-col items-center justify-between p-24"> */}
            {children}
          {/* </div> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
