原功能 = 0
功能 = 0
music.set_volume(7)
music.play_tone(523, music.beat(BeatFraction.WHOLE))
功能 = 3
原功能 = 3
direction = 3

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

def on_sound_loud():
    global 原功能, 功能
    原功能 = 功能
    功能 = 4
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_logo_touched():
    global 功能
    功能 = 3
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_sound_quiet():
    global 功能
    功能 = 原功能
input.on_sound(DetectedSound.QUIET, on_sound_quiet)

def on_forever():
    global direction
    if 功能 == 0:
        if input.light_level() > 250:
            music.play_tone(988, music.beat(BeatFraction.WHOLE))
            basic.show_string("H")
        else:
            basic.show_number(input.temperature())
    elif 功能 == 1:
        direction = 360 - input.compass_heading()
        if direction < 22.5:
            basic.show_leds("""
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                """)
        elif direction < 67.5:
            basic.show_leds("""
                . . . . #
                . . . # .
                . . # . .
                . . . . .
                . . . . .
                """)
        elif direction < 112.5:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # # #
                . . . . .
                . . . . .
                """)
        elif direction < 157.5:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . # .
                . . . . #
                """)
        elif direction < 202.5:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                """)
        elif direction < 247.5:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . # . . .
                # . . . .
                """)
        elif direction < 292.5:
            basic.show_leds("""
                . . . . .
                . . . . .
                # # # . .
                . . . . .
                . . . . .
                """)
        elif direction < 337.5:
            basic.show_leds("""
                # . . . .
                . # . . .
                . . # . .
                . . . . .
                . . . . .
                """)
        else:
            basic.show_leds("""
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                """)
    elif 功能 == 2:
        basic.show_number(input.sound_level())
    elif 功能 == 4:
        while 功能 == 4:
            music.play_tone(988, music.beat(BeatFraction.DOUBLE))
            basic.show_string("L")
    else:
        basic.show_string("W")
basic.forever(on_forever)
