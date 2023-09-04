import { redirect } from "next/navigation";

export const getServerStatus = async () => {
    await fetch(process.env.API_URL as string).catch((err) => {
        redirect('/ServerError')
    })
}