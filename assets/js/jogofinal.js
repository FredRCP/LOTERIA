//MÚSICAS

const audio = new Audio('./assets/audio/menu.wav'); 
const dice= new Audio('./assets/audio/dice.wav');
const yeah= new Audio('./assets/audio/ohyeah.wav');
const yeah1= new Audio('./assets/audio/ohyeah1.wav');
const drink= new Audio('./assets/audio/agua.wav')
const fim= new Audio('./assets/audio/win.wav');
const mul= new Audio('./assets/audio/mul.wav');
const hom= new Audio('./assets/audio/hom.wav');
const stripman= new Audio('./assets/audio/stripman.mp3');
const stripmulher= new Audio('./assets/audio/stripmulher.mp3');
const aero= new Audio('./assets/audio/aero.mp3');
const click= new Audio('./assets/audio/click.wav');
const message= new Audio('./assets/audio/message.ogg');
const clickmenu= new Audio('./assets/audio/clickmenu.mp3');
audio.volume=0.6;
yeah.volume=1;
yeah1.volume=1;
mul.volume=0.5;
hom.volume=0.5;
stripman.volume=0.5;
stripmulher.volume=0.5;
let ligou=false;

audio.loop = true;
addEventListener('click', e=>{
    
    const el= e.target;
    if(ativar===false){
    if(el.classList.contains('menuplay')){
        audio.play();
        el.classList.add('ativo');
        el.setAttribute('title', 'Desativar áudio');
        ativar=true;
    }}
    else{
    if(ativar=true&&el.classList.contains('menuplay')){
        audio.pause();
        ativar=false;
        el.classList.remove('ativo');
        el.setAttribute('title', 'Ativar áudio')
    }}
    if(el.classList.contains('click')){
        click.play();}    
    if(el.classList.contains('clickmenu')){
        clickmenu.play();}
    if(el.classList.contains('imagemfinal')){
        mudarfoto();
    } 
    })


    if ('getGamepads' in navigator) {
        // Função para atualizar o estado do joystick
        function updateGamepad() {
          // Obtém os gamepads conectados
          const gamepads = navigator.getGamepads();
      
          // Verifica se há algum gamepad conectado
          if (gamepads.length > 0) {
            const gamepad = gamepads[0]; // Obtém o primeiro gamepad
      
            // Acesse as propriedades do gamepad, por exemplo:
            const buttonPressed = gamepad.buttons[0].pressed;
            const joystickX = gamepad.axes[0];
            const joystickY = gamepad.axes[1];

            if(gamepad.buttons[0].pressed){alert('oie')}
      
            // Faça algo com os valores obtidos do joystick
            // Por exemplo, atualize a posição do jogador em um jogo
          }
        }}

        document.addEventListener("keydown", function(event) {
            console.log(event.keyCode);
      }, true);
          

//CRIAÇÃO DA CLASSE DOS JOGADORES
let ativar=false;
let timer;
let iniciar=0;
let nudez=0;
let transa=0;
let demora=0;



class Jogador{
    constructor(nome, pecas, roupas, lista, contador, listafase, listapelado, contadorbug){
        this.nome= nome.toUpperCase();
        this.pecas= pecas;
        if(this.pecas===0){nudez+=1};
        this.roupas= roupas;
        this.lista=lista;
        this.contador=contador;
        this.listafase=[listafase];
        this.listapelado=listapelado;
        if(this.pecas>3){this.contadorbug= Number(contadorbug) +2;}
        else{this.contadorbug= Number(contadorbug)};
        
    }

    get sortear1m(){ //ACAO DA MULHER
        if(this.pecas===0&&nudez===2){return this.sortear2m}
        else{
            let num1= Math.floor(Math.random()*corpoh.length);
            this.contador+=1;
            if(this.contador%6===0){this.beber};
            if(this.contador%2===0){this.perguntar};
            
            if(num1===33&&this.pecas>0){let missao= corpoh[num1]; this.retirarpecam; return missao} 

            else{    
            while(this.listafase.indexOf(num1)!==-1){
                num1=Math.floor(Math.random()*33);
            }
                this.listafase.push(num1);
                let missao= corpoh[num1];
                this.contadorbug+=1;
                console.log(this.contadorbug);
                if(this.listafase.length>=32||this.contadorbug%7===0){let missao= corpoh[33]; this.retirarpecam; return missao} 
                return missao;}
        }
    }

