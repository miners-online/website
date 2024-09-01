export const onRequest: PagesFunction = async (context) => {
    return new Response(JSON.stringify({ output: "Hello" }), {
        headers: { "Content-Type": "application/json" },
    });
}