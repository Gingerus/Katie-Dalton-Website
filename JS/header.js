const template = document.createElement('template');

template.innerHTML = `
<div class="header-wrapper">
    <button class="mobile-menu" aria-label="Toggle menu">&#9776;</button>
    <header>   
        <h1>Katie & Dalton</h1>
        <p>September 6th, 2025</p>

        <nav class="horizontal">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="wedding_details.html">Details</a></li>
                <li><a href="Registry.html">Registry</a></li>
                <li><a href="RSVP.html">RSVP</a></li>
                <li><a href="Hotels.html">Hotels</a></li>
            </ul>
        </nav>
        
    </header>
    </div>`
;


document.body.prepend(template.content); 
// document.body.appendChild(template.content);


// Toggle menu
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav.horizontal');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
});