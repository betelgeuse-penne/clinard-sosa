package adventureGame;

import java.util.Scanner;

public class AdventureGame{
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
//        System.out.println("Pick your characters class: ");
//        String charaClass = scanner.nextLine();
//        System.out.printf("You picked: %s", charaClass);

        PlayerCharacter warrior = new WarriorClass("Warrior", 25, 0, 4);
        Enemy wolf = new Wolf("Wolf", 12, 3);

        String charaName;
        int fireATT = 6;
        int fireMP = 3;
        int potion;
        int totalPotions = 4;

        System.out.println("Are you ready to start the game?");
        String start = scanner.nextLine();

        if (start.equalsIgnoreCase("yes")) {
            System.out.println("Enter your character's name: ");
            charaName = scanner.nextLine();
            System.out.println(wolf.appears());
            potion = 10;
            do {
                System.out.println("Stats: ");
                System.out.printf("--  %-6s-- | -- %-5s--\n", charaName, wolf.enemyName);
                System.out.printf("HP: %d MP: %d | Enemy HP: %-5d\n\n", warrior.charaHP, warrior.charaMP, wolf.enemyHP);
                System.out.println("Actions: ");
                System.out.printf("Attack || Drink Potion(%d) || Magic(%dMP)|| Run\n", totalPotions, fireMP);
                String action = scanner.nextLine();
                if (action.equalsIgnoreCase("attack")) {
                    System.out.println(warrior.attack());
                    System.out.println(wolf.attack());
                    wolf.enemyHP -= warrior.attackPOW;
                    warrior.charaHP -= wolf.enemyATT;
                } else if (action.toLowerCase().contains("potion")) {
                    System.out.println(warrior.drinkPotion());
                    System.out.println(wolf.attack());
                    warrior.charaHP += potion;
                    totalPotions --;
                    warrior.charaHP -= wolf.enemyATT;
                } else if (warrior.charaMP==0 && action.toLowerCase().contains("fire")) {
                    System.out.println(warrior.magicATT());
                } else if (action.toLowerCase().contains("fire")) {
                    System.out.println("You set it ablaze!");
                    System.out.println(wolf.attack());
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
