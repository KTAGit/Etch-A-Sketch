const container = document.querySelector(".container")
const gridInput = document.querySelector("#grid-input")
const penColor = document.querySelector("#Pen-color")
const bgColorPicker = document.querySelector("#background-color")
const cleanBoardBtn = document.querySelector(".reset")

function containerAndDivs (num) {
    container.style.display = "grid"
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`
    let amount = num * num
    for (let i = 0; i < amount; i++) {
        var divs = document.createElement("div")
        container.appendChild(divs)   
        pen(divs)
    }
}

function pen(divs) {
    cleanBoardBtn.addEventListener("click", () => {
        bgColorPicker.value = "#ffffff"
        divs.style.backgroundColor = "#ffffff"
    })
    divs.addEventListener("mouseover", () => {
        let value = penColor.value
        divs.style.backgroundColor = value
    })
    bgColorPicker.addEventListener("input", () => {
            divs.style.backgroundColor = bgColorPicker.value
    })
}

gridInput.addEventListener("input", () => {
    cleanBoardBtn.click()
    if(Number(gridInput.value) <= 100 && Number(gridInput.value) >= 1){
        containerAndDivs(Number(gridInput.value))
    }
})

containerAndDivs(Number(gridInput.value = 16))

