/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package lab3_bahara;
// Name; Bahara Nazari
// Date; 6 Mar 2024

import java.util.Scanner;

// App Name; HorseRace
// Description;


/**
 *
 * horse race execution
 */
public class Lab3_Bahara {
    // Constants
     static final String SET_TITLE = "\033];%S\007;";
   static final String CLEAR_TERMINAL = "\033c"; //lower case C
    static final String BANNER = """
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                 
                            HorseRace 
                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~               
                                 """;
    static final int HALF_SECOND = 500;
    static final int FINISH_LINE = 20;
     static String BLUE = "\u001B[34m";
     static String RESET = "\u001B[0m";
     static String PURPLE = "\u001B[35m";
     static  String YELLOW = "\u001B[33m";
/**
 * method for PAUSING for half a second
 */    
public static void waitHalfSecond(){
        try{
            Thread.sleep(HALF_SECOND);
        }catch(Exception exception){
        }
}
    /** 
     * calculating the horse distance
    */
     
   public static void drawDistanceLine(Horse horse) {
    int distance = horse.getDistanceCovered();
   
    for (int i = 0; i < distance; i++) {
        System.out.print("."); // calculating the horse distance and adding a dots 
    }
    System.out.println(" " + horse.getName()); // Display the horse's name on the right side
}
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // Title
        System.out.printf(SET_TITLE, "HorseRace- Bahara Nazari\n");
        System.out.println(BANNER);

    // User input
    Scanner scanner = new Scanner(System.in);
    // starting the race
        System.out.print(BLUE+ "Press {Enter} to Start the Race : " + RESET);
        scanner.nextLine();
   // Array of horses
    Horse[] horses = {
        new Horse("Shadowfox"),
        new Horse("Epona"),
        new Horse("Roach"),
        new Horse("Pinkie Pie"),
        new Horse("Wildfire")
    };

    boolean racing = true;
    while (racing) {
        System.out.println(CLEAR_TERMINAL+BANNER);
        // Update the race for each horse
        for (Horse horse : horses) { //going trough each horse in the array
            horse.run(); // Simulate the horse's movement
            drawDistanceLine(horse); // Visualize the distance covered
            if (horse.getDistanceCovered() >= FINISH_LINE) {
                racing = false; // End the race if any horse crosses the finish line
                System.out.println(PURPLE +horse.getName() + " wins the race!" + RESET);// print 
                
            }
            
        }
        
        waitHalfSecond(); // Wait before updating the race again
    }
    

    // Exit prompt
    System.out.println(YELLOW+ "Press [enter] to exit" + RESET );
    scanner.nextLine();
    scanner.close();
}
    
}