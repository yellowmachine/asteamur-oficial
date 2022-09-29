import { magic } from '$lib/_magic';
import { createSessionCookie } from '$lib/_utils';
//import { QUERY_USER_ROLE_BY_EMAIL } from '$lib/role'

import { error, json } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */
export async function POST({request, locals}) {
	try {
		const didToken = magic.utils.parseAuthorizationHeader(request.headers.get('authorization'));
		await magic.token.validate(didToken);
		const metadata = await magic.users.getMetadataByToken(didToken);

		//const scopedClient = locals.scopedClient;

		/*const {role, active} = await scopedClient.queryRequiredSingle(QUERY_USER_ROLE_BY_EMAIL,
			{email: metadata.email}
		)

		if(!active){
			throw error(403, 'El usuario no esta activo')
		}

		const user = {...metadata, role}
		*/
		const user = {...metadata, role: 'ADMIN'}

		const cookie = await createSessionCookie(user);

		return json({user}, {
			headers: {
				'set-cookie': cookie
			}
		})

	} catch (err) {
		console.log(err);
		throw error(500, 'Internal Server Error')
	}
}
