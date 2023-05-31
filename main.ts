let Número = 0
let tempo = 0
let status = 0
input.onPinPressed(TouchPin.P0, function () {
    Número += 1
    music.playTone(131, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.No)
    basic.pause(100)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    music.playTone(880, music.beat(BeatFraction.Whole))
    basic.showString("E")
    basic.showNumber(Número)
    basic.pause(2000)
})
input.onButtonPressed(Button.A, function () {
    Número = 0
    tempo = 0
    status = 1
    music.playTone(988, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.playTone(880, music.beat(BeatFraction.Whole))
    basic.showString("T")
    basic.showNumber(tempo)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(523, music.beat(BeatFraction.Whole))
    status = 2
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    if (status == 1) {
        tempo += 1
        basic.showIcon(IconNames.SmallHeart)
    }
})
