const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


var searchboxForm =
    $("#home-search-box form")
var searchboxInput = 
    $("#home-search-box form input")
var searchboxIcon = 
    $("#home-search-box form .fas")
var sliderElement = 
    $("#home-slider img")
var movieTrailer = document.getElementById("trailer-movie")
/* Logic autoplay trailer */
const isTrailerError = false
const app = {
    check: function(){
        movieTrailer.querySelector("source").onerror = function (e){
            isTrailerError = true
        }
    },
    render: function(){
        movieTrailer.onmouseleave = function (e) {
            if (!isTrailerError && e.returnValue && movieTrailer.played){  
                movieTrailer.pause()
            }
        }
        movieTrailer.onmouseover = function (e) {
            if (!isTrailerError && e.returnValue && movieTrailer.paused){
                movieTrailer.play()
            }
        }
    },
    /* Header scroll event */
    headerscroll: function(){
        let header = $("#header")
        document.onscroll = function(){
            if (window.scrollY <= 20){
                header.classList.remove("header-background")
            }else{
                header.classList.add("header-background")
            }
        }
    },
    start: function(){
        this.check()
        this.headerscroll()
        this.render()
    },
}
app.start()
/* Search box click event */
searchboxIcon.onclick = function(e){
    var isJustClick = e.returnValue
    var isFormOpen = !( searchboxForm.className.search("onclick-searchbox") && 
        searchboxInput.className.search("onclick-searchbox") && 
        searchboxIcon.className.search("onclick-searchbox") )
    var ValueInBox = searchboxInput.value.trim()
    var checkValueinBox = ValueInBox !== "" ? true : false
    let addEvent = function(){
        searchboxForm.classList.add("onclick-searchbox-form")
        searchboxInput.classList.add("onclick-searchbox-input")
        searchboxIcon.classList.add("onclick-searchbox-searchicon")
    }
    let removeEvent = function(){
        searchboxForm.classList.remove("onclick-searchbox-form")
        searchboxInput.classList.remove("onclick-searchbox-input")
        searchboxIcon.classList.remove("onclick-searchbox-searchicon")
    }

    if (isJustClick && isFormOpen == false){
        if (checkValueinBox)
            console.log(ValueInBox)
        addEvent()
        /* Logic search movies by value */
    }else if (isFormOpen == true){
        if (checkValueinBox)
            console.log(ValueInBox)
        else removeEvent()
    }else{
        removeEvent()
    }
}

/* Recommended movie new */
const moviesRecommended_List = [
    "Avatar 2",
    "Chìa khóa trăm tỷ",
    "Thợ săn cổ vật",
    "Thế giới khủng long: Lãnh địa",
    "All of us are dead",
    "Happiness"
]
var totalOfMovies = moviesRecommended_List.length - 1;
var indexOfMovie = 0;
setInterval(function(){
    searchboxInput.setAttribute("placeholder",moviesRecommended_List[indexOfMovie])
    indexOfMovie = indexOfMovie === totalOfMovies ? 0 
        : (0 <= indexOfMovie < totalOfMovies ? indexOfMovie+=1 : 0)
    /*sliderElement.setAttribute("src","./assets/img/all-of-us-are-dead (2).jpg")*/
},5000)
