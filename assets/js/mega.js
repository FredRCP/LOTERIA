let numeroscadastrados=[[2,3,11,17,24,30,33,49,55,58]];
let numerossorteados=[];
let tamanhoarray=0;
let i =1;

//CADASTRAR APOSTAS
function cadastrarmega(){
    let n=Number(prompt('Qual o número de apostas?'));
    alert('Digite as dezenas sem espaços entre elas. Os números de 1 a 9 devem ser precedidos pelo algorismo 0! Exemplo 01, 02...');
    if(isNaN(n)){alert('Digite exclusivamente números!')}
    while(numeroscadastrados.length<(n+tamanhoarray)){
       let aposta= prompt('Digite os números da aposta ' + i);
       if(isNaN(aposta)){return alert('Digite exclusivamente números!')}
       if((aposta.length)%2!==0){return alert("Você cadastrou uma aposta incorreta! Confira os números e tente novamente.")}
       let apostaarray=[];
       for(j=0; j<aposta.length; j+=2){
            let digito= aposta[j] + aposta[j+1];
            digito= Number(digito);
            apostaarray.push(digito);
       }
       numeroscadastrados.push(apostaarray);
       i++;
    }
    tamanhoarray=numeroscadastrados.length;
    //console.log(numeroscadastrados);
}

//SELECIONAR DEZENAS SORTEADAS
document.addEventListener('click', (e)=>{
    const el= e.target;

    if(el.classList.contains('btn')){
        if(el.classList.contains('marcado')){el.classList.remove('marcado');
        let numeroaremover= numerossorteados.indexOf(Number(el.textContent));
        numerossorteados.splice(numeroaremover, 1)
    }
        else{el.classList.add('marcado');
        while(numerossorteados.indexOf(Number(el.textContent))===-1){
        numerossorteados.push(Number(el.textContent));}
    }
    }
    //console.log(numerossorteados);
})

//VERIFICAR RESULTADOS

function verificar(){
    if(numeroscadastrados.length===0){return alert("Primeiro cadastre suas apostas")}
    if(numerossorteados.length!==6){return alert
    ("Antes de verificar o resultado você deve selecionar as 6 dezenas sorteadas!")}
    document.querySelector('#output').innerHTML="";
    const tabela =document.querySelector('#sena');
    const trevos= document.querySelector('.trevos');
    tabela.style.display='none';
    trevos.style.display='block'; 
    

    for(k=0; k<numeroscadastrados.length; k++){
        let acertos=[];
        for(l=0; l<numeroscadastrados[k].length; l++){

            if(numerossorteados.indexOf(numeroscadastrados[k][l])!==-1){
                acertos.push(numeroscadastrados[k][l]);
            }
        }   
        
        let resultado="";
            if(acertos.length===0){resultado="Aposta " +(k+1) +": " +"Você não acertou nenhuma dezena" + "!" + " Que pena, não foi dessa vez!" +"<hr>"}
            if(acertos.length===1){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezena!" + " Que pena, não foi dessa vez!" +"<hr>"}
            if(acertos.length===2){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezenas!" + " Que pena, não foi dessa vez!" +"<hr>"}  
            if(acertos.length===3){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezenas!" + " Que pena, foi por pouco!" +"<hr>"}
            if(acertos.length===4){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezenas!"+" Parabéns, você acertou a quadra!" +"<hr>"}
            if(acertos.length===5){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezenas!"+" Parabéns, você acertou a quina!" +"<hr>"}
            if(acertos.length===6){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezenas!"+" Parabéns, você acertou a sena, está milionário!!" +"<hr>"}

        document.querySelector('#output').innerHTML+=resultado;

    } 
}

function marcar(){
    const tabela =document.querySelector('#sena');
    const trevos= document.querySelector('.trevos');
    if(tabela!=null){tabela.style.display='block'};
    if(trevos!=null){trevos.style.display='none'};

}

function megar(){
    window.open('https://loterias.caixa.gov.br/Paginas/Mega-Sena.aspx', '_target');
}

/*function resetar(){
    numeroscadastrados=[];
    numerossorteados=[];
    tamanhoarray=0;
    i =1;   
    const tabela =document.querySelector('#sena');
    const trevos= document.querySelector('.trevos');
    if(tabela!=null){tabela.style.display='block'};
    if(trevos!=null){trevos.style.display='none'};
    if(document.querySelector("#output")!=null){  
    document.querySelector('#output').innerHTML="";}} */

    
function resetar(){
    document.location.reload();
}
