const service = new FilmeService();
  
/* service.buscaPorFiltro('', '', 'ação', 'norman')
  .then(filmes => {
    console.log(filmes);
  });
 */

  function limparForm(){

    let ano_entrada = document.getElementById("ano");
    let ator_entrada = document.getElementById("ator");
    let outros_entrada = document.getElementById("outros");

    ano_entrada.value = '';
    ator_entrada.value = '';
    outros_entrada.value = '';

    console.log(ano_entrada);

}