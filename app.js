// Nav bar active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      // Add active class to the link corresponding to the current section
      let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};




document.getElementById('loginBtn').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'login.html';  // Redirect to the second page (hacked.html)
  });
  document.getElementById('SignUpBtn').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'signup.html';  // Redirect to the second page (hacked.html)
  });





// thumbnails cursor
const items = document.querySelectorAll('.thumbnail .btn');

// Function to reduce opacity for other images
items.forEach(item => {
  item.addEventListener('mouseenter', function() {
    // Add "dimmed" class to all items except the hovered one
    items.forEach(el => {
      if (el !== this) {
        el.classList.add('dimmed');
      }
    });
  });

  item.addEventListener('mouseleave', function() {
    // Remove "dimmed" class when mouse leaves
    items.forEach(el => {
      el.classList.remove('dimmed');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail .btn'); // Select all thumbnail buttons
  const page1 = document.querySelector('.page1'); // The section where the background will change
  const title = document.querySelector('.f-title .text'); // The title to change
  const description = document.querySelector('.slider .list .item .content .description'); // The description to change

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          // Get the data from the clicked thumbnail
          const bgImage = thumbnail.getAttribute('data-bg');
          const newTitle = thumbnail.getAttribute('data-title');
          const newDesc = thumbnail.getAttribute('data-desc');

          // Change the background image
          page1.style.backgroundImage = `url(${bgImage})`;

          // Change the title text
          title.textContent = newTitle;

          // Change the description text
          description.textContent = newDesc;
      });
  });
});


