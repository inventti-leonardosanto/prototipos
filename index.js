import './scss/theme'
import bg from './img/bg.jpg'
import logo from './img/logo.png'

$(function() {
    $('#select-all').on('click', () => {
        let checkboxes = $(':checkbox');
        let checked = $(checkboxes[0]).is(':checked');

        if(!checked)
            $('#select-all').addClass('blue white-text');
        else
            $('#select-all').removeClass('blue white-text');

        for(let i=0; i<checkboxes.length; i++) {
            $(checkboxes[i]).prop('checked', !checked);
        }
    });

    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav({
        edge: 'right'
    });

    //$("#user-benefits").modal('open');
});