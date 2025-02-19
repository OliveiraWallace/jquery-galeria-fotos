$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-canceclar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(event) {
        event.preventDefault();
        const enderecoImagemNova = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></>');
        $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoImagemNova}" target="_blank" title~"Ver imagem em tamanho real">
            Ver imagem em tamanho real
            </a>
            </div>`).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
            $('#endereco-imagem-nova').val('');
            $('#endereco-imagem-nova').focus();
    })
})