//ALEATÓRIOS



function aleatorio(){
    let aposta=[]
    let select = document.getElementById("qual");
    let opcaoValor = select.options[select.selectedIndex].value;
    let ndezenas=Number(document.querySelector('#ndezenas').value);
    let x;
    let y;
    if(ndezenas===0){alert('Escolha o número de dezenas')};
    
    switch(opcaoValor){
        case 'nada': alert('Selecione o tipo de jogo');
        break;
        case 'amegasena': x=60; y='Mega-Sena'; if(ndezenas<6||ndezenas>15){return alert('Escolha de 6 a 15 dezenas')}; //6 a 15  1-60
        break;
        case 'aquina': x=80; y='Quina'; if(ndezenas<5||ndezenas>15){return alert('Escolha de 5 a 15 dezenas')}; // 5 a 15  1-80
        break;
        case 'aduplasena': x=50; y='Dupla-Sena'; if(ndezenas<6||ndezenas>15){return alert('Escolha de 6 a 15 dezenas')}; // 6 a 15  1-50 2x
        break;
        case 'alotofacil': x=25; y="Lotofácil"; if(ndezenas<15||ndezenas>20){return alert('Escolha de 15 a 20 dezenas')}; // 15 a 20 1-25
        break;
        case 'alotomania': x=100; y="Lotomanina"; if(ndezenas!==50){return alert('Escolha 50 dezenas')}; // 50  1 - 100
        break;
        case 'asupersete': x=9; y="Supersete"; if(ndezenas<7||ndezenas>21){return alert('Escolha de 7 a 21 dezenas')}; // 0-9 cada coluna; tem q escolher 7 a 21 numeros
        break;
        case 'atimemania': x=80; y="Timemania"; if(ndezenas!==10){return alert('Escolha de 10 dezenas')}; // 10 numeros e 1 time(80); 1-80
        break;
        case 'adiadesorte': x=31; y="Dia de sorte"; if(ndezenas<7||ndezenas>15){return alert('Escolha de 7 a 15 dezenas')}; // 7 a 15; 1-31
        break;

    }
    
    while(aposta.length<ndezenas){
        let outro=sorteio(x);
        if(aposta.indexOf(outro)===-1){
            aposta.push(outro);
        }
    }
    aposta=aposta.join('-');
    document.querySelector('#raposta').innerHTML= y + ":" + '<br>' +aposta;
}

function sorteio(x){
    return Math.floor(Math.random()*x+1);
}
