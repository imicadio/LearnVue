new Vue({
    el: "#app",
    // przechowywanie danych, zmiennych
    data: {     
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRuning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRuning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;

            if(this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRuning = false;
                return;
            }

            var max = 12;
            var min = 5;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= damage;

            if(this.playerHealth <= 0) {
                alert('You lost!');
                this.gameIsRuning = false;
                return;
            }
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        }
    }
});