let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');
let word = document.querySelectorAll(".word")

// let lastScrollY = 0
// const nav= document.querySelector('nav')
// window.addEventListener('scroll', () => {
//     const currentScrollY = window.scrollY
//     if (currentScrollY > lastScrollY) {
//         console.log('scroll Down')   
//         nav.classList.add('hidden')
//     } else {
//         console.log('scroll up')
//         nav.classList.remove('hidden')
//     }
//     lastScrollY = currentScrollY
// })


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector(' nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);
};


function page1Animation() {
    var tl1 = gsap.timeline()
    tl1.from("nav a, nav ,.logo ,#button1", {
        y: -30,
        duration: 0.7,
        delay: 1,
        opacity: 0,
        stagger: 0.19,
    })

    // tl1.from("#text1,#text2,#text3",{
    //    y:-300,
    //    duration:0.2,
    //    opacity:0,
    //    delay:.1,
    //    stagger:.3

    // })
    tl1.from("#text1", {
        x: -300,
        duration: 0.2,
        opacity: 0,
        delay: .1,
    }, "lebro")


    tl1.from("#text2", {
        x: 300,
        duration: 0.2,
        opacity: 0,
        delay: .2,
    }, "lebro")


    tl1.from("#text3", {
        x: -300,
        duration: 0.2,
        opacity: 0,
        delay: .3,
    }, "lebro")


    tl1.from("#peepe1,#peepe2", {
        y: 300,
        // duration:0.2,
        opacity: 0,
        delay: .1,
        stagger: .3

    })
};


function page2Animation() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            scroller: "body",
            start: "top 35%",
            end: "top 40%",
            // markers:true,
            scrub: 5,
        }
    })
    tl2.from(".about-blob", {
        z: 400,
        opacity: 0
    }, "pee")
    tl2.from(".about-img", {
        y: 400,
        opacity: 0
    }, "pee")

    tl2.from(".heading", {
        x: 300,
        opacity: 0
    })
    tl2.from(".change-text", {
        y: 300,
        opacity: 0,

    })
    tl2.from(".about-data p", {
        z: 300,
        opacity: 0,

    })

}



function page3Animation() {
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            scroller: "body",
            start: "top 45%",
            end: "top -75%",
            // markers:true,
            scrub: 2,
        }
    })
    tl3.from(".ser", {
        y: -40,
        opacity: 0,
        duration: 0.5
    }, "gg")
    tl3.from("#pp", {
        y: 40,
        opacity: 0,
        duration: 0.5
    }, "gg")

    tl3.from("#l1p1", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "l1")
    tl3.from("#l1p2", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "l1")
    tl3.from("#l2p1", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "l2")
    tl3.from("#l2p2", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "l2")
    tl3.from("#l3p1", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "l3")
    tl3.from("#l3p2", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "l3")
    tl3.from("#l4p1", {
        x: -300,
        opacity: 0,
        duration: 1
    }, "l4")
    tl3.from("#l4p2", {
        x: 300,
        opacity: 0,
        duration: 1
    }, "l4")
}



function page4Animation() {
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".projects",
            scroller: "body",
            start: "top 35%",
            end: "top 75%",
            // markers:true,
            scrub: 2
        }
    })
    tl4.from("#proo", {
        y: 100,
        opacity: 0,
        duration:4
    })
    tl4.from("#pro", {
        y: 200,
        opacity: 0,
        duration:4
    })
    tl4.from("#c1 ,#c2,#c3", {
        x: -2000,
        stagger: 4,
        opacity: 0,
        duration:100,
        delay:10
    })
    tl4.from(".p-content", {
        y: 200,
        stagger: 1,
        opacity: 0,
        duration:1
    }) 
}


// Floating shapes animation
gsap.to(".circle", {
    y: 100,
    repeat: -1,
    yoyo: true,
    duration: 4,
    ease: "power1.inOut"
});

gsap.to(".square", {
    x: 100,
    repeat: -1,
    yoyo: true,
    duration: 5,
    ease: "power1.inOut"
});

gsap.to(".triangle", {
    rotation: 360,
    repeat: -1,
    duration: 6,
    ease: "power2.inOut"
});


function page5Animation() {
    var tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact",
            scroller: "body",
            start: "top 35%",
            end: "top 75%",
           
            toggleActions: "restart none none none"
        }
    })
    tl5.from(".section-title", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power2.out"
    })

   
    tl5.from(".form-container", {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power2.out"
    })
    tl5.from(".form-group", {
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    })
}


page1Animation()
page2Animation()
page3Animation()
page4Animation()
page5Animation()






const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)