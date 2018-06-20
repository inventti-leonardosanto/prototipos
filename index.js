import './scss/theme'
import bg from './img/bg.jpg'
import logo from './img/logo.png'

$(function() {
    $('.selecionar-tudo').on('click', () => {
        let checkboxes = $(':checkbox');
        let checked = $(checkboxes[0]).is(':checked');

        if(!checked)
            $('.selecionar-tudo').addClass('blue white-text');
        else
            $('.selecionar-tudo').removeClass('blue white-text');

        for(let i=0; i<checkboxes.length; i++) {
            $(checkboxes[i]).prop('checked', !checked);
        }
    });

    $('.mostrar-pesquisa').on('click', () => {
        $('.filter').addClass('hide');
        $('.campo-pesquisa').removeClass('hide');
    })

    $('.pesquisar').on('click', () => {
        $('.campo-pesquisa').addClass('hide');
        $('.filter').removeClass('hide');
    })

    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav({
        edge: 'right'
    });

    //$("#user-benefits").modal('open');
});