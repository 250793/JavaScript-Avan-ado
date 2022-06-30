function fillList() {
    var ul = document.querySelector('.lista ul');
    // console.log(ul)
    var frases = ['Feliz Aniversário',
        'Feliz Natal com muita paz',
        'Um Feliz Natal para toda a família',
        'Fique em Paz!',
        'Nos vemos em Breve!']

    for (let i = 0; i < frases.length; i++) {
        // variavel que possui o valor da string do array frases
        var liContent = frases[i];
        
        // cria o elemento li
        var li = document.createElement('li');
        
        // guarda a string em casa li criada 
        li.textContent = liContent;
        
        // adicionar li dentro do ul, empilhando a cada laço
        ul.appendChild(li);

    }
}

fillList();