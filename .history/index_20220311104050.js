const APIURL = 'https://api.github.com/users/';

async function getUser(user) {
	const resp = await fetch(APIURL + user);
	console.log(resp);
	const respData = await resp.json();

	createUserCard(respData);
}

getUser(sevilgenysf);

function createUserCard(user) {}