    get sortear1h(){ //ACAO DA HOMEM
        if(this.pecas===0&&nudez===2){return this.sortear2h}
        else{
            let num1= Math.floor(Math.random()*34);
            this.contador+=1;
            if(this.contador%6===0){this.beber};
            if(this.contador%2===0){this.perguntar};
            
            if(num1===33&&this.pecas>0){let missao= corpom[num1]; this.retirarpecah; return missao} 
        
            else{
            while(this.listafase.indexOf(num1)!==-1){
                num1=Math.floor(Math.random()*33);
            }
                this.listafase.push(num1);
                let missao= corpom[num1];
                this.contadorbug+=1;
                console.log(this.contadorbug);
                if(this.listafase.length>=32||this.contadorbug%8===0){let missao= corpoh[33]; this.retirarpecah; return missao}
                return missao;} 
        }
    };

    get sortear2m(){
        const botaodadom= document.querySelector('.levelm');
        botaodadom.classList.add('level2');
        let num= Math.floor(Math.random()*7);
        transa+=1;
        if(transa>=10){alert("FIM DE JOGO! HORA DE TRANSAR!!!"); return  final();}
        if(this.listapelado.indexOf(acaom2[num])===-1){this.listapelado.push(acaom2[num]);
            let missao= acaom2[num];
            return missao;}
        else{
            let missão='Escolha sua ação ou role o dado novamente!'; return missão;}    
    };

    get sortear2h(){
        const botaodadoh= document.querySelector('.levelh');
        botaodadoh.classList.add('level2');
        let num= Math.floor(Math.random()*7);
        transa+=1;
        if(transa>=10){alert("FIM DE JOGO! HORA DE TRANSAR!!!"); return  final();}
        if(this.listapelado.indexOf(acaoh2[num])===-1){this.listapelado.push(acaoh2[num]);
            let missao= acaoh2[num];
            return missao;}
        else{
            let missão='Escolha sua ação ou role o dado novamente!';
            return missão;
        }    
    };

    get perguntar(){
        if(document.querySelector('#perguntas').checked===true){
            let numero= Math.floor(Math.random()*96);
            if(this.lista.indexOf(perguntas[numero])===-1){
            this.lista.push(perguntas[numero]);
            alert(perguntas[numero]);} else(alert("pergunte o que quiser ao seu parceiro(a)"));
    }}

    get listar(){
        console.log(this.lista);
    }

    get retirarpecam(){
        if(this.pecas>0){
            this.pecas-=1;
            alert(this.nome + ' retire ' + this.roupas[this.pecas]);
            stripmulher.play();
            this.roupas.pop();
            mulher.listarroupasm;
            if(this.pecas===1){return alert("O clima está esquentando! Você está quase nua!")}
            if(this.pecas<=0){nudez+=1; alert("O clima está esquentando! Você está completamente nua!")}
            if(nudez===2){alert("Casal, vocês passaram para o nível 2! Se preparem para cenas mais picantes!")};}
        else{alert(this.nome +" você nao tem mais roupas!")}   
    };

    get retirarpecah(){
        if(this.pecas>0){
            this.pecas-=1;
            alert(this.nome + ' retire ' + this.roupas[this.pecas]);
            stripman.play();
            this.roupas.pop();
            homem.listarroupash;
            if(this.pecas===1){return alert("O clima está esquentando! Você está quase nu!")}
            if(this.pecas<=0){nudez+=1; alert("O clima está esquentando! Você está completamente nu!")};
            if(nudez===2){alert("Casal, vocês passaram para o nível 2! Se preparem para cenas mais picantes!")};}
        else{alert(this.nome +" você nao tem mais roupas!")}
    };

    get beber(){
        if(document.querySelector('#drink').checked===true){
        drink.play();
        alert('tome um gole do seu drink');
    }}

    get listarroupasm(){
        let armariom="";
        for(let i in this.roupas){
            armariom+="peça "+ (Number(i)+1) + ": " + this.roupas[i] + "<br>";
        }
        //if(armariom===""){ return document.querySelector(".armariom").innerHTML="NUA"}
        //document.querySelector(".armariom").innerHTML= armariom;
    }

