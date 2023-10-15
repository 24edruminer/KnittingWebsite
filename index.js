var yarnContainer = document.getElementById("yarn-container");
var yarnImage = document.getElementById("KnitStrip");
var maxOffset = (yarnContainer.children.length - 2) * -46 + 5;
var offset = maxOffset
var scrollFactor = 5;
adjustScrollContent(0)
window.addEventListener("wheel", (event) => {
    adjustScrollContent(event.deltaY)
})

function adjustScrollContent(dY) {
    if (dY > 0) {
        console.log("down")
    }else if (dY < 0) {
        console.log("up")
    }

    maxWidth = (yarnContainer.children.length - 3) * 23 - 10;
    offset += dY / 100 * scrollFactor;
    if (offset > -1 * maxWidth - 2) {
        offset = -maxWidth - 2;
    }

    if (offset < maxOffset) {
        offset = maxOffset
    }
    console.log(maxWidth, offset, maxOffset)
    yarnContainer.setAttribute("style", "left: " + (maxWidth + offset) + "vw;");
    yarnImage.setAttribute("style", "width: " + ((maxOffset - offset) * -1 + 27) +"vw;")
}

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