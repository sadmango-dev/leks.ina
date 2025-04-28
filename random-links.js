//Yes, I don't know Java, ChatGPT helped me with this

function randomizeLinks() {
    const links = document.querySelectorAll('.link');
    const h3 = document.querySelector('h3');
    const footer = document.querySelector('footer');

    const topLimit = h3.getBoundingClientRect().bottom + window.scrollY + 10; // bottom of h3 + 10px
    const bottomLimit = footer.getBoundingClientRect().top + window.scrollY - 60; // top of footer - 60px

    const pageWidth = document.body.clientWidth;

    links.forEach(link => {
      const randomTop = topLimit + Math.random() * (bottomLimit - topLimit);
      const randomLeft = Math.random() * (pageWidth - link.offsetWidth); // prevent overflow

      link.style.top = `${randomTop}px`;
      link.style.left = `${randomLeft}px`;
    });
  }

  // Randomize positions on page load
  randomizeLinks();

  // Randomize again whenever you click anywhere
  document.body.addEventListener('click', randomizeLinks);

  // Optional: also randomize if the window is resized
  window.addEventListener('resize', randomizeLinks);