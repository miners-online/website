import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { collectionNames, type CollectionName } from '../../../../content/config'

export async function getStaticPaths() {
    return collectionNames.map(entry => ({
        params: { collection: entry }, props: { entry },
    }));
}


export const GET: APIRoute = async ({ params, request }) => {
    const wiki = await getCollection(params.collection as CollectionName);

    const res: string[] = []

    for (const entry in wiki) {
        res.push(wiki[entry].slug || wiki[entry].id)
    }

    const resp = new Response(
        JSON.stringify({
            result: res
        })
    )

    resp.headers.append("Content-Type", "application/json")

    return resp
}