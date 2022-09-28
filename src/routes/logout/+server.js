import { magic } from '$lib/_magic';
import { removeSessionCookie } from '$lib/_utils';

import { error, json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
	try {
		if (!event.locals['user']) {
			throw error(401, 'Unauthorized')
		}

		const cookie = removeSessionCookie();

		try {
			await magic.users.logoutByIssuer(event.locals.user.issuer);
		} catch (err) {
			console.log('Magic session already expired');
		}

		return json({user: 'logedout'}, {
			headers: {
				'set-cookie': cookie,
				'cache-control': 'no-store'
			}
		})
	} catch (err) {
		throw error(401, 'Unauthorized')
	}
}
