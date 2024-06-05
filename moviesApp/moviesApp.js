$(function() {
    // Rating event listener to display rating value beside range bar
    $('#rating').on('input change', function() {
        $('#rating-value').text(`${$(this).val()}/10`);
    });


    // Index Counter to use in class name
        let i =0;

    // Submit form event
    $('#submitButton').on("click", function(e) {
        e.preventDefault();
        
        // Create table elements, insert class with index counter
        $('tbody').append(`<tr class="index${i}"></tr>`);
        $(`tbody tr.index${i}`).append('<td></td>');

        // Add title data and create a new data element
        $(`tr.index${i} td`).text($('#title-input').val()).after('<td></td>');

        // add rating data
        $(`tr.index${i} td:last-child`).text(`${$('#rating').val()}/10`);

        // add delete button with index counter in class
        $(`tr.index${i}`).append(`<button class="deleteBttn"> X </button>`);

        // Reset form values
        $('#title-input').val('');
        $('#rating').val(0);
        $('#rating-value').text(`${$('#rating').val()}/10`);

        // Add to counter for next index
        i++;               
    })

    // Delete row event (.deleteBttn was created after DOM load, must use event delegation)
    $('tbody').on("click", ".deleteBttn", function(e) {

        $(this).parent().remove();
    })
})