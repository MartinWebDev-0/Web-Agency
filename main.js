

  const hamburger = document.getElementById('hamburger');
  const links = document.querySelector('.links');

  // event listener  //
  hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
  });

