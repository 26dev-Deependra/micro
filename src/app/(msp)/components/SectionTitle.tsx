import React from "react";
import { Container } from "./Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        <div className="text-lg font-bold tracking-wider text-green-700 uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-green-700 lg:leading-tight lg:text-4xl dark:text-green-700">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-5xl py-4 text-md leading-normal text-gray-700 lg:text-md xl:text-md dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
};
