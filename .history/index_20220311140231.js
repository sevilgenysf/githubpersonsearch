const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('sevilgenysf');

async function getUser(username) {
	const resp = await fetch(APIURL + username);
	const respData = await resp.json();

	createUserCard(respData);
}

function createUserCard(user) {
	const cardHTML = `
		<div class="card">
			<div>
				<img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
			</div>
			<div class="user-info">
				<h2>${user.name}</h2>
				<p>${user.bio}</p>

				<ul class="info">
					<li>${user.followers} <strong>Followers</strong></li>
					<li><strong>Following</strong>${user.following}</li>
					<li><strong>Repos</strong>${user.public_repos}</li>
				</ul>
			</div>
		</div>
	
	`;

	main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user);

		search.value = '';
	}
});
