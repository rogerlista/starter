function checaIdade(idade) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return idade >= 18 ? resolve() : reject();
    }, 2000);
  });
}

checaIdade(20)
  .then(maior)
  .catch(menor);

checaIdade(15)
  .then(maior)
  .catch(menor);

function maior() {
  console.log("Maior de 18 anos.");
}

function menor() {
  console.log("Menor de 18 anos.");
}
