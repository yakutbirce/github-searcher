export class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
    this.repoArea = document.querySelector('#repos');
    this.alertArea = document.querySelector('#alert-area');
  }

  // Render of profile interface
  renderProfile(data) {
    console.log(data);
    this.profile.innerHTML = `
      <div class="row border p-4 my-4">
          <div class="col-md-3">
            <img class="img-fluid rounded shadow" src="${data.avatar_url}" />
            <a target="_blank" class="btn btn-primary my-4 w-100" href="${data.html_url}">Show the profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary mt-1 fs-6">Repositories: ${data.public_repos}</span>
            <span class="badge bg-secondary mt-1 fs-6">Gists:${data.public_gists}</span>
            <span class="badge bg-success mt-1 fs-6">Followers: ${data.followers}</span>
            <span class="badge bg-info mt-1 fs-6">Following: ${data.following}</span>
  
            <ul class="list-group mt-5">
              <li class="list-group-item">About: ${data.bio}</li>
              <li class="list-group-item">Company: ${data.company}</li>
              <li class="list-group-item">Website: ${data.blog}</li>
              <li class="list-group-item">Location: ${data.location}</li>
              <li class="list-group-item">Account Creation Date: ${data.created_at}</li>
            </ul>
          </div>
        </div>
      `;
  }

  renderProjects(data) {
    this.repoArea.innerHTML = '';

    // Create cards and send it
    data.forEach((repo) => {
      this.repoArea.innerHTML += `
       <div class="border row p-3 mb-4 align-items-center">
          <div class="col-6">
            <a target="_blank" href="${repo.html_url}">${repo.name}</a>
          </div>
          <div class="col-6">
            <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge bg-success">Forks: ${repo.forks_count}</span>
          </div>
        </div>
          `;
    });
  }

  // Notifications
  showAlert(message, classname) {
    const div = document.createElement('div');

    div.innerText = message;

    div.classList.add('alert');

    div.classList.add(classname);

    this.alertArea.innerHTML = '';

    this.alertArea.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}