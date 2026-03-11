/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ashlyn
 * Created on: Feb 2026
 * This program allows us to create a rock, paper, scissors program. 
*/

// variables
let randomNumber: number = -1
let score: number = 0

//clear screen 
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//shake
input.onGesture(Gesture.Shake, function () {

    randomNumber = randint(0, 2)
    basic.clearScreen()

// if rock
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare) 
    }
// if paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }
// if scissors
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    basic.pause(5000)
    basic.clearScreen()
})

//button a
input.onButtonPressed(Button.A, function () {
    score = score + 1
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

//button b
input.onButtonPressed(Button.B, function () {
    basic.showString("Score:")
    basic.showNumber(score)
    basic.pause(500)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
