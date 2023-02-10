let Jarak = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . # . #
    . # . # .
    `)
basic.forever(function () {
    Jarak = Tinybit.Ultrasonic_Car()
    if (Jarak < 25) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
        basic.pause(100)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 80)
        basic.pause(100)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 60)
        basic.pause(100)
        if (Jarak < 15) {
            basic.pause(100)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 80)
            basic.pause(100)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 60)
            basic.pause(100)
        } else {
            Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
            Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
        }
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    }
})
basic.forever(function () {
    let Belok = 0
    if (Belok == 1) {
    	
    } else {
    	
    }
})
