radio.onReceivedNumber(function (receivedNumber) {
    index_zvuk = receivedNumber
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "ravno") {
        stanje = 0
    }
    if (receivedString == "lijevo") {
        stanje = 1
    }
    if (receivedString == "desno") {
        stanje = 2
    }
})
let stanje = 0
let index_zvuk = 0
radio.setGroup(1)
basic.forever(function () {
    if (index_zvuk == 1) {
        if (stanje == 0) {
            basic.showIcon(IconNames.No)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
            basic.pause(500)
        }
        if (stanje == 2) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
            basic.showLeds(`
                . . # . .
                . # # . .
                # # # # #
                . # # . .
                . . # . .
                `)
        }
        if (stanje == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            basic.showLeds(`
                . . # . .
                . . # # .
                # # # # #
                . . # # .
                . . # . .
                `)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
})
