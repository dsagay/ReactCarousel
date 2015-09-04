/*var carousel = {
	items: [
		{
			img: "/assets/img/carousel-1.jpg",
			caption: "Carousel title 1"
		},
		{
			img: "/assets/img/carousel-2.jpg",
			caption: "Carousel title 2"
		},
		{
			img: "/assets/img/carousel-3.jpg",
			caption: "Carousel title 3"
		},
		{
			img: "/assets/img/carousel-4.jpg",
			caption: "Carousel title 4"
		},
		{
			img: "/assets/img/carousel-5.jpg",
			caption: "Carousel title 5"
		},
	]
}
*/
var carousel = [
  {
    id         : "slide1",
    imagePath  : "/assets/img/carousel-1.jpg",
    imageAlt   : "Slide 1 Image",
    title      : "Slide 1",
    subtitle   : "Slide 1 Image SubTitle",
    text       : "Slide 1 Image Text",
    action     : "Slide 1 Image Action",
    actionHref : "href"
  },
  {
    id         : "slide2",
    imagePath  : "/assets/img/carousel-2.jpg",
    imageAlt   : "Slide 2 Image",
    title      : "Slide 2",
    subtitle   : "Slide 2 Image SubTitle",
    text       : "Slide 2 Image Text",
    action     : "Slide 2 Image Action",
    actionHref : "href"
  },
  {
    id         : "slide3",
    imagePath  : "/assets/img/carousel-3.jpg",
    imageAlt   : "Slide 3 Image",
    title      : "Slide 3",
    subtitle   : "Slide 3 Image SubTitle",
    text       : "Slide 3 Image Text",
    action     : "Slide 3 Image Action",
    actionHref : "href"
  },
   {
    id         : "slide4",
    imagePath  : "/assets/img/carousel-4.jpg",
    imageAlt   : "Slide 4 Image",
    title      : "Slide 4",
    subtitle   : "Slide  4 Image SubTitle",
    text       : "Slide 4 Image Text",
    action     : "Slide 4 Image Action",
    actionHref : "href"
  },
   {
    id         : "slide5",
    imagePath  : "/assets/img/carousel-5.jpg",
    imageAlt   : "Slide 5 Image",
    title      : "Slide 5",
    subtitle   : "Slide 5 Image SubTitle",
    text       : "Slide 5 Image Text",
    action     : "Slide 5 Image Action",
    actionHref : "href"
  },
];
carousel.currentState = 0;
module.exports = carousel;
  