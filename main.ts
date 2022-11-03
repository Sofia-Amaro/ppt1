input.onButtonPressed(Button.A, function () {
    if (valor == 1) {
        basic.showIcon(IconNames.Target)
        basic.showNumber(valor)
    } else if (valor == 2) {
        basic.showIcon(IconNames.Square)
        basic.showNumber(valor)
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.showNumber(valor)
    }
    valor += 1
    if (valor > 3) {
        valor = 1
    }
})
let valor = 0
valor = 0
