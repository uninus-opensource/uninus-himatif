import { FC, PropsWithChildren, ReactElement } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Himatif",
  description: "Himatif web official",
};

const RootLayout: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
