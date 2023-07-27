

document.addEventListener('click', e=>{
    const el= e.target;
    const tag= el.tagName.toLowerCase();

    if(tag==='a'){
        e.preventDefault();
        carregapagina(el);
    }
});

async function carregapagina(el){

    try{
        const href= el.getAttribute('href');
        const response= await fetch(href);

        if(response.status!==200) throw new Error('ERRO 404');

        const html= await response.text();
        carregar(html);  

    } catch(e){console.log(e)};


          
    }

function carregar(response){
    const resultado= document.querySelector('.resultado');
    resultado.innerHTML= response;
}


function resetar(){
    document.location.reload();
}

function apostar(){
    window.open('https://www.loteriasonline.caixa.gov.br/silce-web/?utm_source=site_loterias&utm_medium=cross&utm_campaign=loteriasonline&utm_term=timemania#/termos-de-uso', '_target');
}


//POPUP

const diadasemana= new Date().getDay();

if(diadasemana===3){document.querySelector('#popup').innerHTML="Hoje é Quarta-feira, dia de sorteio da mega!"}
if(diadasemana===6){document.querySelector('#popup').innerHTML="Hoje é Sábado, dia de sorteio da mega!"}

function geraraposta(){
    alert('Em construção!');
}

/*ALEATÓRIOS

function geraraposta(){
    const aposta=[]
    const numerosorteado=sorteio();
}

function sorteio(y){
    return Math.floor(Math.random()*y+1);
}

*/

