import './scss/theme'

$(function() {
    $('#select-all').on('click', () => {
        let checkboxes = $(':checkbox');
        let checked = $(checkboxes[0]).is(':checked');

        for(let i=0; i<checkboxes.length; i++) {
            $(checkboxes[i]).prop('checked', !checked);
        }
    })
});