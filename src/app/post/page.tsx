import PostList from "@/components/post-list";
import Link from "next/link";
import { Suspense } from "react";


export default async function Page() {



    return (
        <main className="text-center pt-32 px-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Todos los artículos
            </h1>
            <Suspense fallback="Cargando...">
                <PostList/>
            </Suspense>

        </main>
    )
}

