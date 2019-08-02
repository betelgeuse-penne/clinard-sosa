package adventureGame;

import java.util.Scanner;

public class AdventureGame {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
//        System.out.println("Pick your characters class: ");
//        String charaClass = scanner.nextLine();
//        System.out.printf("You picked: %s", charaClass);

        PlayerCharacter warrior = new WarriorClass("Warrior", 25, 4, 6);
        Enemy wolf = new Wolf("Wolf", 12, 3);


        String charaName;
//        int heroHP;
//        int heroATT;
//        int heroMP = 3;
        int fireATT = 6;
        int fireMP = 3;
        int potion;
        int totalPotions = 4;
//        String enemy = "Wolf";
//        int enemyHP;
//        int enemyATT;
//
        System.out.println("Are you ready to start the game?");
        String start = scanner.nextLine();

        if (start.equalsIgnoreCase("yes")) {
            System.out.println("Enter your character's name: ");
            charaName = scanner.nextLine();
            System.out.println("You come across a wolf in the forest. It attacks you.");
//            heroHP = 15;
//            heroATT = 2;
            potion = 10;
//            enemyHP = 10;
//            enemyATT = 2;
            do {
                System.out.println("Stats: ");
                System.out.printf("--  %-6s-- | -- %-5s--\n", charaName, wolf.enemyName);
                System.out.printf("HP: %d MP: %d | Enemy HP: %-5d\n\n", warrior.charaHP, warrior.charaMP, wolf.enemyHP);
                System.out.println("Actions: ");
                System.out.printf("Attack || Drink Potion(%d) || Fire Magic(%dMP)|| Run\n", totalPotions, fireMP);
                String action = scanner.nextLine();
                if (action.equalsIgnoreCase("attack")) {
                    System.out.println(warrior.attack());
                    wolf.enemyHP -= warrior.attackPOW;
                    warrior.charaHP -= wolf.enemyATT;
                } else if (action.toLowerCase().contains("potion")) {
                    System.out.println(warrior.drinkPotion());
                    warrior.charaHP += potion;
                    totalPotions --;
                    warrior.charaHP -= wolf.enemyATT;
                } else if (warrior.charaMP==0 && action.toLowerCase().contains("fire")) {
                    System.out.println("You ran out of MP! Try something else!");
                } else if (action.toLowerCase().contains("fire")) {
                    System.out.println("You set it ablaze!\n");
                    wolf.enemyHP -= fireATT;
                    warrior.charaHP -= wolf.enemyATT;
                    warrior.charaMP -= fireMP;
                } else if (action.equalsIgnoreCase("run")) {
                    System.out.println("You successfully ran away.");
                    break;
                }
                if (wolf.enemyHP <= 0) {
                    System.out.println("You win!");
                    break;
                }
            } while (true);
        }
    }
}
