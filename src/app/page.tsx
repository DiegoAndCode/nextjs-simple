import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">
            Minha simples aplicação Next.js
        </h1>
        <p className="text-xl text-gray-700">Escolha uma dos links no menu.</p>
    </div>
  );
}
