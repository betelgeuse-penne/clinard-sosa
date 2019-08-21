package adventureGame;

public class RangerClass extends PlayerCharacter {
    public RangerClass(String className, int charaHP, int charaMP, int attackPOW) {
        super(className, charaHP, charaMP, attackPOW);
    }

    @Override
    public String attack() { return "You fired an arrow at the enemy!"; }

    @Override
    public String magicATT() { return "Rangers don't use magic, try something else."; }

    @Override
    public String drinkPotion() { return "You recovered 10HP!"; }
}
