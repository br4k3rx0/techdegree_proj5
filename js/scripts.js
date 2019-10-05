lightbox.option({
    'showImageNumberLabel': false,
    'wrapAround': true
});

$(".search").keyup(function(){
    var caps = $('.photos a');
    var input = $(this).val().toLowerCase();
    // console.log(input);
    for(let i = 0; i < caps.length; i++) {
        let title = caps[i].dataset.title;

        if(title.toLowerCase().indexOf(input) == -1) {
            caps[i].classList.add("hidden");
        }else {
            caps[i].classList.remove("hidden");
        }
    }
})