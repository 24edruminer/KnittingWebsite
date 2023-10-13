var yarnContainer = document.getElementById("yarn-container");
var offset = 0;
var scrollFactor = 5;
window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        console.log("down")
    }else if (event.deltaY < 0) {
        console.log("up")
    }

    offset -= event.deltaY / 100 * scrollFactor;
    if (offset > 0) {
        offset = 0;
    }

    maxWidth = (yarnContainer.children.length - 3) * 23 * -1 + 10; //make it negative to match sign of other stuff
    console.log(maxWidth)
    if (offset < maxWidth) {
        offset = maxWidth
    }
    yarnContainer.setAttribute("style", "left: " + offset + "vw");
})

resizeText();
function resizeText() {
    Array.from(yarnContainer.children).forEach((child) => {
        console.log(child.children[1])
        let i = 12 // let's start with 12px
        let overflow = false
        const maxSize = 128 // very huge text size
      
        while (!overflow && i < maxSize) {
          child.children[1].style.fontSize = `${i}px`
          overflow = child.scrollHeight > child.clientHeight
          if (!overflow) i++
        }
      
        // revert to last state where no overflow happened:
        child.children[1].style.fontSize = `${i}px`
        if (child.children[1].classList.contains("card-text-no-image")) {
            child.children[1].style.fontSize = `${i / 2}px`
        }
    })
}

addEventListener("resize", (event) => {
    resizeText();
});