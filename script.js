function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function HomepageAnimation() {
    gsap.set(".rowcontainer", {
        scale: 3,
    })
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            scrub: .5,
            start: "top top",
            end: "bottom bottom",
      

        },
    })


        .to(".vidodiv", {

            '--clip': "0%",
            ease: Power2,

        }, "a")
        .to(".rowcontainer", {
            scale: 1,
            ease: Power2,

        }, "a")
        .to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power4,

        }, "b")
        .to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power4,

        }, "b")


}
function CardAnimation() {
    document.querySelectorAll(".card").forEach((card) => {

        let t2 = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                scrub: .5,
                start: "50% 50%",
                end: "bottom bottom",
              
            },

        })
        t2.to(card, {
            backgroundColor: "#000",
            duration: .5,
            color: "#AEDEE0",
            ease: Power2,
        })
    })

}
function RealAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,

        },
        xPercent: -200,
        ease: Power4,
    })
}
function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", (e) => {
            const pic = e.target.querySelector(".picture")
            console.log(e.target.querySelector(".bluebox"))
            const bluebox = e.target.querySelector(".bluelayer")

            gsap.to(pic, {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, e.clientX),
                ease: Power2,
                duration: .3,
            })
            gsap.to(bluebox, {
                height: "100%",
                duration: .3,
            })
        })
        el.addEventListener("mouseleave", (e) => {
            const pic = e.target.querySelector(".picture")
            const bluebox = e.target.querySelector(".bluelayer")

            gsap.to(pic, {
                opacity: 0,
                ease: Power4,
                duration: .3,
            })
            gsap.to(bluebox, {
                top: 0,
                height: "0%",
                duration: .3,
            })


        })
    })
}
function textAnimation() {
    var clutter = "";
    document.querySelector(".textpara").textContent.split("").forEach(function (e) {
        if (e === "") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })

    document.querySelector(".textpara").innerHTML = clutter
    gsap.set(".textpara span", {
        opacity: .4,
    })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 30%",
            end: "80% 50%",
            scrub: true,
         


        },
        opacity: 1,
        stagger: .03,
        skewX: -30,
        ease: Power2,
    })
}
function capsulesAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,



        },
        y: 0,
        ease: Power4,
    })
}
function colorchangeAnimation() {
    document.querySelectorAll(".section")
        .forEach((section) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 50%",
                end: "bottom 50%",

                onEnter: function () {
                    document.body.setAttribute("theme", section.dataset.color)
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", section.dataset.color)
                }
            })
        })

}
loco();
colorchangeAnimation();
HomepageAnimation();
CardAnimation()
RealAnimation();
teamAnimation();
textAnimation()
capsulesAnimation()