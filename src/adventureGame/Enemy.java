package adventureGame;

abstract class Enemy {
    protected String enemyName;
    protected int enemyHP;
    protected int enemyATT;

    public Enemy(String enemyName, int enemyHP, int enemyATT) {
        this.enemyName = enemyName;
        this.enemyHP = enemyHP;
        this.enemyATT = enemyATT;
    }

    public abstract String appears();
    public abstract String attack();
}
