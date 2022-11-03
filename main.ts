input.onButtonPressed(Button.A, function () {
    valor += 1
    if (valor > 3) {
        valor = 1
    }
    if (valor == 1) {
        basic.showIcon(IconNames.Target)
    } else if (valor == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
function resultado () {
    if (valor == Azar) {
        basic.showString("Empate")
    } else if (valor == 1 && Azar == 3) {
        basic.showString("GANASTE ")
    } else if (valor == 2 && Azar == 1) {
        basic.showString("GANASTE ")
    } else if (valor == 3 && Azar == 2) {
        basic.showString("GANASTE")
    } else {
        basic.showString("PERDISTE")
    }
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Target)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Scissors)
    }
    Azar = randint(1, 3)
    if (Azar == 1) {
        basic.showIcon(IconNames.Target)
    } else if (Azar == 2) {
        basic.showIcon(IconNames.Square)
    } else if (Azar == 3) {
        basic.showIcon(IconNames.Scissors)
    }
    resultado()
    basic.clearScreen()
})
let Azar = 0
let valor = 0
valor = 0
