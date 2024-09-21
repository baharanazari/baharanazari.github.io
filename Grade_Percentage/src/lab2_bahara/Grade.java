/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package lab2_bahara;

import java.util.Scanner;

/**
 *
 *  Grade class responsible for calculating letter grade and providing feedback.
 */
public class Grade {
    // contstant 
    private  final static float MIN_GRADE = 0;//// Minimum valid grade percentage
    private final static float MAX_GRADE = 100;// Maximum valid grade percentage
   private static final String RESET = "\u001B[0m";
   private static final String RED = "\033[31m";
   private static String LIGHT_GREEN = "\u001B[92m";
   
    
    /**
     * Method to calculate letter grade based on grade percentage.
     * @param gradePercentage The grade percentage to be converted to letter grade.
     * @return The letter grade
     */
     public static String getLetter(float gradePercentage) {
    if (gradePercentage >= 90 && gradePercentage <= 100) {
        return "A+";
    } else if (gradePercentage >= 85 && gradePercentage <= 89) {
        return "A";
    } else if (gradePercentage >= 80 && gradePercentage <= 84) {
        return "A-";
    } else if (gradePercentage >= 75 && gradePercentage <= 79) {
        return "B+";
    } else if (gradePercentage >= 70 && gradePercentage <= 74) {
        return "B";
    } else if (gradePercentage >= 65 && gradePercentage <= 69) {
        return "B-"; 
    } else if (gradePercentage >= 60 && gradePercentage <= 64) {
        return "C";
    } else if (gradePercentage >= 55 && gradePercentage <= 59) {
        return "D+";
    } else if (gradePercentage >= 50 && gradePercentage <= 54) {
        return "D";
    } else   {
        return "F";
    } 
       
}
     /**
     * Method to provide feedback based on letter grade.
     * @param letterGrade The letter grade to provide feedback for.
     * @return The feedback 
     */
     public static String getFeedback(String letterGrade) {
        switch (letterGrade) {
            case "A+":
            return "Outstanding";
            case "A":
                return "Exemplary";
            case "A-":
                return "Excellent";
            case "B+":
                return "Very Good";
            case "B":
                return " Good";
            case "B-":
                return "Satisfactory";
            case "C":
                return "Acceptable";
            case "D+":
                return "Conditional Pass";
            case "D":
                return "Conditional Pass";  
            case "F":
                return " Fail";
            default :
                return ""; // Default case
        }
     
         
     
}   /**
    * recursive method
    * @param scanner
    * @return 
    */
      public static float getPercentage(Scanner scanner) {
        System.out.print(LIGHT_GREEN +"Enter your grade percentage: " + RESET);
        if (scanner.hasNextFloat()) {
            float gradePercentage = scanner.nextFloat();
            scanner.nextLine(); // Consume newline

            // Check if grade percentage is within valid range
            if (gradePercentage >= MIN_GRADE && gradePercentage <= MAX_GRADE) {
                return gradePercentage;
            } else {
                System.out.println(RED +"Error: Grade percentage must be between 0 and 100." + RESET);
                return getPercentage(scanner); // Recursive call to re-prompt for input
            }
        } else {
            System.out.println(RED +"Error: Please enter a valid numeric value." + RESET);
            scanner.nextLine(); // Consume invalid input
            return getPercentage(scanner);  // Recursive call to re-prompt for input
        
        }
    }
}