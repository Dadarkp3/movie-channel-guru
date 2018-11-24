class FilmeService {

  constructor() {
    this._API_URL = 'https://leandrojsa.github.io/movies.html';
  }

  buscaTodos() {
    const filmes = [];
    return fetch(this._API_URL)
      .then(res => {
        if(!res.ok) {
          throw new Error('Erro ao processar a requisição');
        }
        return res.text();
      })
      .then(xmlString => {
        const html = new DOMParser().parseFromString(xmlString, 'text/html');
        const filmeDivs = html.querySelectorAll('.movie');
        
        filmeDivs.forEach(filmeDiv => 
          filmes.push(ConverteDivParaFilmeUtil.converte(filmeDiv)));

        return filmes;
      });
  }

  buscaPorFiltro(ano, titulo, genero, ator) {
    return this.buscaTodos()
      .then(filmes => {
        if(!ano) return filmes;

        return filmes.filter(filme => filme.ano == ano);
      })
      .then(filmes => {
        if(!titulo) return filmes;

        return filmes.filter(filme => 
          filme.titulo.toLowerCase().includes(titulo.toLowerCase()))
      })
      .then(filmes => {
        if(!genero) return filmes;

        return filmes.filter(filme => 
          filme.categorias.some(categoria => 
            categoria.toLowerCase().includes(genero.toLowerCase())))
      })
      .then(filmes => {
        if(!ator) return filmes;

        return filmes.filter(filme => 
          filme.atores.some(a => 
            a.toLowerCase().includes(ator.toLowerCase())))
      });
  }

}

