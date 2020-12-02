input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    功能 = 0
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    功能 = 2
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    功能 = 1
})
input.onLogoEvent(TouchButtonEvent.Touched, function on_logo_touched() {
    
    功能 = 3
})
let 功能 = 0
music.setVolume(7)
music.playTone(523, music.beat(BeatFraction.Whole))
功能 = 3
basic.forever(function on_forever() {
    if (功能 == 0) {
        basic.showNumber(input.temperature())
    } else if (功能 == 1) {
        basic.showNumber(input.compassHeading())
    } else if (功能 == 2) {
        basic.showNumber(input.lightLevel())
    } else {
        basic.showString("WAIT")
    }
    
})
