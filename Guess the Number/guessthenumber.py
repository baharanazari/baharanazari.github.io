# Name ; Bahara Nazari 
# date ; october 4, 2023 
# App Name ; Guess the Number 
# Descroiption ; game that the player must guess a secret number 


# import the system
from os import system 
from random import randint

# contstant 
MIN,MAX = 0, 100

system (" Title guess number- Bahara Nazari  ")

#true bz we want to get into the loop at least ONCE
playing = True 
while playing : 

    # Generate a secret number
    random_number = randint( MIN,MAX)

    # Reset attempts to 0 
    attempts = 0  

    # so we can enter the loop once
    guess = None

    # Note ; Nested loop = loop inside loop
    # keep looping while the player 
    while guess != random_number : 

        # ASk for a number between MIN and MAx
        guess = input(f"pick a number between {MIN} and {MAX} ")
        # Try to convert the guess inti int
        try :
            guess = int (guess)
            numeric = True # Able to convert to int
        except : 
            numeric = False # Unable to convert 

        # Error in case the guess is not numeric
        if not numeric :
            print("Error - Guess must be numeric !")  

        # Error in case the guess is not betwwen MIN and MAX
        elif guess < MIN or guess > MAX:
            print (f" Error - GUESS MUST BE BETWEEN {MIN} AND {MAX} !") 

        # Valid guess
        else :
            

                attempts +=  1 
            # Guess is too low
                if guess < random_number:
                     print (f"{guess} is too low ! Try a higher number ! ")

            # guess is too high 
                elif guess > random_number:
                    print (f"{guess} is too high !")        


            # in case thew player gussed the number
                else :
                    print (f" Yes! The number is {random_number} YOU DID IT HOOORA   ") 
                    print (f" you gussed in{attempts} attempts !")         




    # checking if player wants to play again
    playing = input(" press {r} to replay: ") == "r"
    