    get listarroupash(){
        let armarioh="";
        for(let i in this.roupas){
            armarioh+="peça "+ (Number(i)+1) + ": " + this.roupas[i] + "<br>";
        }
        //if(armarioh===""){ return document.querySelector(".armarioh").innerHTML="NU"}
        //document.querySelector(".armarioh").innerHTML= armarioh;
    }
}

 function final(){
    yeah1.play();
    setTimeout(() => {
        yeah.play();
    }, 1200);
    setTimeout(() => {
        fim.play();
    }, 2500);
    return transar(); 
 }

//DADOS FASE 1
//34
const corpom=["toque os lábios dela", "beije os lábios dela", "mordisque os lábios dela", "dê uma lambida no cantinho da boca dela", "dêem um beijão de cinema", "assopre os lábios dela", "massageie as orelhas dela", "dê mordidinhas nas orelhas dela", 
"assopre as orelhas dela", "dê lambidas nas orelhas dela", "massageie a nuca dela", "arranhe levemente a nuca dela", "dê vários beijos na nuca dela", "assopre e mordisque a nuca dela", "beije o pescoço dela", 
"dê lambidas e leves chupadas no pescoço dela", "acaricie os seios dela", "apalpe os seios dela", "massageia as costas dela", 
"se ela estiver de roupas íntimas ou nua: beije, dê lambidas e assopre suas costas, em toda a sua extensão; senão, role o dado novamente", "beije todo o abdome dela", " deslize as mãos, suavemente, por todo o abdome dela", "dê mordidinhas no abdome dela",
"massageie as coxas dela", "deslize as mãos pela parte interna das coxas dela, arranhando levemente dos joelhos em direção à virilha", "beije a parte interna das coxas dela; inicie próximo aos joelhos e suba até a virilha",
"se ela estiver apenas com roupa íntima ou nua, dê lambidinhas na virilha; senão, role o dado novamente", "apalpe e massageie a bunda dela", "se ela estiver apenas com roupa íntima ou nua, dê mordidinhas na bunda dela; senão, role o dado novamente",
"a escolha é livre, faça o quiser com ela!", "se ela estiver apenas com roupas debaixo ou nua, toque as partes íntimas; senão, role o dado novamente",
"se ela estiver apenas com roupas debaixo ou nua, toque e acaricie as partes íntimas; senão, role o dado novamente",
"se ela estiver apenas com roupas debaixo, dê vários beijos nas partes íntimas (por cima da roupa); senão, role o dado novamente", "retire uma peça de roupa!"];
//34
const corpoh=["toque os lábios dele", "beije os lábios dele", "mordisque os lábios dele", "dê uma lambida no cantinho da boca dele", "dêem um beijão de cinema", "assopre os lábios dele", "massageie as orelhas dele", "dê mordidinhas nas orelhas dele", 
"assopre as orelhas dele", "dê lambidas nas orelhas dele", "massageie a nuca dele", "arranhe levemente a nuca dele", "dê vários beijos na nuca dele", "assopre e mordisque a nuca dele", "dê beijos no pescoço dele", 
"dê lambidas e leves chupadas no pescoço dele", "acaricie o peito dele", "apalpe o peito dele", "massageia as costas dele", 
"se ele estiver de roupas íntimas ou nu: beije, dê lambidas e assopre as costas, em toda a sua extensão; senão, role o dado novamente", "beije todo o abdome dele", " deslize as mãos, suavemente, por todo o abdome dele", "dê mordidinhas no abdome dele",
"massageie as coxas dele", "deslize as mãos pela parte interna das coxas dele, arranhando levemente subindo e descendo continuamente", "beije a parte interna das coxas dele; inicie próximo aos joelhos e suba até a virilha",
"se ele estiver apenas com roupa íntima ou nu, dê lambidinhas na virilha dele; senão, role o dado novamente", "apalpe e massageie a bunda dele", "se ele estiver apenas com roupa íntima ou nu, dê mordidinhas na bunda dele; senão, role o dado novamente",
"a escolha é livre, faça o quiser com ele!", "se ele estiver apenas com roupas debaixo ou nu, toque as partes íntimas; senão, role o dado novamente",
"se ele estiver apenas com roupas debaixo ou nu, toque e acaricie, apalpe as partes íntimas; senão, role o dado novamente",
"se ele estiver apenas com roupas debaixo, dê vários beijos nas partes íntimas (por cima da roupa), senão, role o dado novamente", "retire uma peça de roupa!"];


