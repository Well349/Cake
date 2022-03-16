gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-inicial-img" ,{
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.4,
}); 

gsap.from(".animate-h1" , {
    duration: 0.6,
    opacity: 0,
    y: -150,
});

gsap.from(".animate-h2" , {
    duration: 0.6,
    opacity: 0,
    x: -100,
    stagger: 0.4,

});

gsap.from(".animate-tortas" , {
    scrollTrigger: ".animate-tortas",
    duration:0.9,
    opacity: 0,
    y: -200,
    delay: 0.6,
    stagger: 0.4

});

gsap.from(".animate-brigadeiro" , {
    scrollTrigger: ".animate-brigadeiro",
    duration:0.8,
    opacity: 0,
    y: -200,
    delay: 0.7,
    stagger: 0.4,

});