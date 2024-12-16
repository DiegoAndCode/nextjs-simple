import gradientes from "../../data/gradientes.json";

const cores = gradientes as { [cor: string]: { from: string; to: string } };

export default async function Page({ params }: { params: { cor: string } }) {
    const { cor } = await params;
    const gradiente = cores[cor];

    if (!gradiente) {
        return <div>Cor não encontrada</div>;
    }

    return (
        <div
            className={`flex flex-col items-center justify-center h-screen bg-gradient-to-r ${gradiente.from} ${gradiente.to}`}
        >
            <h1 className="text-5xl font-bold capitalize text-white">
                Página <span className="first-letter:uppercase">{cor}</span>
            </h1>
        </div>
    );
}