/*
aqui faremos um botão que aciona ou desliga um "dark mode" para a nossa página front-end.
1 crie uma estrutura básica (html, css e js). (eu não consegui ter acesso ao arquivo css e html, então não pude ver a parte css e, por não ser relevante ao exercício, não tentei recriar o mesmo aqui)
2 crie um arquivo chamado scripts.js na sua página assets/js.
3 selecione os elementos h1, button, footer e body.
4 se os elementos possuirem a classe dark mode, modifique seus estilos, caso contrário volte para o estilo normal.
*/

//é considerado boa prática no javascript fazer com que uma função tenha apenas uma função, por organização.
function changeMode(){ //aqui ficará apenas as chamadas das funções
    changeClasses(); 
    changeText();
}

function changeClasses(){       //aciona a classe de dark mode.
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){          //modifica os textos para ficar de acordo com o atual estado (light/dark mode)

    const lightMode='light Mode'
    const darkMode='Dark Mode'

    if (button.classList.contains(darkModeClass)){
        button.innerHTML=lightMode;
        h1.innerHTML=darkMode + ' on';
        return;
    }
    button.innerHTML=darkMode;
    h1.innerHTML=lightMode + ' on';
    return;
}

const darkModeClass='dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer'[0]);

button.addEventListener('click',changeMode);