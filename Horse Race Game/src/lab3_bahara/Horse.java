/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package lab3_bahara;

import java.util.Random;
/**
 * 
 * @author PC
 */
public class Horse {
    private String name;
    private int distanceCovered;
    private Random random;

 /**
  * Constructor 
  * @param name 
  */   
// Constructor
    public Horse(String name) {
        this.name = name; // 
        this.distanceCovered = 0;
        this.random = new Random();
    }

    // Getter methods
    /**
     * 
     * @return name
     */
    public String getName() {
        return name;
    }
    /**
     * 
     * @return get distance covered 
     */
    public int getDistanceCovered() {
        return distanceCovered;
    }

    // method that tell us about the horse movement
    /**
     * run method 
     */
    public void run() {
        if (random.nextBoolean()) { // 50% chance of adding 1 to distanceCovered
            // if the value is true increment by 1 
            distanceCovered += 1;
        }
    }
}