import { db } from "@/lib/db"

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {


    const list = ["gpt-4o-2024-05-13", "gpt-4-turbo-2024-04-09", "gpt-4-1106-preview", "gpt-4o", "gpt-4-turbo", "gpt-4-0125-preview", "gpt-4-turbo-preview", "gpt-3.5-turbo", "gpt-3.5-turbo-instruct", "gpt-3.5-turbo-instruct-0914", "gpt-3.5-turbo-16k", "gpt-3.5-turbo-0125", "gpt-3.5-turbo-1106", "gpt-4o-mini-2024-07-18", "gpt-4o-mini", "gpt-4-0613", "gpt-4"]
    // const models = await db.chatbotModel.createMany({
    //     data: list.map((item) => ({
    //         name: item,
    //     }))
    // })
    // return new Response(JSON.stringify(models ))
}