const APIURL = 'https://api.github.com/users/';

async function getUser(user) {
	const resp = await fetch(APIURL + user);
	const respData = await resp.json();

	createUserCard(respData);
}

function createUserCard(user) {
	const cardHTML = `
		<div class="card">
			<div>
				<img src="${user.avatar_url} alt="${user.name} />""
			</div>
		</div>
	
	`;
}
