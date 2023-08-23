
import Post from "@/app/models/Post"
import connect from "@/app/utils/db"
import { NextResponse } from "next/server"

export const GET = async ({ params }) => {
    try {
        await connect()
        const posts = await Post.findById(params?.id)
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse("Database error", { status: 500 })
    }
}