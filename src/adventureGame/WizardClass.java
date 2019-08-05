package adventureGame;

public class WizardClass extends PlayerCharacter {
    public WizardClass(String className, int charaHP, int charaMP, int attackPOW) {
        super(className, charaHP, charaMP, attackPOW);
    }

    @Override
    public String attack() { return "You bonked the enemy with your staff, it looks more annoyed then hurt though."; }

    @Override
    public String magicATT() { return "Pick a magic attack:\n"; }

    @Override
    public String drinkPotion() { return "You recovered 10HP!"; }
}
