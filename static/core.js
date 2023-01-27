const canvas_ = document.getElementById("canvas")
const presetAdobeBackgroundColor = "#87bcf6"
const presetAdobeFrontColor = "#252653"
const presetAdobeText = "Ps"

let adobeConfig = {}

const downloadAs = (type) => {
    switch (type) {
        case "JPG": {
            canvas_.toBlob((b) => {
                saveAs(b, "adbode_style_icon.jpg")
            })
            break
        }
        case "PNG": {
            canvas_.toBlob((b) => {
                saveAs(b, "adbode_style_icon.png")
            })
            break
        }
        case "ICO": {
            canvas_.toBlob((b) => {
                saveAs(b, "adbode_style_icon.ico")
            })
            break
        }
    }
}

const initAdobeIcon = () => {
    document.getElementById("backgroundColorPicker").value = presetAdobeBackgroundColor
    document.getElementById("frontColorPicker").value = presetAdobeFrontColor
    generateAdobeIcon(adobeConfig)
}

const generateAdobeIcon = (config) => {
    const ctx = canvas_.getContext("2d")
    ctx.clearRect(0, 0, 500, 500)
    const {
        backgroundColor = presetAdobeBackgroundColor,
        frontColor = presetAdobeFrontColor,
        text = presetAdobeText,
        shape = "square",
        textFont = "bold 300px Adobe Clean",
        width = 500,
        height = 500,
    } = config
    if (shape === "square") {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, width, height)
        ctx.fillStyle = frontColor
        ctx.fillRect(width / 12, height / 12, width / 6 * 5, height / 6 * 5)
        ctx.fillStyle = backgroundColor
        ctx.textAlign = "center"
        ctx.font = textFont
        ctx.fillText(text, width / 2, height / 10 * 7, width / 4 * 3)
    } else {
        ctx.beginPath()
        ctx.arc(width / 2, height / 2, width / 2, 0, 2 * Math.PI)
        ctx.fillStyle = backgroundColor
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.arc(width / 2, height / 2, width / 21 * 10, 0, 2 * Math.PI)
        ctx.fillStyle = frontColor
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = backgroundColor
        ctx.textAlign = "center"
        ctx.font = textFont
        ctx.fillText(text, width / 2, height / 10 * 7, width / 4 * 3)
    }
    

}

const handleBackgroundColorPicker = (e) => {
    adobeConfig.backgroundColor = document.getElementById("backgroundColorPicker").value
    generateAdobeIcon(adobeConfig)
}

const handleFrontColorPicker = (e) => {
    adobeConfig.frontColor = document.getElementById("frontColorPicker").value
    generateAdobeIcon(adobeConfig)
}
const handleText = (e) => {
    adobeConfig.text = document.getElementById("textInput").value
    generateAdobeIcon(adobeConfig)
}

const handleRadio = (e, type) => {
    adobeConfig.shape = type
    generateAdobeIcon(adobeConfig)
}
initAdobeIcon()