//DADOS FASE 2
//7
const acaom2=["masturbe seu parceiro (se tiver um EGG, use-o!)", "faça sexo oral nele", "deem um amasso bem gostoso", "esfregue sua buceta na cara dele",
"façam um 69", "sente sobre ele e esfregue sua buceta no pau dele (sem penetrar)", "se masturbe para ele (se tiver algum brinquedinho, você pode usá-lo)"];
//7
const acaoh2=["masturbe sua parceira (se tiver algum brinquedinho, você pode usá-lo)", "faça sexo oral nela", "deem um amasso bem gostoso", "façam um 69",
"acaricie e chupe os seios dela", "esfregue a cabecinha no clitóris dela (sem penetrar)", "se masturbe para ela"];

//PERGUNTAS
//40
const perguntas1=['descreva sua lingerie/roupa íntima','qual a cor preferida de lingerie/roupa íntima?','qual sua posição preferida?','sexo romântico ou selvagem?',
'conte uma fantasia sexual','parte do corpo que mais gosta no parceiro?','o que ele/ela faz que te deixa com mais tesão?',
'já fez alguma loucura sexual? conte!','qual parte do seu corpo você mudaria?','já transou em lugares exóticos? se sim, quais?',
'já transou no primeiro encontro?','é importante o tamanho do pênis/seios do(a) parceiro(a)?','já foi em um strip club?',
'como fica qdo está muito bêbado(a)? (inconveniente? deprimido(a)? eufórico(a)? tarado(a)?)','com que idade foi sua primeira transa?',
'ja deu PT após beber? conte!','lugar favorito para transar?','já saiu com alguém famoso?','transar de manhã, à tarde ou à noite?',
'já ficou nu/nua em público?','tem vontade de ir em uma praia de nudismo? Conte!','o que compraria em um sex shop?',
'faria amor em público/ar livre?','já trocou nudes?','Gosta de pornografia? vejam um vídeo juntos agora!',
'o que melhoraria em seu parceiro/parceira?','qual parte do corpo preferida no sexo oposto?',
'sexo no escuro ou luz acesa?','o que seu parceiro(a) faz que mais te dá tesão?','o que você faz melhor na cama?',
'penetração rápida e profunda, ou lenta e carinhosa?','com que idade viu pela primeira vez, ao vivo, um(a) pepeka/pau?',
'quando, e onde, foi seu primeiro beijo?','dominar ou ser dominado(a)?','o que mais gosta no seu corpo?',
'gostar de falar sacanagem? palavrões? xingar?','qual sua fantasia/fetiche mais safado? Descreva como seria!','gosta de apanhar no sexo?',
 'sussurre uma sacanagem no ouvido do seu parceiro(a)', 'seu parceiro pode fazer uma pergunta íntima'];

