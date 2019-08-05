package adventureGame;

public class WarriorClass extends PlayerCharacter{

    public WarriorClass (String className, int charaHP, int charaMP, int attackPOW) {
        super(className, charaHP, charaMP, attackPOW);
    }

    @Override
    public String attack() { return "You swung your sword!"; }

    @Override
    public String magicATT() { return "Warriors can't use magic, try something else!"; }

    @Override
    public String drinkPotion() { return "You recovered 10HP!"; }
}
