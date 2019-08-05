package adventureGame;

public class GiantSpider extends Enemy {

    public GiantSpider(String enemyName, int enemyHP, int enemyATT) {
        super(enemyName, enemyHP, enemyATT);
    }

    @Override
    public String appears() { return "A giant spider skitters down from the treetops to attack you!"; }

    @Override
    public String attack() { return "The spider bites you with it's large fangs!"; }
}
