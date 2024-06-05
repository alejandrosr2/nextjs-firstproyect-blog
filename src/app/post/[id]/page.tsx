import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { Suspense } from "react";


export default async function Page({params}: {
    params: { id: string}
}) {

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id)
        }
    });

    if (!post) {
        notFound();
    }

    return (
        <main className="px-7 pt-24 text-center">
            <Suspense fallback="Cargando artículo...">
                <h1 className="text-5xl font-bold pb-5">{post.title}</h1>
                <p className="max-w-[700px] mx-auto">{post.body}</p>
            </Suspense>
        </main>
    )
}
