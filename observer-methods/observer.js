const observerApi = new IntersectionObserver((entries, options) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("object is intersecting");

      entry.target.style.backgroundColor = generateRandomColor();
    }
  });
});

const observerElemRef = document.querySelector(".observer-elem");

observerApi.observe(observerElemRef);

const generateRandomColor = () => {
  const getRandomIntInclusive = (min, max) => {
    //функция рандомной генерации числа в диапазоне min max
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
