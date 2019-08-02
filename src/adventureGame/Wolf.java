package adventureGame;

public class Wolf extends Enemy {

    public Wolf(String enemyName, int enemyHP, int enemyATT) {
        super(enemyName, enemyHP, enemyATT);
    }

    @Override
    public String attack() { return "The wolf attacked with it's claws!"; }
}
