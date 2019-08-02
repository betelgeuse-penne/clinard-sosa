package adventureGame;

abstract class PlayerCharacter{
    protected String className;
    protected int charaHP;
    protected int charaMP;
    protected int attackPOW;

    public PlayerCharacter(String className, int charaHP, int charaMP, int attackPOW) {
        this.className = className;
        this.charaHP = charaHP;
        this.charaMP = charaMP;
        this.attackPOW = attackPOW;
    }

    public abstract String attack();
    public abstract String drinkPotion();

}
