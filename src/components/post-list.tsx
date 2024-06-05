import prisma from "@/lib/db";
import Link from "next/link";


export default async function PostList() {

    const posts = await prisma.post.findMany();

    return (
        <div>
            <ul>
            {
                posts.map((post: any) => (
                    <li key={post.id} className="mb-5">
                        <Link href={`/post/${post.id}`} className="hover:font-bold">{post.title}</Link>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}
