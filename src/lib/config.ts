import { dev } from '$app/environment';
// @ts-ignore TODO: fix typing
import { PUBLIC_SERVER_URL } from '$env/static/public';

export const title = 'Miners Online';
export const description = 'The official site for Miners Online';
export const url = dev ? 'http://localhost:5173/' : (
    PUBLIC_SERVER_URL != undefined ? PUBLIC_SERVER_URL : 'https://minersonline.uk/'
);
