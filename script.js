//const altura = 1.70;
//const peso = 115;



//let altura = parseInt(document.querySelector('#altura'));
//let alturaValor = altura.value;
//console.log(alturaValor);
//let peso = parseInt(document.querySelector('#peso'));
//const imc = parseInt(peso / (Math.pow(altura, 2) * 1));
//let imc = parseInt(peso / (Math.pow(altura, 2) * 1));




//btn.addEventListener('click', calcular)



//function calcularImc() {
    
 //   imc = parseInt(peso / (Math.pow(altura, 2) * 1));
   // console.log(imc);
    //msg.innerText = imc;
    
    
    
//}

// JA CONSIGO ACESSAR OS VALORES... INDO BEM!
//const imc = peso / (Math.pow(altura, 2) * 1);



/*const btn = document.getElementById('calcular');
btn.addEventListener("click", (evento) => {
    evento.preventDefault();

    const msgErro = document.getElementById('erro');
    
    const altura = document.getElementById('altura');
    
        console.log(altura.value);

    const peso = document.getElementById('peso');
    
        console.log(peso.value);

    const imc = (peso / altura * altura);
        
    if(!peso.value || !altura.value) {
        msgErro.innerHTML = "Preencha todos os campos";
        msgErro.style.color = 'red';
        msgErro.style.fontWeight = 'bold';
            console.log('incorreto');
    } else {
        console.log('correto' + imc + imc.value);
    }
    
    
    //imc = imc.value;
    //return imc;
    console.log(imc);

    const msg = document.getElementById('mensagem');
    msg.innerHTML = imc.value;

})*/ 
//const 
function calculeImc() {
    
    const msgErro = document.getElementById('erro');
    
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso'); 
        altura.style.border = "none";
        peso.style.border = "none";
    
let msgPeso = document.getElementById('mensagemPeso');
const label = document.getElementsByClassName('alturaLabel');

   
    if(!peso.value || !altura.value) {
        msgErro.innerHTML = 'Preencha os campos';
        if(!altura.value) {
            label.innerHTML = label + '*'
            altura.style.border = '1px solid red';
            msgErro.innerHTML = 'Digite a altura';
            } else if (!peso.value) {
            peso.style.border = '2px solid red';    
            msgErro.innerHTML = 'Digite o peso';
        }
        
    }  else  {
        let imc  = (peso.value) / (altura.value * altura.value);
        msgErro.innerHTML = 'Seu IMC é ' + Math.round(imc);

        if(imc <= 18.5){
            msgPeso.innerHTML = "Magreza. Você está <b>abaixo do peso</b>";
        } else if (imc > 18.5 && imc <= 24.9) {
            msgPeso.innerHTML = "Parabéns! Você está com o <b>peso ideal</b>!";
        } else if (imc > 24.9 && imc <= 30) {
            msgPeso.innerHTML = "Fique de olho! Você está com <b>sobrepeso</b>!";
        } else {
            msgPeso.innerHTML = "Cuidado!!! Você está com obesidade!"
        }
    
        console.log(imc);
    }
    
    
       
    
    
    
        //msgErro.innerHTML = "Preencha a altura";
    }
    
       
    

    //const msg = document.getElementById('mensagem');
    //msg.innerHTML = imc.value + imc;


const btn = document.getElementById('calcular');
btn.addEventListener('click', calculeImc);
//btn.addEventListener('click', calcularImc)
    

//btn.style.color = 'red';

