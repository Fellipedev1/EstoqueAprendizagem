import React from "react";
import Link from "next/link";

const Index = () => (
  <div className="grid grid-cols-1 gap-4 p-4">
    <h1 className="text-4xl font-bold text-center">Página Inicial</h1>
    <Link href="/home/home">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
        Ir para o menu de adicionar/remover item
      </button>
    </Link>
    <Link href="/find/find">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
        Ir para o menu de ver estoque
      </button>
    </Link>
  </div>
);

export default Index;
