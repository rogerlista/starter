const minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users/rogerlista");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisição");
        }
      }
    };
  });
};

minhaPromise()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });
