let rot = 0
let grün = 0
let blau = 0
basic.forever(function () {
    let weiß = 0
    rot = 0
    grün = 0
    blau = 0
    music.playTone(131, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 255; index++) {
        basic.setLedColor(basic.rgbw(
        rot,
        grün,
        blau,
        weiß
        ))
        basic.pause(50)
        rot += 1
    }
    for (let index = 0; index < 255; index++) {
        basic.setLedColor(basic.rgbw(
        rot,
        grün,
        blau,
        weiß
        ))
        basic.pause(10)
        grün += 1
    }
    for (let index = 0; index < 255; index++) {
        basic.setLedColor(basic.rgbw(
        rot,
        grün,
        blau,
        weiß
        ))
        basic.pause(10)
        blau += 1
    }
})
