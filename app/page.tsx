import { FC, ReactElement } from "react";
import Link from "next/link";

export const metadata = {
  title: "Himatif Uninus",
  description: "Himatif Uninus Official Website"
}

const Home: FC = (): ReactElement => {
  return (
    <section className="flex items-center">
      <h1 className="text-4xl text-blue-400">Test</h1>
      <Link href="/about">About</Link>
    </section>
  );
};

export default Home;
