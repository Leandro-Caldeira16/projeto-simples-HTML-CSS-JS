// APLICAÇÃO PARA CALCULAR A IDADE DEPOIS DE 7 ANOS

function calcIdade(){
    let result = document.getElementById("idade")

    let resultado = result.value ;

    if(result.value == ""){
        return  document.getElementById('resultado').innerHTML = ('Por favor digite sua idade!')
    }

    let result7 = (parseInt(resultado)  + 7)

    
    
    

    console.log(result7);

    document.getElementById('resultado').innerHTML = ("Você terá " + result7 + " anos. ")
}



