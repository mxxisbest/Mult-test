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
basic.forever(function () {
    if (功能 == 0) {
        if (input.lightLevel() > 250) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            basic.showString("H")
        } else {
            basic.showNumber(input.temperature())
        }
    } else if (功能 == 1) {
        basic.showNumber(input.lightLevel())
    } else if (功能 == 2) {
        basic.showNumber(input.compassHeading())
    } else if (功能 == 4) {
        while (功能 == 4) {
            music.playTone(988, music.beat(BeatFraction.Double))
            basic.showString("L")
        }
    } else {
        basic.showString("W")
    }
})
