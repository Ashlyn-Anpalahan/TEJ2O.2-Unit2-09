"""
Created by: Ashlyn
Created on: Feb 2026
This module will allow us to create a rock, paper, scissors program.
"""

from microbit import *
import random

# variables
random_number = -1
score = 0

# clear screen
display.clear()
display.show(Image.HAPPY)

# Shake
while True:
    if accelerometer.was_gesture("shake"):

        random_number = random.randint(0, 2)
        display.clear()

        # If rock
        if random_number == 0:
            display.show(Image.SQUARE_SMALL)

        # If paper
        if random_number == 1:
            display.show(Image.SQUARE)

        # If scissors
        if random_number == 2:
            display.show(Image.SCISSORS)

        sleep(5000)
        display.clear()

    # Button a:
    if button_a.was_pressed():
        score = score + 1
        display.show(Image.YES)
        sleep(500)
        display.clear()

    # Button b:
    if button_b.was_pressed():
        display.scroll("Score:")
        display.show(str(score))
        sleep(1000)
        display.clear()
