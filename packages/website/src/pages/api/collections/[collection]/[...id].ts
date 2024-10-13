import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { collectionNames, type CollectionName } from '../../../../content/config'

export async function getStaticPaths() {
    let paths = []
    // const wikiEntries = await getCollection('wiki');
    // return wikiEntries.map(entry => ({
    //     params: { id: entry.slug }, props: { entry },
    // }));

    for (const ci in collectionNames) {
        const collection = collectionNames[ci]
        const entries = await getCollection(collection)
        for (const cei in entries) {
            const entry = entries[cei];
            paths.push({
                params: {
                    collection: collection,
                    id: entry.slug || entry.id
                }, props: { entry },
            })
        }
    }

    return paths
}

export const GET: APIRoute = async ({ params, request }) => {
    const wiki = await getCollection(params.collection as CollectionName);

    const res: object[] = []

    for (const entry in wiki) {
        if (wiki[entry].slug || wiki[entry].id == params.id) {
            res.push(wiki[entry])
        }
    }

    const resp = new Response(
        JSON.stringify({
            result: res
        })
    )

    resp.headers.append("Content-Type", "application/json")

    return resp
}