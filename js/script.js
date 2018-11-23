function pesquisar(){
 
    let xmlhttp = new XMLHttpRequest();
    let url = "https://leandrojsa.github.io/movies.html";
    let entrada_ano = document.querySelector("#ano").value;
    let entrada_atores = document.querySelector("#atores").value;
    let entrada_info = document.querySelector("#outros").value;

    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let responseText = this.responseText;

            const parser = new DOMParser();

            const xmlDoc= parser.parseFromString(responseText, 'text/html');
            if(xmlDoc){

            }
        }
    }
}
