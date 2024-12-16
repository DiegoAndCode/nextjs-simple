'use client';

import Image from "next/image";
import { useState } from "react";

export default function Galeria() {
    const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null);

    const imagens: string[] = [
        "https://placehold.co/1920x1080/png?text=Foto+1",
        "https://placehold.co/1920x1080/png?text=Foto+2",
        "https://placehold.co/1920x1080/png?text=Foto+3",
        "https://placehold.co/1920x1080/png?text=Foto+4",
        "https://placehold.co/1920x1080/png?text=Foto+5",
        "https://placehold.co/1920x1080/png?text=Foto+6",
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">
                Galeria de Fotos
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {imagens.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={src}
                            alt={`Imagem ${index + 1}`}
                            width={640}
                            height={640}
                            className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => setImagemSelecionada(src)}
                        />
                    </div>
                ))}
            </div>
            {imagemSelecionada && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={() => setImagemSelecionada(null)}
                >
                    <div className="relative">
                        <Image
                            src={imagemSelecionada}
                            alt="Imagem em alta resolução"
                            width={800}
                            height={800}
                            className="rounded-lg"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-2xl"
                            onClick={() => setImagemSelecionada(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}