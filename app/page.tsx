import { FC, ReactElement } from "react";
import Link from "next/link";

const Home: FC = (): ReactElement => {
  return (
    <section className="flex items-center">
      <h1 className="text-4xl text-blue-400">Test</h1>
      <Link href="/about">About</Link>
    </section>
  );
};

export default Home;
