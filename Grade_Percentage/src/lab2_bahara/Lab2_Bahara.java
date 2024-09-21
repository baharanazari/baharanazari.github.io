/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */

// Name; Bahara 
// Date; 23,Feb 2024
// App Name; LetterGrade
// Description; app that generate Grades
package lab2_bahara;

import java.util.Scanner;

/**
 * Main method 
 * 
 */
public class Lab2_Bahara {
    // Constants 
    static final String SET_TITLE = "\033];%S\007;";
    static final String CLEAR_TERMINAL = "\033c"; //lower case C
    static final String BANNER = """
             === Letter Grade Converter ===            
                                 """;
    static String RESET = "\u001B[0m";
    static String RED = "\033[31m";
    static String PURPLE = "\u001B[35m";
    static String BLUE = "\u001B[34m";
    static String LIGHT_GREEN = "\u001B[92m";
    static  String YELLOW = "\u001B[33m";
     static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        // banner and title
        System.out.printf(SET_TITLE, "Bahara Nazari-GradeLetter");

        // to use it to go through validation process and through calling the grade class
        while (true) {
            // print the banner and clear terminla 
            System.out.println(CLEAR_TERMINAL + BANNER );

            // Prompt user for grade percentage
             float gradePercentage = Grade.getPercentage(scanner);
            if (gradePercentage != -1) {// if the gradeperecentage is not eqaul to -1
                
                    // Calculate letter grade and feedback
                    String letterGrade = Grade.getLetter(gradePercentage);
                    String getFeedback = Grade.getFeedback(letterGrade);
                    
                    // display the feedback and greade letter according to what percentage the user input is
                    System.out.println(BLUE+"A grade of " + gradePercentage + "%"  + " is equivalent to " + letterGrade + " which is considered " + getFeedback + "!" + RESET);
            }  
            
            // Ask if user wants to restart
            System.out.print(PURPLE +"Enter 'r' to restart or any other key to exit: " + PURPLE);
            String restart = scanner.nextLine();
            if (!restart.equalsIgnoreCase("r")) {
                break; // Exit the loop if user doesn't want to restart
            }
        }

        scanner.close();
    }
}