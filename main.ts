input.onButtonPressed(Button.A, function () {
    功能 = 0
})
input.onButtonPressed(Button.AB, function () {
    功能 = 2
})
input.onButtonPressed(Button.B, function () {
    功能 = 1
})
input.onSound(DetectedSound.Loud, function () {
    原功能 = 功能
    功能 = 4
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    功能 = 3
})
input.onSound(DetectedSound.Quiet, function () {
    功能 = 原功能
})
let 原功能 = 0
let 功能 = 0
music.setVolume(7)
music.playTone(523, music.beat(BeatFraction.Whole))
功能 = 3
原功能 = 3
let direction = 3
basic.forever(function () {
    if (功能 == 0) {
        if (input.lightLevel() > 250) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            basic.showString("H")
        } else {
            basic.showNumber(input.temperature())
        }
    } else if (功能 == 1) {
        direction = 360 - input.compassHeading()
        if (direction < 22.5) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (direction < 67.5) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else if (direction < 112.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # # #
                . . . . .
                . . . . .
                `)
        } else if (direction < 157.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . # .
                . . . . #
                `)
        } else if (direction < 202.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else if (direction < 247.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                # . . . .
                `)
        } else if (direction < 292.5) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                `)
        } else if (direction < 337.5) {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
    } else if (功能 == 2) {
        basic.showNumber(input.soundLevel())
    } else if (功能 == 4) {
        while (功能 == 4) {
            music.playTone(988, music.beat(BeatFraction.Double))
            basic.showString("L")
        }
    } else {
        basic.showString("W")
    }
})
