const canvas_ = document.getElementById("canvas")
const presetAdobeColor1 = "#87bcf6"
const presetAdobeColor2 = "#252653"
const presetAdobeText = "Ps"
const presetJBColor1 = "#fe2d5d"
const presetJBColor2 = "#047cf7"
const presetJBColor3 = "#8e53a7"
const presetJBColor4 = "#f97b0a"
const presetJBText = "IJ"
const presetJBRandoms = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), 
    Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]


let adobeConfig = {}
let jbConfig = {}

const switchToAdobe = () => {
    document.getElementById("Adobe").style.display = "inline-block"
    document.getElementById("JB").style.display = "none"
    document.getElementById("adobePreset").style.display = "inline-block"
    document.getElementById("jbPreset").style.display = "none"
    initAdobeIcon()
}

const switchToJB = () => {
    document.getElementById("Adobe").style.display = "none"
    document.getElementById("JB").style.display = "inline-block"
    document.getElementById("adobePreset").style.display = "none"
    document.getElementById("jbPreset").style.display = "inline-block"
    initJBIcon()
    
}

const downloadAs = (type, style) => {
    switch (type) {
        case "JPG": {
            canvas_.toBlob((b) => {
                saveAs(b, style + "_style_icon.jpg")
            }, "image/jpeg")
            break
        }
        case "PNG": {
            canvas_.toBlob((b) => {
                saveAs(b, style + "_style_icon.png")
            })
            break
        }
        case "ICO": {
            canvas_.toBlob((b) => {
                saveAs(b, style + "_style_icon.ico")
            }, 'image/vnd.microsoft.icon', '-moz-parse-options:format=bmp;bpp=32')
            break
        }
    }
}

const initAdobeIcon = () => {
    document.getElementById("backgroundColorPicker").value = presetAdobeColor1
    document.getElementById("frontColorPicker").value = presetAdobeColor2
    generateAdobeIcon(adobeConfig)
}

const generateAdobeIcon = (config) => {
    const ctx = canvas_.getContext("2d")
    ctx.clearRect(0, 0, 500, 500)
    const {
        color1 = presetAdobeColor1,
        color2 = presetAdobeColor2,
        text = presetAdobeText,
        shape = "square",
        textFont = "bold 300px Adobe Clean",
        width = 500,
        height = 500,
    } = config
    if (shape === "square") {
        ctx.fillStyle = color1
        ctx.fillRect(0, 0, width, height)
        ctx.fillStyle = color2
        ctx.fillRect(width / 12, height / 12, width / 6 * 5, height / 6 * 5)
        ctx.fillStyle = color1
        ctx.textAlign = "center"
        ctx.font = textFont
        ctx.fillText(text, width / 2, height / 10 * 7, width / 4 * 3)
    } else {
        ctx.beginPath()
        ctx.arc(width / 2, height / 2, width / 2, 0, 2 * Math.PI)
        ctx.fillStyle = color1
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.arc(width / 2, height / 2, width / 21 * 10, 0, 2 * Math.PI)
        ctx.fillStyle = color2
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = color1
        ctx.textAlign = "center"
        ctx.font = textFont
        ctx.fillText(text, width / 2, height / 10 * 7, width / 4 * 3)
    }
    

}

const handleBackgroundColorPicker = (e) => {
    adobeConfig.color1 = document.getElementById("backgroundColorPicker").value
    generateAdobeIcon(adobeConfig)
}

