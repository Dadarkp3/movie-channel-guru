const service = new FilmeService();
const ano_entrada_input = document.querySelector("#ano");
const ator_entrada_input = document.querySelector("#atores");
const outros_entrada_input = document.querySelector("#outros");
const genero_entrada_input = document.querySelector("#genero");

const ano_output = document.querySelector("#response-ano");
const nome_output = document.querySelector("#movie-name");
const sinopse_output = document.querySelector("#response-sinopsis");
const genero_output = document.querySelector("#response-genero");
const img_output = document.querySelector("#no-image");



const div_busca = document.querySelector("#search");
const div_response = document.querySelector("#response");

$("#response").hide();

function pesquisar(event){
  
  event.preventDefault();
  const ano = ano_entrada_input.value || '';
  const atores = ator_entrada_input.value || '';
  const genero = genero_entrada_input.value || '';
  const titulo = outros_entrada_input.value || '';
  console.log(ano);
  console.log(atores);
  console.log(genero);
  console.log(titulo);
  
  service.buscaPorFiltro(2010, titulo, genero, atores)
  .then(filmes => {
    $("#atores-mostrar").empty();
    shuffleArray(filmes);
    let filme= filmes[0];
    ano_output.innerHTML = filme.ano;
    nome_output.innerHTML = filme.titulo;
    sinopse_output.innerHTML = filme.sinopse;
    let elements = $();
    filme.categorias.forEach(element => {
      elements = elements.add("<li>"+ element +"</li>");
    });
    $("#response-genero").append(elements);

    let elementos = $();
    filme.atores.forEach(element => {
      elementos = elementos.add("<li>"+ element +"</li>");
    });
    $("#atores-mostrar").append(elementos);
    genero_output.innerHTML= filme.categorias;
    ator_entrada_input.innerHTML = filme.atores;
    img_output.setAttribute("src", "https://leandrojsa.github.io/" + filme.imagem);

    $("#search").hide();
    $("#response").show();
    console.log(div_response);

    console.log(filmes);
  });

}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}



  function limparForm(){
    $("#search").show();
    $("#response").hide();
   
    ano_entrada_input.value = '';
    ator_entrada_input.value = '';
    outros_entrada_input.value = '';

    console.log(ano_entrada);

}