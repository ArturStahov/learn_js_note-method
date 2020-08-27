const onEntries = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("object is intersecting");

      entry.target.style.backgroundColor = generateRandomColor();
      //   observer.disconnect(); if need stop fn  observer
      //   observer.unobserve(entry); if need stopped observe for some element
    }
  });
};

const options = {
  rootMargin: "50px", //margin begin observe
  threshold: [0, 0.25, 0.5, 1] //areas elem views in browser viewport (default=1)
};

const observerApi = new IntersectionObserver(onEntries, options);

const observerElemRef = document.querySelector(".observer-elem");

observerApi.observe(observerElemRef);

const generateRandomColor = () => {
  const getRandomIntInclusive = (min, max) => {
    //fn random generate int min max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomColor = [0, 0, 0].map(elem => {
    elem = getRandomIntInclusive(0, 255);
    return elem;
  });

  return `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
};
