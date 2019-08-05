package adventureGame;

public class CopperDragon extends Enemy {
    public CopperDragon(String enemyName, int enemyHP, int enemyATT) {
        super(enemyName, enemyHP, enemyATT);
    }

    @Override
    public String appears() { return "Oh no! A young dragon with copper hued scales swoops down to attack you!"; }

    @Override
    public String attack() { return "The dragon swipes at you with it's claws!"; }
}
