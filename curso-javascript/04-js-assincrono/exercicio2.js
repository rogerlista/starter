const inputElement = document.querySelector("input[name=user]");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("ul");

const buscaRepo = function(user) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.github.com/users/${user}/repos`);
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Não foi possível fazer a requisição.");
        }
      }
    };
  });
};

const busca = function() {
  const user = inputElement.value;

  buscaRepo(user)
    .then(function(repos) {
      for (let repo of repos) {
        const repoElement = document.createElement("li");
        const textElement = document.createTextNode(repo.name);

        repoElement.appendChild(textElement);
        listElement.appendChild(repoElement);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};

buttonElement.setAttribute("onclick", "busca()");
