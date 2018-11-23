class ConverteDivParaFilmeUtil {

  static converte(filmeDiv) {
    const id = parseInt(filmeDiv.getAttribute('id'));
    const titulo = filmeDiv.querySelector('h2').textContent;
    const imagem = filmeDiv.querySelector('img').getAttribute('src');
    const sinopse = filmeDiv.querySelector('.sinopsis').textContent;
    const ano = parseInt(filmeDiv.querySelectorAll('p')[0].querySelector('span span').textContent);
    const categorias = [];
    const autores = [];

    filmeDiv.querySelectorAll('.categories li')
      .forEach(categoriaLi => categorias.push(categoriaLi.textContent));

    filmeDiv.querySelectorAll('.actors li')
      .forEach(autorLi => autores.push(autorLi.textContent));

    return new Filme(id, imagem, titulo, ano, sinopse, categorias, autores);
  }

}
