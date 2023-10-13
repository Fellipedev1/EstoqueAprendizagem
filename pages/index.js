import React from "react";
import Link from "next/link";

const Index = () => (
  <div>
    <h1>Página Inicial</h1>
    <Link href="/home/home">
      <button>Ir para o menu de adicionar/remover estoque</button>
    </Link>
    <Link href="/find/find">
      <button>Ir para o menu de ver estoque</button>
    </Link>
  </div>
);

export default Index;
