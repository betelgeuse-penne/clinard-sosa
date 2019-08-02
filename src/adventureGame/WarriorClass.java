package adventureGame;

public class WarriorClass extends PlayerCharacter {

    public WarriorClass (String className, int charaHP, int charaMP, int attackPOW) {
        super(className, charaHP, charaMP, attackPOW);
    }

    @Override
    public String attack() { return "You swung your sword!\n"; }
    @Override
    public String drinkPotion() { return "You recovered 10HP!\n"; }
}
