import { createSessionCookie } from '$lib/_utils';
import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({locals}) {
	try {
		if (!locals.user) {
			return json({user: null}, {status: 200})
		}

		const user = locals.user;
		const cookie = await createSessionCookie(user);

		return json(user, 
			{
				status: 200, 
				headers: {
					'cache-control': 'no-store',
					'set-cookie': cookie
				}
			}
		)
	} catch (err) {
		throw error(500, "Internal Server Error")
	}
}
