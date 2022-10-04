"use strict";
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
tl.from(".navbar", {
    y: "-100px",
    duration: 0.5,
    // delay: 0.5,
})
    .from(".image", {
    x: "100px",
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})
    .from(".title", {
    opacity: 0,
    y: "100px",
    duration: 1,
    // delay: 0.5,
})
    .from(".subtitle", {
    opacity: 0,
    x: "-100px",
    duration: 0.5,
    // delay: 0.5,
})
    .from(".button", {
    opacity: 0,
    duration: 1,
    // delay: 0.5,
})
    .from(".transactions", {
    opacity: 0,
    duration: 0.3,
})
    .from(".transactions-item", {
    opacity: 0,
    duration: 0.7,
    stagger: 0.25,
    // delay: 1,
});
