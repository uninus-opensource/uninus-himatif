"use client";
import { Navbar } from "@/components";
import { FC, Fragment, ReactElement } from "react";

const About: FC = (): ReactElement => {
  return (
    <Fragment>
      <Navbar />
      <section>
        <h1>Ini About</h1>
      </section>
    </Fragment>
  );
};

export default About;
