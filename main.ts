input.onPinPressed(TouchPin.P0, function () {
    Número += 1
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.No)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showNumber(Número)
    basic.pause(2000)
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.playTone(880, music.beat(BeatFraction.Whole))
    basic.showNumber(tempo)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
	
})
let tempo = 0
let Número = 0
Número = 0
tempo = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    tempo += 1
})
