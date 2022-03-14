const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('sevilgenysf');

async function getUser(username) {
	const resp = await fetch(APIURL + username);
	const respData = await resp.json();

	createUserCard(respData);

	getRepos(username);
}

async function getRepos(username) {
	const resp = await fetch(APIURL + username + '/repositories');
	const respData = await resp.json();

	addReposToCard(respData);
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
					<li>${user.following} <strong>Following</strong></li>
					<li>${user.public_repos} <strong>Repos</strong></li>
				</ul>

				<ul class="repos" id="repos"> </ul>
			</div>
		</div>
	`;

	main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
	const reposEl = document.getElementById('repos');

	console.log(repos);
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user);

		search.value = '';
	}
});
