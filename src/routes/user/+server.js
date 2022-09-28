//import { createSessionCookie } from '$lib/_utils';

import { error, json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	console.log('llego')
	return json({user: {name: 'miguel'}})
  	//return new Response({user: {name: 'miguel'}});
}

export async function yyyy({locals}) {
	console.log('********************************voy a devolver user miguel')
	return {
		status: 200,
		body: {
			user: {name: 'miguel'}
		}		
	}
	try {
		if (!locals.user) {
			return {
				status: 200,
				body: {
					user: null
				}
			};
		}

		const user = locals.user;
		const cookie = await createSessionCookie(user);

		return {
			status: 200,
			headers: {
				'cache-control': 'no-store',
				'set-cookie': cookie
			},
			body: {
				user
			}
		};
	} catch (err) {
		console.log('***', err)
		return {
			status: 500,
			body: {
				error: {
					message: 'Internal Server Error + ;)'
				}
			}
		};
	}
}
