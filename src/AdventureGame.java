import java.util.Scanner;

public class AdventureGame {
    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        String charaName;
        int heroHP;
        int heroATT;
        int potion;
        int totalPotions = 4;
        String enemy = "Wolf";
        int enemyHP;
        int enemyATT;

        System.out.println("Are you ready to start the game?");
        String start = scanner.nextLine();

        if (start.equalsIgnoreCase("yes")) {
            System.out.println("Enter your character's name: ");
            charaName = scanner.nextLine();
            System.out.println("You come across a wolf in the forest. It attacks you.");
            heroHP = 15;
            heroATT = 2;
            potion = 5;
            enemyHP = 10;
            enemyATT = 2;
            do {
                System.out.println("Stats: ");
                System.out.printf("-- %-5s-- | -- %-5s--\n", charaName, enemy);
                System.out.printf("HP: %-6d | Enemy HP: %-5d\n\n", heroHP, enemyHP);
                System.out.println("Actions: ");
                System.out.printf("Attack || Drink Potion(%d) || Run\n", totalPotions);
                String action = scanner.nextLine();
                if (action.equalsIgnoreCase("attack")) {
                    System.out.println("You did damage.\n");
                    enemyHP -= heroATT;
                    heroHP -= enemyATT;
                } else if (action.equalsIgnoreCase("drink potion")) {
                    System.out.println("You regained some health!\n");
                    heroHP += potion;
                    totalPotions --;
                    heroHP -= enemyATT;
                } else if (action.equalsIgnoreCase("run")) {
                    System.out.println("You successfully ran away.");
                    break;
                }
                if (enemyHP <= 0) {
                    System.out.println("You win!");
                    break;
                }
            } while (true);
        }
    }
}
