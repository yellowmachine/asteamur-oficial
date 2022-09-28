import { store as authStore } from '$lib/auth';

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    console.log('(1)')
    const res = await fetch('/user');
    console.log('(2)', res)
    const json = await res.json();
    console.log('(3)')
    const { user } = json;

    authStore.set({
        loading: false,
        user
    });

    return {
        status: 200
        // stuff: {
        // 	user
        // }
    };
}
