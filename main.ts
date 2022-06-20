radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
        basic.pause(500)
        edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    } else if (receivedNumber == 2) {
        edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
        basic.pause(500)
        edubitTrafficLightBit.setLed(LedColor.Yellow, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    } else if (receivedNumber == 3) {
        edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
        basic.pause(500)
        edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
    } else if (receivedNumber == 4) {
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    basic.pause(500)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    basic.pause(500)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    basic.pause(500)
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
})
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
