let currentSlideID = 1;
    const sliderElement = document.getElementById('slider');
    const sliderElement1 = document.getElementById('slider1');
    const totalSlides = sliderElement.childElementCount;
    const totalSlides1 = sliderElement1.childElementCount;

    function next() {
      currentSlideID++;
      if (currentSlideID > totalSlides) {
        currentSlideID = 1;
      }
      showSlide();
    }

    function next1() {
      currentSlideID++;
      if (currentSlideID > totalSlides1) {
        currentSlideID = 1;
      }
      showSlide1();
    }

    function showSlide() {
      const slides = sliderElement.getElementsByTagName('li');
      for (let i = 0; i < totalSlides; i++) {
        const element = slides[i];
        if (currentSlideID === i + 1) {
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        }
      }
    }

    function showSlide1() {
      const slides1 = sliderElement1.getElementsByTagName('li');
      for (let i = 0; i < totalSlides1; i++) {
        const element1 = slides1[i];
        if (currentSlideID === i + 1) {
          element1.classList.remove('hidden');
        } else {
          element1.classList.add('hidden');
        }
      }
    }

    // Show the first slide initially
    showSlide();
    showSlide1();
