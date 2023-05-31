let Número = 0
let tempo = 0
let status = 0
input.onPinPressed(TouchPin.P0, function () {
    Número += 1
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.No)
    basic.pause(1000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showNumber(Número)
    basic.pause(2000)
})
input.onButtonPressed(Button.A, function () {
    Número = 0
    tempo = 0
    status = 0
    music.playTone(392, music.beat(BeatFraction.Whole))
    status = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.playTone(880, music.beat(BeatFraction.Whole))
    basic.showNumber(tempo)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
    status = 2
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    if (status == 1) {
        tempo += 1
        basic.showIcon(IconNames.SmallHeart)
    } else if (status == 2) {
    	
    }
})
