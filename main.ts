input.onButtonPressed(Button.A, function () {
    basic.showNumber(Schritte)
})
let Schritte = 0
Schritte = 0
basic.showIcon(IconNames.StickFigure)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    while (input.acceleration(Dimension.Strength) < 1100) {
    	
    }
    while (input.acceleration(Dimension.Strength) > 880) {
    	
    }
    Schritte += 1
    basic.setLedColor(0xff0000)
    basic.pause(10)
    basic.turnRgbLedOff()
})
