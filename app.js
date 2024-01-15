const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.fortech(
    (slide, index) =>{
        slide.style.left = `${index * 100}%`
    }
)
const goPrev =()=> {
    counter--
    slideImage()
}
const goNext =()=> {
    counter++
    slideImage()
}
const slideImage = ()=>{
    slides.fortech(
     (slide) =>{
        slide.style.transform =`translateX(-${counter*100}%)`
     }
    )
}