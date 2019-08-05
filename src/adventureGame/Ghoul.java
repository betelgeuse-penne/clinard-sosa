package adventureGame;

public class Ghoul extends Enemy {
    public Ghoul(String enemyName, int enemyHP, int enemyATT) {
        super(enemyName, enemyHP, enemyATT);
    }

    @Override
    public String appears() { return "A Ghoul shambles out of the shadows of the night, eager to devour your flesh!"; }

    @Override
    public String attack() { return "The ghoul hits you with it's claws!"; }
}
