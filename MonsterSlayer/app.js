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
        }
    }
});