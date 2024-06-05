"use client"

import { createPost } from "@/actions/actions";

export default function Form() {

    const handleSubmit = (event: any) => {
        const form = event.target;
        const body = form.body.value;

        if (body !== "esto es una prueba") {
            alert("El contenido del artículo debe ser 'esto es una prueba'");
            event.preventDefault();
            return;
        }
    }

    return (
        <div>
            <form action={createPost} className="flex flex-col max-w-[500px] mx-auto my-10 gap-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    className="border rounded px-3 h-10"
                    required
                    pattern="test\d+"
                    title="El título debe comenzar con 'test' seguido de números" 
                />
                <textarea 
                    name="body"
                    placeholder="Contenido del nuevo artículo"
                    className="border rounded px-3 py-2"
                    rows={6}
                    required 
                />
                <button className="h-10 rounded px-5 bg-zinc-900 text-white">Enviar</button>
            </form>
        </div>
    )
}
