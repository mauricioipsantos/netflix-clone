$('.owl-carousel').owlCarousel({
    // loop true ao chegar no final, volta ao primeiro item 
    // false, trava no ultimo item 
    loop:false,
    // margem entre um item e outro (espaço) 
    margin:10,
    // botao de navegacao < > 
    nav:false,
    // responsividade, 0 a 599px, 1 item na tela, 600 a 999 3 itens, mais de 1000px 5 itens na tela 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})