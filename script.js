document.addEventListener('DOMContentLoaded', () => {
    // Verificação de ambiente local (ajuda a diagnosticar Erro 153)
    if (window.location.protocol === 'file:') {
        console.warn('Aviso: O YouTube pode bloquear vídeos abertos diretamente via arquivo (file://). Se o vídeo não carregar, tente usar um servidor local ou o VS Code Live Server.');
    }

    const botaoCurtir = document.getElementById('botaoCurtir');
    const botaoDescurtir = document.getElementById('botaoDescurtir');
    const iconeCurtir = botaoCurtir.querySelector('i');
    const iconeDescurtir = botaoDescurtir.querySelector('i');

    let estaCurtido = false;
    let estaDescurtido = false;

    // Função para atualizar o botão de curtir
    botaoCurtir.addEventListener('click', () => {
        estaCurtido = !estaCurtido;
        
        if (estaCurtido) {
            botaoCurtir.classList.add('ativo');
            iconeCurtir.classList.remove('far');
            iconeCurtir.classList.add('fas');
            
            // Se estava descurtido, remove a descurtida
            if (estaDescurtido) {
                estaDescurtido = false;
                botaoDescurtir.classList.remove('ativo');
                iconeDescurtir.classList.remove('fas');
                iconeDescurtir.classList.add('far');
            }
        } else {
            botaoCurtir.classList.remove('ativo');
            iconeCurtir.classList.remove('fas');
            iconeCurtir.classList.add('far');
        }
    });

    // Função para atualizar o botão de descurtir
    botaoDescurtir.addEventListener('click', () => {
        estaDescurtido = !estaDescurtido;
        
        if (estaDescurtido) {
            botaoDescurtir.classList.add('ativo');
            iconeDescurtir.classList.remove('far');
            iconeDescurtir.classList.add('fas');
            
            // Se estava curtido, remove a curtida
            if (estaCurtido) {
                estaCurtido = false;
                botaoCurtir.classList.remove('ativo');
                iconeCurtir.classList.remove('fas');
                iconeCurtir.classList.add('far');
            }
        } else {
            botaoDescurtir.classList.remove('ativo');
            iconeDescurtir.classList.remove('fas');
            iconeDescurtir.classList.add('far');
        }
    });

    // Apenas para feedback visual nos outros botões
    const outrosBotoes = document.querySelectorAll('.botao-acao:not(#botaoCurtir):not(#botaoDescurtir), .botao-inscrever');
    outrosBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            if (botao.classList.contains('botao-inscrever')) {
                if (botao.innerText === 'Inscrever-se') {
                    botao.innerText = 'Inscrito';
                    botao.style.backgroundColor = '#f2f2f2';
                    botao.style.color = '#0f0f0f';
                } else {
                    botao.innerText = 'Inscrever-se';
                    botao.style.backgroundColor = '#0f0f0f';
                    botao.style.color = 'white';
                }
            }
        });
    });
});
