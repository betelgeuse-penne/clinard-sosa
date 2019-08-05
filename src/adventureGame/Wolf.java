package adventureGame;

public class Wolf extends Enemy {

    public Wolf(String enemyName, int enemyHP, int enemyATT) {
        super(enemyName, enemyHP, enemyATT);
    }

    @Override
    public String appears() { return "A wolf attacks you as you wander through a forest!"; }

    @Override
    public String attack() { return "The wolf attacked with it's claws!"; }
}
