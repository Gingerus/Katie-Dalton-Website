const slideshow = document.createElement('template');

slideshow.innerHTML =  `<section class="slideshow-container">

        <div class="mySlides fade">
        <img id="FirstImage" src="Images/Horizontal/IMG_6168.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6173.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6174.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6179.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6622.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6623.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6628.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6640.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6641.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6642.JPG" style="width:100%">
        </div>


        <!-- 11th Image Below --!>
        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6643.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6654.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6655.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6657.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6662.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6664.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6666.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6667.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6669.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6670.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6672.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6673.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6676.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6683.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6686.JPG" style="width:100%">
        </div>

        <div class="mySlides fade">
        <img src="Images/Horizontal/IMG_6689.JPG" style="width:100%">
        </div>


        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    <br>
    
        </section> 
    `

    const main = document.querySelector('main');

    if (main) {main.appendChild(slideshow.content);

        // Notify slideshow.js it's ready to go
    document.dispatchEvent(new Event("slideshowReady"));
    } else {
    console.warn("<main> element not found — slideshow not inserted.");
    }
    document.body.appendChild(slideshow.content);


 