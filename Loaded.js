
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function (){
    navbar.classList.toggle("active");
    menu.classList.toggle('fa-times')
});

window.oncsroll = () => {
    navbar.classList.remove("active");
};


//slider session
let sliderImages = document.querySelectorAll('.slide'),
        arrowLeft = document.querySelector('#arrow-left'),
        arrowRight = document.querySelector('#arrow-right'),
        current = 0;

        function reset(){
            for(let i = 0; i < sliderImages.length; i++){
                sliderImages[i].style.display = 'none';
            }
        }

        //init slider
        function startSlide(){
            reset();
            sliderImages[0].style.display = 'block';
        }

        //show prev
        function slideLeft(){
            reset();
            sliderImages[current - 1].style.display = 'block';
            current--;
        }

        //show next
        function slideRight(){
            reset();
            sliderImages[current + 1].style.display = 'block';
            current++;
        }

        //Left arrow click
        arrowLeft.addEventListener('click', function(){
            if(current === 0){
                current =  sliderImages.length;
            }
            slideLeft();
        });
        startSlide();
        
        //right arrow click
        arrowRight.addEventListener('click', function(){
            if(current === sliderImages.length - 1){
                current =  -1
            }
            slideRight();
        });
        startSlide();