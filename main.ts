input.onButtonPressed(Button.A, function () {
    radio.sendString("vooruit")
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("stop")
    basic.showIcon(IconNames.No)
    CutebotPro.extendMotorStop()
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("rechts")
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("achteruit")
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("links")
    basic.showArrow(ArrowNames.West)
})
radio.setGroup(128)
basic.forever(function () {
    CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xff0080)
    CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0xff9da5)
})
