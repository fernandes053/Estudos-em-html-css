function limitarNumeros(input) {
    // 1. Remove qualquer caractere que não seja um número de 0 a 9
    input.value = input.value.replace(/[^0-9]/g, '');

    // 2. Se o usuário digitar mais de 4 números, corta o excesso
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4);
    }
}

function verificar(){
    // 1. Pega o ano atual do sistema de forma automática
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    // 2. Pega os elementos do HTML pelos IDs
    const campoAno = document.getElementById('ano-nascimento');
    const paragrafoResultado = document.getElementById('resultado');
    const elementoImagem = document.getElementById('foto');

    // 3. Pega os botões de rádio do sexo (pelo atributo 'id')
    const sexoMasculino = document.getElementById('masc');
    const sexoFeminino = document.getElementById('fem'); 

    // 4. VALIDAÇÃO DE SEGURANÇA 1: Verifica o campo de ano
    if (campoAno.value.length == 0 || Number(campoAno.value) > anoAtual || Number(campoAno.value) < 1900) {
        alert('[ERRO] Verifique o ano de nascimento e tente novamente!');
        return; 
    }

    // 5. VALIDAÇÃO DE SEGURANÇA 2: Obriga a selecionar o sexo
    if (!sexoMasculino.checked && !sexoFeminino.checked) {
        alert('[ERRO] Por favor, selecione o sexo (Masculino ou Feminino) antes de verificar!');
        return;
    }

    // 6. Configurações iniciais do cálculo
    const idade = anoAtual - Number(campoAno.value); 
    let classificacao = ''; // Guardará o termo exato (menino, jovem, idosa...)
    let caminhoImagem = '';

    // 7. Lógica de decisão baseada no Sexo e na Idade
    if (sexoMasculino.checked) {
        if (idade >= 0 && idade < 12) {
            classificacao = 'um menino';
            caminhoImagem = 'img/menino.png'; 
        } else if (idade < 21) {
            classificacao = 'um jovem';
            caminhoImagem = 'img/jovem.jpg'; 
        } else if (idade < 60) {
            classificacao = 'um homem';
            caminhoImagem = 'img/homen.jpg';   
        } else {
            classificacao = 'um idoso';
            caminhoImagem = 'img/idoso.jpg';   
        }
    } 
    else if (sexoFeminino.checked) {
        if (idade >= 0 && idade < 12) {
            classificacao = 'uma menina';
            caminhoImagem = 'img/menina.jpg';  
        } else if (idade < 21) {
            classificacao = 'uma jovem';
            caminhoImagem = 'img/garota.jpg'; 
        } else if (idade < 60) {
            classificacao = 'uma mulher';
            caminhoImagem = 'img/mulher.png';  
        } else {
            classificacao = 'uma idosa';
            caminhoImagem = 'img/idosa.jpg';   
        }
    }

    // 8. Atualiza o texto do parágrafo na tela de forma personalizada
    paragrafoResultado.innerHTML = `Detectamos ${classificacao} de ${idade} anos.`;

    // 9. Aplica o arquivo correspondente na tag <img> e a torna visível
    elementoImagem.setAttribute('src', caminhoImagem);
    elementoImagem.style.display = 'block';
}