const perguntas=['Descreva sua lingerie/roupa íntima','Qual a cor preferida de lingerie/roupa íntima?','Qual sua posição preferida?','Sexo romântico ou selvagem?',
    'Conte uma fantasia sexual','Qual a parte do corpo que mais gosta no parceiro?','O que ele/ela faz que te deixa com mais tesão?',
    'Já fez alguma loucura sexual? Conte!','Qual parte do seu corpo você mudaria?','Já transou em lugares exóticos? Se sim, quais?',
    'Já transou no primeiro encontro?','Você acha importante o tamanho do pênis/seios do(a) parceiro(a)?','Já foi em um strip club? Tem vontade?',
    'Como fica quando está muito bêbado(a)? (inconveniente? deprimido(a)? eufórico(a)? tarado(a)?)','Com que idade foi sua primeira transa?',
    'Já deu "bafão" após beber? Conte!', 'Fale seu lugar favorito para transar?', 'Já saiu com alguém famoso/a? Com qual tinha vontade!?',
    'Transar de manhã, à tarde ou à noite?', 'Encoste ele/ela na parede, e deem um amasso bem quente!', 'Descreva com tem que ser suas preliminares',
    'Já ficou nu/nua em público?', 'Tem vontade de ir em uma praia de nudismo? Conte!', 'O que gosta ou gostaria de comprar em um sex shop?',
    'Faria amor em público/ar livre?', 'Já trocou nudes?', 'Gosta de pornografia? Vejam um vídeo juntos agora!',
    'O que melhoraria em seu parceiro/parceira?', 'Qual parte do corpo preferida no sexo oposto?', 
    'Sexo no escuro ou luz acesa?','O que seu parceiro(a) faz que mais te dá tesão?','O que você faz melhor na cama?',
    'Penetração rápida e profunda, ou lenta e intensa?','Com que idade viu pela primeira vez, ao vivo, um(a) pepeka/pau?',
    'Quando, e onde, foi seu primeiro beijo?', 'Dominar ou ser dominado(a)?', 'O que mais gosta no seu corpo?',
    'Gosta de falar sacanagem? palavrões? xingar?', 'Palavras te excitam? Quais?', 'Qual sua fantasia/fetiche mais safado? Descreva!', 'Gosta de apanhar no sexo?',
    'Sussurre uma sacanagem no ouvido do seu parceiro(a)', 'Seu parceiro pode te fazer uma pergunta íntima agora!', 'Já ficou com ex de algum/a amigo(a)?', 
    'Qual a coisa mais louca que já fez entre quatro paredes? ', 'Já fingiu na hora H?', 'Você já nadou pelado(a)?', 'Você já beijou mais de uma pessoa no mesmo dia? Quantas?', 
    'Qual parte do corpo dele/dela você beijaria agora? Siga em frente!', 'Com quantas pessoas você já ficou na vida?', 'Que tipo de pornografia te excita?',
    'Qual sabor é gostoso de adicionar ao sexo oral?', 'Qual é a zona erógena do seu corpo que mais te excita?', 'Cite uma pessoa do mesmo sexo que você ficaria, se concordasse claro.',
    'Algemas ou vendas?', 'Você tem sonhos eróticos? Se lembra de algum recente? Conte-o!', 'Que tipo de música é perfeito para transar?', 
    'Descreva o ambiente perfeito para uma noite de sexo.', 'O que você já fez no sexo que jamais faria de novo?', 'Já fez sexo virtual?', 'Já fez sexo por telefone?', 
    'Você se lembra de quando começou a se tocar?', 'Qual o maior período de tempo que você já ficou sem transar?', 'Qual foi o máximo de vezes que você já transou em um dia?', 
    'Já transou com mais de uma pessoa no mesmo dia?', 'Já foi pego no flagra transando ou se masturbando?', 'Já teve orgasmos múltiplos?',
    'Já fez sexo com mais de uma pessoa ao mesmo tempo?', 'Qual a posiçao sexual que você menos gosta?', 'Depilad@ ou com pêlos?', 'Qual a sua posição preferida para se masturbar?', 
    'O que para você é proibido no sexo?', 'Como foi a primeira vez que alguém te chupou?', 'No que você pensa quando está se masturbando?',
    'Você já teve orgasmo enquanto dormia?', 'Faça uma lap dance (dança no colo del@)', 'Dê uma aula de educação sexual de uma maneira muito sexy.',
    'Simule uma dança em pole dance!', 'Faça uma simulação da sua posição sexual favorita.', 
    'Coloque um cubo de gelo na boca e dê um beijo no pescoço do seu parceiro.', 'Qual foi o último pensamento sexual que você teve hoje?',
    'Que roupa ele/ela deveria vestir hoje se fosse se encontrar com você?',
    'Quais são as duas palavras que mais te excitam?', 'Já se filmou transando? Se tiver coragem, faça ao final deste jogo!', 'Recomende algum filme excitante!',
    'Você sente prazer em assistir outras pessoas se tocando?', 'Já foi a uma casa de swing?', 'O que é que você pensa quando quer gozar?', 
    'O que é mais importante: gozar ou fazer gozar?', 'Já ficou surpreso ao ver o tamanho do membro sexual de outra pessoa?',
    'Quando fez sexo oral pela primeira vez?', 'Demonstre com as mãos ou dedos como gostaria que fosse o sexo oral em você',
    'Demonstre, mesmo vestidos, uma posição que gostaria de experimentar', 'Invente um nome de "guerra" para usar daqui em diante',
    'Coloque o dedo na boca do seu parceiro/a e mantendo contato visual, peça que seja criativo com a língua',
    'Em pé, se olhem fixamente por 30 segundos, em seguida beijem-sem bem gostoso.',]



function apelar(){
    if(iniciar===0){return alert('você precisa iniciar o jogo!')};
    if(mulher.pecas>0){mulher.retirarpecam; mulher.listarroupasm;} else{alert(mulher.nome + ", você já está nua!")};
    setTimeout(() => {
        if(homem.pecas>0){homem.retirarpecah; homem.listarroupash;} else{alert(homem.nome + ", você já está nu!")};    
    }, 6000);
    document.querySelector('#abri').checked=false;
    };

