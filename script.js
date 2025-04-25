document.addEventListener('DOMContentLoaded', function() {
    const botoesSaibaMais = document.querySelectorAll('.saiba-mais');
    const modal = document.getElementById('modal-info');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDetalhes = document.getElementById('modal-detalhes');
    const botaoFecharModal = document.querySelector('.fechar-modal');

    const detalhesAtividades = {
        'caminhada': `
            <h3>Informações Detalhadas da Caminhada</h3>
            <p>Nossas trilhas variam em extensão e dificuldade, proporcionando uma experiência única para cada visitante. Você poderá observar diversas espécies de aves, árvores centenárias e, com sorte, alguns animais silvestres.</p>
            <p>Recomendamos o uso de roupas leves, calçados de trekking ou tênis confortáveis, chapéu ou boné e repelente de mosquitos. Não se esqueça de sua câmera para registrar os momentos especiais!</p>
            <p>Guias locais experientes estão disponíveis para acompanhamento (opcional, consulte valores).</p>
        `,
        'acude': `
            <h3>Mais sobre o Açude</h3>
            <p>Nosso açude é alimentado por nascentes de água pura, o que garante a sua beleza e a rica vida aquática. A pesca é permitida com licença (informações sobre como obter a licença estão disponíveis na recepção).</p>
            <p>A área de piquenique é equipada com mesas e bancos, proporcionando um local agradável para refeições ao ar livre. Aprecie a serenidade do local e o canto dos pássaros.</p>
        `,
        'rio': `
            <h3>Detalhes da Aventura no Rio</h3>
            <p>O trecho do rio disponível para atividades aquáticas é seguro e monitorado. Os passeios de caiaque são uma excelente forma de explorar a paisagem de uma perspectiva diferente.</p>
            <p>Fornecemos coletes salva-vidas e instruções básicas de segurança para todos os participantes. Monitores estão presentes para auxiliar e garantir a segurança durante as atividades.</p>
        `,
        'colheita': `
            <h3>A Experiência da Colheita de Frutas</h3>
            <p>A colheita de frutíferas é uma atividade sazonal, geralmente ocorrendo durante os meses de [inserir meses]. As frutas disponíveis variam de acordo com a época do ano.</p>
            <p>Você receberá uma cesta e poderá colher as frutas diretamente dos pés. Ao final da atividade, as frutas colhidas serão pesadas e você poderá levá-las para casa (valor por quilo).</p>
            <p>É uma ótima oportunidade para ensinar as crianças sobre a origem dos alimentos e a importância da agricultura local.</p>
        `
    };

    botoesSaibaMais.forEach(botao => {
        botao.addEventListener('click', function() {
            const atividade = this.dataset.atividade;
            modalTitulo.textContent = document.querySelector(`#${atividade} h2`).textContent;
            modalDetalhes.innerHTML = detalhesAtividades[atividade] || '<p>Mais informações em breve.</p>';
            modal.style.display = 'block';
        });
    });

    botaoFecharModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});