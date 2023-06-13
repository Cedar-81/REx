export const carouselSettings = {
  className: "flex w-full",
  arrows: false,
  dots: false,
  infinite: true,
  speed: 3000,
  autoplaySpeed: 6000,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.9,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.8,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.8,
      },
    },
  ],
};

export const bannerCarouselSettings = {
  className: "w-full",
  arrows: false,
  dots: false,
  infinite: true,
  speed: 3000,
  autoplaySpeed: 8000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
};
