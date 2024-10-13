import type { APIRoute } from 'astro';
import { collectionNames } from '../../../content/config'

export const GET: APIRoute = async ({ params, request }) => {
    const resp = new Response(
        JSON.stringify({
            result: collectionNames
        })
    )

    resp.headers.append("Content-Type", "application/json")

    return resp
}