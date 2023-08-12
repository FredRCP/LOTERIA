//ALEATÓRIOS

function aleatorio(){
    let aposta=[]
    let select = document.getElementById("qual");
    let opcaoValor = select.options[select.selectedIndex].value;
    let ndezenas=Number(document.querySelector('#ndezenas').value);
    let x;
    let y;
    if(ndezenas===0){ return alert('Escolha o número de dezenas')};
    
    switch(opcaoValor){
        case 'nada': return alert('Selecione o tipo de jogo');
        break;
        case 'amegasena': x=60; y='Mega-Sena'; if(ndezenas<6||ndezenas>15){return alert('Escolha de 6 a 15 dezenas')}; //6 a 15  1-60
        break;
        case 'aquina': x=80; y='Quina'; if(ndezenas<5||ndezenas>15){return alert('Escolha de 5 a 15 dezenas')}; // 5 a 15  1-80
        break;
        case 'aduplasena': x=50; y='Dupla-Sena'; if(ndezenas<6||ndezenas>15){return alert('Escolha de 6 a 15 dezenas')}; // 6 a 15  1-50 2x
        break;
        case 'alotofacil': x=25; y="Lotofácil"; if(ndezenas<15||ndezenas>20){return alert('Escolha de 15 a 20 dezenas')}; // 15 a 20 1-25
        break;
        case 'alotomania': x=100; y="Lotomania"; if(ndezenas!==50){return alert('Escolha 50 dezenas')}; // 50  1 - 100
        break;
        case 'asupersete': x=10; y="Supersete"; if(ndezenas<7||ndezenas>21){return alert('Escolha de 7 a 21 dezenas')}; // 0-9 cada coluna; tem q escolher 7 a 21 numeros
        break;
        case 'atimemania': x=80; y="Timemania"; if(ndezenas!==10){return alert('Escolha de 10 dezenas')}; // 10 numeros e 1 time(80); 1-80
        break;
        case 'adiadesorte': x=31; y="Dia de sorte"; if(ndezenas<7||ndezenas>15){return alert('Escolha de 7 a 15 dezenas')}; // 7 a 15; 1-31
        break;
        default: return;

    }

    if(opcaoValor==="aduplasena"){
        let aposta1=[];
        let aposta2=[];
        while(aposta1.length<ndezenas){
            let outro1=sorteio(x);
            if(aposta1.indexOf(outro1)===-1){
                aposta1.push(outro1);
            }
        }
        aposta1.sort((a, b)=>a-b);
        aposta1=aposta1.join(' - ');
        
        while(aposta2.length<ndezenas){
            let outro2=sorteio(x);
            if(aposta2.indexOf(outro2)===-1){
                aposta2.push(outro2);
            }
        }
        aposta2.sort((a, b)=>a-b);
        aposta2=aposta2.join(' - ');
        document.querySelector('#raposta').innerHTML= y + '<br>'+ '<br>' + "Aposta número 1" + '<br>'  + aposta1 + "<hr>" + "Aposta número 2" + '<br>'  + aposta2;
    }

    
    else if(opcaoValor==="asupersete"){
        let porcolunasmax;
        let coluna="";
        let coluna1=[];
        let coluna2=[];
        let coluna3=[];
        let coluna4=[];
        let coluna5=[];
        let coluna6=[];
        let coluna7=[];
        let colunas=[coluna1, coluna2, coluna3, coluna4, coluna5, coluna6, coluna7];
        let qualcolunas;
        if(ndezenas<=7){
            for(i=0;i<7;i++){
                coluna+= "coluna "+ (i+1)+": "+ Math.floor(Math.random()*x)+"<hr>";
            }
            document.querySelector('#raposta').innerHTML= y + '<br>' + coluna;
        }
        else if(ndezenas>7&&ndezenas<=14){

            porcolunasmax=ndezenas-7; //número de colunas que terá 2 números
            
            for(i=0; i<7; i++){
                colunas[i][0]=sorteiosete(x);
            }
            console.log(colunas);
            let conjuntosorteados=[];
            for(o=0; o<porcolunasmax; o++){
                
                while(conjuntosorteados.length<porcolunasmax){
                    let sorteado=sorteiosete(7); //qual coluna será sorteada
                    if(conjuntosorteados.indexOf(sorteado)===-1){
                        conjuntosorteados.push(sorteado);
                        while(colunas[sorteado].length<2){
                            let outro= sorteiosete(x);
                            if(colunas[sorteado].indexOf(outro)===-1){{colunas[sorteado].push(outro)}}}
                    }
                    colunas[sorteado].sort((a,b)=>a-b);
                }
            }
            let resposta="";
            let r=1;
            for (const row of colunas) {
                resposta+=" coluna " + (r)+": ";
                for (const item of row) {
                    resposta+=item+"  ";
                }
                resposta+="<hr>";
                r++;
            }
            document.querySelector('#raposta').innerHTML= y + '<br>' + resposta;
        }

        else{//até 3 números por coluna


            porcolunasmax=ndezenas-14; //número de colunas que terá 3 números
            
            for(i=0; i<7; i++){
                colunas[i][0]=sorteiosete(x);
                while(colunas[i].length<2){
                        let novonumero=sorteiosete(x);
                        if(colunas[i].indexOf(novonumero)===-1){
                            colunas[i].push(novonumero);
                        }
                    }
            }

            console.log(colunas);
            let conjuntosorteados=[];
            for(o=0; o<porcolunasmax; o++){
                
                while(conjuntosorteados.length<porcolunasmax){
                    let sorteado=sorteiosete(7); //qual coluna será sorteada
                    if(conjuntosorteados.indexOf(sorteado)===-1){
                        conjuntosorteados.push(sorteado);
                        while(colunas[sorteado].length<3){
                            let outro= sorteiosete(x);
                            if(colunas[sorteado].indexOf(outro)===-1){{colunas[sorteado].push(outro)}}}
                    }
                    colunas[sorteado].sort((a,b)=>a-b);
                }
            }
            let resposta="";
            let r=1;
            for (const row of colunas) {
                resposta+=" coluna " + (r)+": ";
                for (const item of row) {
                    resposta+=item+"  ";
                }
                resposta+="<hr>";
                r++;
            }
            document.querySelector('#raposta').innerHTML= y + '<br>' + resposta;

        }
    }

    else{





        while(aposta.length<ndezenas){
            let outro=sorteio(x);
            if(aposta.indexOf(outro)===-1){
                aposta.push(outro);
            }
        }
        aposta.sort((a, b)=>a-b);
        aposta=aposta.join(' - ');
        document.querySelector('#raposta').innerHTML= y + ":" + '<br>' +aposta;
    }

    
}

function sorteio(x){
    return Math.floor(Math.random()*x+1);
}

function sorteiosete(x){
    return Math.floor(Math.random()*x);
}