//RELÓGIO

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
});}


function iniciaRelogio() {
const relogio = document.querySelector('.crono');
relogio.classList.add('cronoligado');
segundos=0;
timer = setInterval(function() {
segundos++;
relogio.innerHTML = criaHoraDosSegundos(segundos);
}, 1000);
}

//INICIAR
let senha='';
function resetar(){
    senha= prompt('Qual é a senha?');
    if(senha!=123){return alert('Digite a senha correta!')}
    if(ligou){
        if(document.querySelector('.imagemfinal')){
        document.querySelector('.imagemfinal').src="";
        document.querySelector('.imagemfinal').style.zIndex='-1';
        document.querySelector('.imagemfinal').removeAttribute('class', 'imagemfinal');
        //document.querySelector('.jogofinal').removeChild('img');
        //document.querySelector('.botaozim').style.zIndex='-1';
        //document.querySelector('.botaozim').removeAttribute('class', 'imagemfinal');
        }};
    ligou=false;
    aero.play();
    clearInterval(timer);
    segundos=0;
    iniciar=1;
    nudez=0;
    transa=0;
    document.querySelector('#abri').checked=false;
    //CRIAÇÃO DOS JOGADORES
    jog1= prompt("Qual o nome da jogadora?") || "Jogadora 1";
    jog1p= Number(prompt("Quantas peças de roupa está usando? Não inclua os calçados."));
    if(jog1p!==0){alert("A seguir, liste primeiro as peças íntimas.")};
    roupas1=[];
    for(i=0; i<jog1p; i++){
    roupas1[i]= prompt( 'Qual a peça número ' + (i+1) + '?');
    };
    lista1=[];
    listafase1=[];
    listapelado1=[];
    bebida1=0;
    contador1=0;
    contadorbug1=0;
    jog2= prompt("Qual o nome do jogador?") || "Jogador 2";
    jog2p= Number(prompt("Quantas peças de roupa está usando? Não inclua os calçados."));
    roupas2=[];
    if(jog2p!==0){alert("A seguir, liste primeiro as peças íntimas.")};
    for(i=0; i<jog2p; i++){
    roupas2[i]= prompt( 'Qual a peça número ' + (i+1) + '?');
    };
    lista2=[];
    listafase2=[];
    listapelado2=[];
    bebida2=0;
    contador2=0;
    contadorbug2=0;
    mulher= new Jogador(jog1, jog1p, roupas1, lista1, bebida1, contador1, listafase1, listapelado1, contadorbug1);
    homem= new Jogador(jog2, jog2p, roupas2, lista2, bebida2, contador2, listafase2, listapelado2, contadorbug2);
    document.querySelector(".jogador1").innerHTML=mulher.nome;
    document.querySelector(".jogador2").innerHTML=homem.nome;
    mulher.listarroupasm;
    homem.listarroupash;
    const imagem= document.createElement('img');
    imagem.setAttribute('src','/assets/img/roxinhofogosem.png');
    document.querySelector('.resultadojogo').innerHTML="";
    document.querySelector('.resultadojogo').appendChild(imagem);
    iniciaRelogio();
    setTimeout(()=>{message.play(); alert("Casal já se passaram alguns bons minutinhos, cliquem em avançar")}, 1200000);
    const botaodadoh=document.querySelector('.levelh');
    const botaodadom=document.querySelector('.levelm');
    botaodadom.classList.remove('level2');
    botaodadoh.classList.remove('level2');
};

//DADOS

function dadoele(){
    if(iniciar===0){return alert('você precisa abrir o menu e iniciar o jogo!')};
    dice.play();
    document.querySelector('.resultadojogo').innerHTML= homem.nome +"<br>" +homem.sortear1h; 
};

function dadoela(){
    if(iniciar===0){return alert('você precisa abrir o menu e iniciar o jogo!')};
    dice.play();
    document.querySelector('.resultadojogo').innerHTML=mulher.nome +"<br>"  +mulher.sortear1m;
};