const handleFrontColorPicker = (e) => {
    adobeConfig.color2 = document.getElementById("frontColorPicker").value
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

const presetAdobe = (c1, c2) => {
    adobeConfig.color1 = c1
    document.getElementById("backgroundColorPicker").value = c1
    document.querySelector('#backgroundColorPicker').dispatchEvent(new Event('input', { bubbles: true }))
    adobeConfig.color2 = c2
    document.getElementById("frontColorPicker").value = c2
    document.querySelector('#frontColorPicker').dispatchEvent(new Event('input', { bubbles: true }))
    generateAdobeIcon(adobeConfig)
}

const initJBIcon = () => {
    document.getElementById("jbColorPicker1").value = presetJBColor1
    document.querySelector('#jbColorPicker1').dispatchEvent(new Event('input', { bubbles: true }))
    document.getElementById("jbColorPicker2").value = presetJBColor2
    document.querySelector('#jbColorPicker2').dispatchEvent(new Event('input', { bubbles: true }))
    document.getElementById("jbColorPicker3").value = presetJBColor3
    document.querySelector('#jbColorPicker3').dispatchEvent(new Event('input', { bubbles: true }))
    document.getElementById("jbColorPicker4").value = presetJBColor4
    document.querySelector('#jbColorPicker4').dispatchEvent(new Event('input', { bubbles: true }))
    generateJBIcon(jbConfig)
}

const generateJBIcon = (config) => {
    const ctx = canvas_.getContext("2d")
    ctx.clearRect(0, 0, 500, 500)
    const {
        color1 = presetJBColor1,
        color2 = presetJBColor2,
        color3 = presetJBColor3,
        color4 = presetJBColor4,
        text = presetJBText,
        random = presetJBRandoms,
        shape = "sharp",
        textFont = "bold 160px 'Tahoma'",
        width = 500,
        height = 500,
    } = config
    if (shape === "sharp") {
        let linearGradient1 = ctx.createLinearGradient(0, 0, width * random[0], width * random[1])
        linearGradient1.addColorStop(0, color1)
        linearGradient1.addColorStop(1, color3)
        drawRect(ctx, random.slice(2, 10), linearGradient1, 1, width)
        let linearGradient2 = ctx.createLinearGradient(0, width * random[0], 0, width * random[1])
        linearGradient2.addColorStop(0, color2)
        linearGradient2.addColorStop(1, color4)
        drawRect(ctx, random.slice(10, 20), linearGradient2, 2, width)
        let linearGradient3 = ctx.createLinearGradient(0, width * random[0], width * random[1], 0)
        linearGradient3.addColorStop(0, color1)
        linearGradient3.addColorStop(1, color3)
        drawRect(ctx, random.slice(18, 26), linearGradient3, 3, width)
        ctx.fillStyle = "#000000"
        ctx.fillRect(width / 4, height / 4, width / 2, height / 2)
        ctx.fillStyle = "#ffffff"
        ctx.textAlign = "left"
        ctx.font = textFont
        ctx.fillText(text, width / 4 + 10, height / 10 * 7 - 70, width / 2 - 10)
        ctx.fillRect(width / 4 + 20, height / 4 * 3 - 40, 100, 20)
    }
}
/*
  ----------
  | 1 | 1 | 2 |
  ----------
  | 123 | | 123 |
  ----------
  | 23| 2 | 3 |
  ---------
 */

const drawRect = (ctx, rand, linearGradient, order, width) => {
    if (order === 1) {
        ctx.fillStyle = linearGradient
        ctx.beginPath()
        ctx.moveTo(width / 3 * rand[0], width / 3 * rand[1])
        ctx.lineTo(width / 3 + width / 3 * rand[2], width / 3 * rand[3])
        ctx.lineTo(width / 3 * 2 + width / 3 * rand[4], width / 3 + width / 3 * rand[5])
        ctx.lineTo(width / 3 * rand[6], width / 3 + width / 3 * rand[7])
        ctx.closePath()
        ctx.fill()
    } else if (order === 2) {
        ctx.fillStyle = linearGradient
        ctx.beginPath()
        ctx.moveTo(width / 3 * 2 + width / 3 * rand[0], width / 3 * rand[1])
        ctx.lineTo(width / 3 * 2 + width / 3 * rand[2], width / 3 + width / 3 * rand[3])
        ctx.lineTo(width / 3 + width / 3 * rand[4], width / 3 * 2 + width / 3 * rand[5])
        ctx.lineTo(width / 3 * rand[6], width / 3 * 2 + width / 3 * rand[7])
        ctx.lineTo(width / 3 * rand[8], width / 3 + width / 3 * rand[9])
        ctx.closePath()
        ctx.fill()
    } else {
        ctx.fillStyle = linearGradient
        ctx.beginPath()
        ctx.moveTo(width / 3 * rand[0], width / 3 + width / 3 * rand[1])
        ctx.lineTo(width / 3 * 2 + width / 3 * rand[2], width / 3 + width / 3 * rand[3])
        ctx.lineTo(width / 3 * 2 + width / 3 * rand[4], width / 3 * 2 + width / 3 * rand[5])
        ctx.lineTo(width / 3 * rand[6], width / 3 * 2 + width / 3 * rand[7])
        ctx.closePath()
        ctx.fill()
    }
    
}

const handleJbColorPicker1 = (e) => {
    jbConfig.color1 = document.getElementById("jbColorPicker1").value
    generateJBIcon(jbConfig)
}
const handleJbColorPicker2 = (e) => {
    jbConfig.color2 = document.getElementById("jbColorPicker2").value
    generateJBIcon(jbConfig)
}
const handleJbColorPicker3 = (e) => {
    jbConfig.color3 = document.getElementById("jbColorPicker3").value
    generateJBIcon(jbConfig)
}
const handleJbColorPicker4 = (e) => {
    jbConfig.color4 = document.getElementById("jbColorPicker4").value
    generateJBIcon(jbConfig)
}
const handleJbText = (e) => {
    jbConfig.text = document.getElementById("jbTextInput").value
    generateJBIcon(jbConfig)
}
const handleRandomButton = (e) => {
    jbConfig.random =  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), 
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
    generateJBIcon(jbConfig)
}

const presetJb = (c1, c2, c3, c4) => {
    jbConfig.color1 = c1
    document.getElementById("jbColorPicker1").value = c1
    document.querySelector('#jbColorPicker1').dispatchEvent(new Event('input', { bubbles: true }))
    jbConfig.color2 = c2
    document.getElementById("jbColorPicker2").value = c2
    document.querySelector('#jbColorPicker2').dispatchEvent(new Event('input', { bubbles: true }))
    jbConfig.color3 = c3
    document.getElementById("jbColorPicker3").value = c3
    document.querySelector('#jbColorPicker3').dispatchEvent(new Event('input', { bubbles: true }))
    jbConfig.color4 = c4
    document.getElementById("jbColorPicker4").value = c4
    document.querySelector('#jbColorPicker4').dispatchEvent(new Event('input', { bubbles: true }))
    generateJBIcon(jbConfig)
} 

switchToAdobe()






