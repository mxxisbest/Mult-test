def on_button_pressed_a():
    global 功能
    功能 = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global 功能
    功能 = 2
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global 功能
    功能 = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_touched():
    global 功能
    功能 = 3
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

功能 = 0
music.set_volume(7)
music.play_tone(523, music.beat(BeatFraction.WHOLE))
功能 = 3

def on_forever():
    if 功能 == 0:
        basic.show_number(input.temperature())
    elif 功能 == 1:
        basic.show_number(input.compass_heading())
    elif 功能 == 2:
        basic.show_number(input.light_level())
    else:
        basic.show_string("WAIT")
basic.forever(on_forever)
