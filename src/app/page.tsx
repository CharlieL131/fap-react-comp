"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  const rotas = {
    props: {
      chalange_1: "props-chalange-1",
      chalange_2: "props-chalange-2",
      chalange_3: "props-chalange-3",
      example: "props-example",
    },
  };

  const redirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href") ?? "";
    router.push(href);
  };

  return (
    <div style={{margin: "20px"}}>
      <h1>FAP - REACT COMPONENT EXERCISES</h1>
      <p>
        Lista de exercícios feitos em ReactJS + Next.js + TypeScript para
        praticar a criação e utilização de componentes
      </p>
      <br />
      <h3>PROPS</h3>
      <ul>
        <li><a href={rotas.props.example} onClick={redirect}>Exemplo</a></li>
        <li><a href={rotas.props.chalange_1} onClick={redirect}>Desafio 1</a></li>
        <li><a href={rotas.props.chalange_2} onClick={redirect}>Desafio 2</a></li>
        <li><a href={rotas.props.chalange_3} onClick={redirect}>Desafio 3</a></li>
      </ul>
    </div>
  );
}