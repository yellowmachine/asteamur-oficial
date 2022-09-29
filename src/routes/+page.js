import { store as authStore } from '$lib/auth';

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    const res = await fetch('/user');
    const json = await res.json();
    const { user } = json;

    authStore.set({
        loading: false,
        user
    });

    return {
        status: 200
    };
}
