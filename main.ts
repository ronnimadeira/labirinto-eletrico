input.onPinPressed(TouchPin.P0, function () {
    Número += 1
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.No)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(988, music.beat(BeatFraction.Whole))
    basic.showString("E")
    basic.pause(500)
    basic.showNumber(Número)
    basic.pause(500)
    basic.showString("T")
    basic.pause(500)
    basic.showNumber(tempo)
    basic.pause(500)
})
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let tempo = 0
let Número = 0
Número = 0
tempo = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