//FASE 3 - SEXO
//let ligou=false;
function transar(){
    
    const kama= confirm("Tenho sugestões de posições baseadas no kamasutra! Você aceita?");
    
    if(kama){
        ligou=true;
        criarimagem();
    }    
    else{alert('Divirtam-se! Obrigado por participarem do jogo.'); ligou=false;}
    iniciar=0;
    return document.querySelector('.resultadojogo').innerHTML= "FIM DE JOGO! HORA DE TRANSAR!!!";  
}

//CRIAÇÃO DO KAMASUTRA

function criarimagem(){
    const n= Math.floor(Math.random()*107);
    const imagem=document.createElement('img');
    imagem.src= '/assets/img/kama/'+imagens[n];
    imagem.setAttribute('title', 'clica na imagem para mostrar outra posição');
    //const botaok= document.createElement('button');
    //botaok.classList.add('botaozim');
    //botaok.setAttribute('title', 'outra posição');
    const diva= document.querySelector('.jogofinal');
    imagem.classList.add('imagemfinal');
    //diva.appendChild(botaok);
    diva.appendChild(imagem);
    jacrioufoto=true;    
    
}

function mudarfoto(){
    const n= Math.floor(Math.random()*107);
    const imagem= document.querySelector('.imagemfinal');
    imagem.src='/assets/img/kama/'+imagens[n];
}


const imagens= ['69emponte.jpeg', '69.jpeg', 'anjinhananeve.jpeg', 'aranha.jpeg', 'bicicleta.jpeg', 'bombadeandromeda.jpeg', 
'cachorro.jpeg', 'cadeiraquente.jpeg', 'caminhoparaoceu.jpeg', 'cao.jpeg','caraacara.jpeg','carrinhodemaodeitada.jpeg', 
'carrinhodemaoempe.jpeg', 'carrinhodemaosentado.jpeg', 'cascata.jpeg','conchinha.jpeg', 'conchinhacaraacara.jpeg', 
'cowgirl.jpeg', 'estante.jpeg', 'exercicionabarra.jpeg', 'fusao.jpeg', 'h2o.jpeg', 'jovenzinha.jpeg', 'lateralterna.jpeg',
'libelula.jpeg', 'manteiga.jpeg', 'mariposa.jpeg', 'missionario.jpeg', 'missionarioviciado.jpeg', 'mountainclimber.jpeg',
'notopo.jpeg', 'ochef.jpeg', 'odragao.jpeg', 'oelevador.jpeg', 'oestandarte.jpeg', 'oG.jpeg', 'ogato.jpeg', 'oplugue.jpeg', 
'opreguicoso.jpeg', 'otrono.jpeg', 'oX.jpeg', 'pequenacolher.jpeg', 'posicaodovarao.jpeg', 'presenteembrulhado.jpeg', 
'pretzel.jpeg', 'servicodequarto.jpeg', 'solucaorapida.jpeg', 'spork.jpeg', 'surfista.jpeg', 'torpedosuico.jpeg',
'umasubida.jpeg', 'uniaodelotus.jpeg', 'vaqueirainvertida.jpeg','kamaporcimabunda.gif', 'kamacavalgando.gif', 
'kamade4puxando.gif', 'kamade4.gif', 'kamaelaoral.gif', 'kamaelecomduas.gif', 'kamaporcima.gif', '69.gif', 'aberta.gif', 
'anal.gif', 'apoiadanaparece.gif', 'chupandobatendo.gif', 'de4.gif', 'delado.gif', 'deladoatras.gif', 'deladobaixo.gif', 
'oralnela.gif', 'oralnela1.gif', 'porcimabjo.gif', 'porcimadecosta.gif', 'punheta.gif', 'punheta1.gif', 'vouyer.gif', 
'beiracama.gif', 'bumbum.gif', 'de4supinado.gif','escancarada.gif', 'escancarada1.gif', 'flecha.gif', 'lavar.gif',
'papaimamae.gif', 'porcimaalto.gif','ladim.gif', 'perna.gif', 'perna1.gif', 'porcima.gif','punhetainvertida.gif', 'sofa.gif',
'carregando.gif', 'ladobjo.gif', 'metebjo.gif', 'emcima.gif', 'conchinhaemcima.gif', '69empe.gif', 'apoiada.gif', 
'apoadadificil.gif', 'chuveiro.gif', 'costabanheiro.gif','ladobeijo.gif', 'gozada.gif', 'masturbando.gif', 'pernalevantada.gif',
'portrasjanela.gif', 'suspensa.gif'];












