const template = document.createElement('template');

template.innerHTML =  `        <div class="slideshow-container">

            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
            <div class="numbertext">1 / 3</div>
            <img id="FirstImage" src="Images\Horizontal\IMG_6168.JPG" style="width:100%">
            </div>
        
            <div class="mySlides fade">
            <div class="numbertext">2 / 3</div>
            <img src="Images\Horizontal\IMG_6173.JPG" style="width:100%">
            </div>
        
            <div class="mySlides fade">
            <div class="numbertext">3 / 3</div>
            <img src="Images\Vertical\IMG_6165.JPG" style="width:100%">
            </div>
        
            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
    <br>
    
            <!-- The dots/circles -->
            <div style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        </div> `

document.body.appendChild(template.content);