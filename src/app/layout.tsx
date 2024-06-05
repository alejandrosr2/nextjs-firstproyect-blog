import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomBackground from "@/components/CustomBg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  text-zinc-900`}>
        <CustomBackground/>
        <div className="max-w-[80%] md:max-w-[60%] mx-auto bg-white rounded-xl my-2 bg-opacity-85">
          <Header/>
        </div>
        <Container>
            {children}
        </Container>
        <div className="max-w-[80%] md:max-w-[60%] mx-auto bg-white rounded-xl my-2 bg-opacity-85">
          <Footer/>  
        </div>
      </body>
    </html>
  );
}
