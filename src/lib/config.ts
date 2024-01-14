import { dev } from '$app/environment';

export const title = 'Miners Online';
export const description = 'The official site for Miners Online';
export const url = dev ? 'http://localhost:5173/' : (
    process.env.SERVER_URL != undefined ? process.env.SERVER_URL : 'https://minersonline.uk/'
);
