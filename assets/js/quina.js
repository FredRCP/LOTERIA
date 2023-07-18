let numeroscadastradosq=[];
let apostaquina=[];
let numerossorteadosq=[];
let tamanhoarrayq=0;
let iq =1;

//CADASTRAR NÚMEROS SORTEADOS
function cadastrarsorteadosquina(){
    alert('Digite as dezenas sem espaços entre elas. Os números de 1 a 9 devem ser precedidos pelo algorismo 0! Exemplo 01, 02...');
    let n=(prompt('Quais as dezenas sorteadas?'));
    if(n.length!==10||n===''){return alert('Atençaõ, são 05 as dezenas sorteadas')}
    while(numerossorteadosq.length<5){        
       for(j=0; j<10; j+=2){
            let digito= n[j] + n[j+1];
            digito= Number(digito);
            numerossorteadosq.push(digito);
       }
    }  
    //console.log(numerossorteadosq);
}

//SELECIONAR DEZENAS DAS APOSTAS
document.addEventListener('click', (e)=>{
    const el= e.target;
    
    if(el.classList.contains('btnq')){
        if(el.classList.contains('marcadoq')){el.classList.remove('marcadoq');
        let numeroaremover= apostaquina.indexOf(Number(el.textContent));
        apostaquina.splice(numeroaremover, 1)
    }
        else{el.classList.add('marcadoq');
        while(apostaquina.indexOf(Number(el.textContent))===-1){
        apostaquina.push(Number(el.textContent));}
       
    }
  
    }
    
})

function cadastrarapostaquina(){
    if(apostaquina.length<5){return alert('Sua aposta deve conter no mínimo 5 dezenas.')}
    if(apostaquina.length>15){return alert('Sua aposta deve conter no máximo 15 dezenas.')}
    
    
    //alert('Sua aposta foi cadastrada.')
    console.log(apostaquina);
    numeroscadastradosq.push(apostaquina);
    console.log(numeroscadastradosq);
    
    const botoes=document.querySelectorAll('.marcadoq');
    botoes.forEach(button => {
            if(button.classList.contains('marcadoq')){
            button.classList.remove('marcadoq');
            apostaquina=[];
        }
    });
    
}


//VERIFICAR RESULTADOS

function verificarq(){
    if(numeroscadastradosq.length<1){return alert("Primeiro cadastre suas apostas")}
    if(numerossorteadosq.length!==5){return alert
    ("Antes de verificar o resultado você deve cadastrar as 5 dezenas sorteadas!")}
    document.querySelector('#outputq').innerHTML="";
    const tabelaq =document.querySelector('#quina');
    const trevoq= document.querySelector('.trevoq');
    tabelaq.style.display='none';
    trevoq.style.display='block'; 
    

    for(k=0; k<numeroscadastradosq.length; k++){
        let acertos=[];
        for(l=0; l<numeroscadastradosq[k].length; l++){

            if(numerossorteadosq.indexOf(numeroscadastradosq[k][l])!==-1){
                acertos.push(numeroscadastradosq[k][l]);
            }
        }   
        
        let resultado="";
            if(acertos.length===0){resultado="Aposta " +(k+1) +": " +"Você não acertou nenhuma dezena" + "!" + " Que pena, não foi dessa vez!" +"<hr>"}
            if(acertos.length===1){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezena!" + " Que pena, não foi dessa vez!" +"<hr>"}
            if(acertos.length===2){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezenas!" + " Parabéns,você acertou 2 dezenas! O prêmio é discreto, mas já é alguma coisa." +"<hr>"}  
            if(acertos.length===3){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezenas!" + " Parabéns, você acertou 3 dezenas!" +"<hr>"}
            if(acertos.length===4){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezenas!"+" Parabéns, você acertou a quadra!" +"<hr>"}
            if(acertos.length===5){resultado="Aposta " +(k+1) +": " +"Você acertou " + acertos.length + " dezenas!"+" Parabéns, você acertou a quina, ganhou o grande prêmio!" +"<hr>"}
            
        document.querySelector('#outputq').innerHTML+=resultado;

    } 
}

function marcarq(){
    const tabelaq =document.querySelector('#quina');
    const trevoq= document.querySelector('.trevoq');
    tabelaq.style.display='block';
    trevoq.style.display='none';

}

function quinar(){
    window.open('https://loterias.caixa.gov.br/Paginas/Quina.aspx', '_target');
}

/*
function resetar(){
    numeroscadastradosq=[];
    numerossorteadosq=[];
    tamanhoarrayq=0;
    iq =1;   
    const tabelaq =document.querySelector('#quina');
    const trevoq= document.querySelector('.trevoq');
    tabelaq.style.display='none';
    trevoq.style.display='block';   
    //document.querySelector('#output').innerHTML="";
    document.querySelector('#outputq').innerHTML="";

}*/

function resetar(){
    document.location.reload();
}
