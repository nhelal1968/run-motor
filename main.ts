brick.buttonLeft.onEvent(ButtonEvent.Pressed, function () {
    motors.mediumD.run(10, 5, MoveUnit.Rotations)
})
brick.buttonRight.onEvent(ButtonEvent.Pressed, function () {
    motors.mediumD.run(100, 5, MoveUnit.Rotations)
})
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    motors.largeA.run(50)
})
forever(function () {
	
})
