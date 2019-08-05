package adventureGame;

import java.util.Scanner;

public class AdventureGame{
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
//        System.out.println("Pick your characters class: ");
//        String charaClass = scanner.nextLine();
//        System.out.printf("You picked: %s", charaClass);

        PlayerCharacter warrior = new WarriorClass("Warrior", 25, 0, 4);
        PlayerCharacter ranger = new RangerClass("Ranger", 25, 0, 4);
        Enemy enemy = new Wolf("wolff", 3, 4);

        int randomEnemy = (int) Math.ceil(Math.random()*50);
        if (randomEnemy > 0 && randomEnemy <= 10) {
            enemy = new Wolf("Wolf", 12, 3);
        } else if (randomEnemy > 10 && randomEnemy <= 20) {
            enemy = new GiantSpider("Giant Spider", 20, 4);
        } else if (randomEnemy > 20 && randomEnemy <= 30) {
            enemy = new Ghoul("Ghoul", 18, 3);
        } else if (randomEnemy > 30 && randomEnemy <= 48) {
            enemy = new Goblin("Goblin", 16, 3);
        } else if (randomEnemy > 48 && randomEnemy <=50) {
            enemy = new CopperDragon("Copper Dragon", 50, 10);
        }

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
            System.out.println(enemy.appears());
            potion = 10;
            do {
                System.out.println("Stats: ");
                System.out.printf("--  %-6s-- | -- %-5s--\n", charaName, enemy.enemyName);
                System.out.printf("HP: %d MP: %d | Enemy HP: %-5d\n\n", warrior.charaHP, warrior.charaMP, enemy.enemyHP);
                System.out.println("Actions: ");
                System.out.printf("Attack || Drink Potion(%d) || Magic(%dMP)|| Run\n", totalPotions, fireMP);
                String action = scanner.nextLine();
                if (action.equalsIgnoreCase("attack")) {
                    System.out.println(warrior.attack());
                    System.out.println(enemy.attack());
                    enemy.enemyHP -= warrior.attackPOW;
                    warrior.charaHP -= enemy.enemyATT;
                } else if (action.toLowerCase().contains("potion")) {
                    System.out.println(warrior.drinkPotion());
                    System.out.println(enemy.attack());
                    warrior.charaHP += potion;
                    totalPotions --;
                    warrior.charaHP -= enemy.enemyATT;
                } else if (warrior.charaMP==0 && action.toLowerCase().contains("fire")) {
                    System.out.println(warrior.magicATT());
                } else if (action.toLowerCase().contains("fire")) {
                    System.out.println("You set it ablaze!");
                    System.out.println(enemy.attack());
                    enemy.enemyHP -= fireATT;
                    warrior.charaHP -= enemy.enemyATT;
                    warrior.charaMP -= fireMP;
                } else if (action.equalsIgnoreCase("run")) {
                    System.out.println("You successfully ran away.");
                    break;
                }
                if (enemy.enemyHP <= 0) {
                    System.out.println("You win!");
                    break;
                }
            } while (true);
        }
    }
}
