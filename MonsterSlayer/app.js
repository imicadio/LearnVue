new Vue({
    el: "#app",
    // przechowywanie danych, zmiennych
    data: {     
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRuning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRuning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if(this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if(this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        heal: function() {
            if (this.playerHealth <= 90){
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttack();
        },
        giveUp: function() {
            this.gameIsRuning = false;
        },
        monsterAttack: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;        
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits monster for ' + damage
            });    
            this.checkWin();
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if(this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRuning = false;
                }
                return;
            } else if (this.playerHealth <= 0) {
                if(confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRuning = false;
                }
                return;
            }
            return false;
        }
    }
});