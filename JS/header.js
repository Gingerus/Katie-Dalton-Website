const template = document.createElement('template');

template.innerHTML =  `<header>
<h1>Katie & Dalton</h1>
<p>September 6th, 2025</p>


<nav class="horizontal">
    <ul>
        <li><a href="index.html"> Home </a></li>
        <li><a href="wedding_details.html"> Wedding Details </a></li>
        <li><a href="RSVP.html"> RSVP </a></li>
        <li><a href="Registry.html"> Registry </a></li>
        <li><a href="Hotels.html"> Hotels </a></li>
    </ul>
</nav>
</header>`

document.body.appendChild(template.content);