"use client";
import "./globals.css";
import { FC, PropsWithChildren, ReactElement } from "react";
import { Navbar } from "@/components";
import { Poppins } from "next/font/google";
import { AuthProvider, QueryProvider, RecoilProvider } from "@/libs";

const inter = Poppins({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="en">
      <head>
        <title>Himatif Uninus</title>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <RecoilProvider>
              <Navbar />
              {children}
            </RecoilProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
