package adventureGame;

import java.util.Scanner;

public class AdventureGame{
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Pick your characters class: ");
        System.out.println("Warrior ||  Ranger ||  Wizard");
        String charaClass = scanner.nextLine();
        System.out.printf("You picked: %s%n", charaClass);

        PlayerCharacter player = new WarriorClass("Warrior", 25, 0, 4);
        Enemy enemy = new Wolf("wolff", 3, 4);

        switch (charaClass) {
            case "warrior":
                player = new WarriorClass("Warrior", 25, 0, 4);
                break;
            case "ranger":
                player = new RangerClass("Ranger", 25, 0, 4);
                break;
            case "wizard":
                player = new WizardClass("Wizard", 22, 20, 2);
                break;
        }

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
        int thunderATT = 7;
        int thunderMP = 4;
        int iceATT = 6;
        int iceMP = 3;
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
                System.out.printf("HP: %d MP: %d | Enemy HP: %-5d\n\n", player.charaHP, player.charaMP, enemy.enemyHP);
                System.out.println("Actions: ");
                System.out.printf("Attack || Drink Potion(%d) || Magic || Run\n", totalPotions);
                String action = scanner.nextLine();
                if (action.equalsIgnoreCase("attack")) {
                    System.out.println(player.attack());
                    System.out.println(enemy.attack());
                    enemy.enemyHP -= player.attackPOW;
                    player.charaHP -= enemy.enemyATT;
                } else if (action.toLowerCase().contains("potion")) {
                    System.out.println(player.drinkPotion());
                    System.out.println(enemy.attack());
                    player.charaHP += potion;
                    totalPotions --;
                    player.charaHP -= enemy.enemyATT;
                } else if (player.charaMP==0 && action.toLowerCase().contains("magic")) {
                    System.out.println(player.magicATT());
                } else if (action.toLowerCase().contains("magic")) {
                    System.out.println(player.magicATT());
                    System.out.printf("Fire(%dMP) || Thunder(%dMP) || Ice(%dMP)", fireMP, thunderMP, iceMP);
                    String magicChoice = scanner.nextLine();
                    if (magicChoice.equalsIgnoreCase("fire")) {
                        System.out.println("You set the enemy ablaze!");
                        System.out.println(enemy.attack());
                        enemy.enemyHP -= fireATT;
                        player.charaHP -= enemy.enemyATT;
                        player.charaMP -= fireMP;
                    } else if (magicChoice.equalsIgnoreCase("thunder")) {
                        System.out.println("You stuck the enemy with a bolt of lightning!");
                        System.out.println(enemy.attack());
                        enemy.enemyHP -= thunderATT;
                        player.charaHP -= enemy.enemyATT;
                        player.charaMP -= thunderMP;
                    } else if (magicChoice.equalsIgnoreCase("ice")) {
                        System.out.println("You hit the enemy with an icicle!");
                        System.out.println(enemy.attack());
                        enemy.enemyHP -= iceATT;
                        player.charaHP -= enemy.enemyATT;
                        player.charaMP -= iceMP;
                    }
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
