import { redirect } from '@sveltejs/kit';

export function load({ url }) {
    const path = url.pathname;

    if (path == "/cv")
    {
        throw redirect(307, '/cv.pdf');
    }

    if (!path.startsWith('/en') && !path.startsWith('/hu'))
    {
        throw redirect(307, '/en'+path);
    }
}
