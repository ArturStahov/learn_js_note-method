// Intersection Observer with unobserver (lezy load images)
const images = document.querySelectorAll(".page-img");

const lezyLoad = targets => {
  const options = {
    rootMargin: "100px"
  };

  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("load images");
        const image = entry.target;
        const src = image.dataset.leazy;
        image.src = src;
        observer.unobserve(image);
      }
    });
  };
  const io = new IntersectionObserver(onEntry, options);
  targets.forEach(target => io.observe(target));
};

lezyLoad(images);
