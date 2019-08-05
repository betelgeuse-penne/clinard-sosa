package adventureGame;

public class Goblin extends Enemy {
    public Goblin(String enemyName, int enemyHP, int enemyATT) {
        super(enemyName, enemyHP, enemyATT);
    }

    @Override
    public String appears() { return "A goblin sees you, shouts loudly, and charges towards you!"; }

    @Override
    public String attack() { return "The goblin swings and hits you with it's makeshift spiked club!"; }
}
