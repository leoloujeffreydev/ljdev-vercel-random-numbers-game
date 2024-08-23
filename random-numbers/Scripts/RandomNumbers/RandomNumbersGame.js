document.addEventListener('DOMContentLoaded', function () {

    var txtRandomGuess = document.getElementById('txtRandomGuess');
    var VBrandomNumbersMaster = document.getElementById('VBrandomNumbersMaster');
    var lblResult = document.getElementById('lblResult');
    var btnRoll = document.getElementById('btnRoll');

    console.log(VBrandomNumbersMaster.value);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Add an event listener to the button
    btnRoll.addEventListener('click', () => {

        if (txtRandomGuess.value == '') {
            alert("Please select a number.")
        }
        else {
            // Generate a random number between 1 and 10
            const randomNumber = getRandomNumber(1, 10);
            // Update the input field with the random number
            VBrandomNumbersMaster.value = randomNumber;
        }
    });

    document.getElementById('btnone').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '1';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white';

        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';
    });

    document.getElementById('btntwo').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '2';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white';            // White text color

        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';

    });

    document.getElementById('btnthree').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '3';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white'; // White text color

        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';
    });

    document.getElementById('btnfour').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '4';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white';            // White text color

        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';
    });

    document.getElementById('btnfive').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '5';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white';            // White text color

        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';
    });

    document.getElementById('btnsix').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '6';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white';            // White text color

        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';
    });

    document.getElementById('btnseven').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '7';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white';            // White text color

        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';
    });

    document.getElementById('btneight').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '8';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white';            // White text color

        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';
    });

    document.getElementById('btnnine').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '9';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white';            // White text color

        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';
    });

    document.getElementById('btnten').addEventListener('click', function () {
        // Get the text box element
        txtRandomGuess.value = '10';
        this.style.backgroundColor = '#28a745'; // Green background
        this.style.color = 'white';            // White text color

        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
    });

    document.getElementById('btnReset').addEventListener('click', function () {
        btnone.style.backgroundColor = '';
        btnone.style.color = '';
        btntwo.style.backgroundColor = '';
        btntwo.style.color = '';
        btnthree.style.backgroundColor = '';
        btnthree.style.color = '';
        btnfour.style.backgroundColor = '';
        btnfour.style.color = '';
        btnfive.style.backgroundColor = '';
        btnfive.style.color = '';
        btnsix.style.backgroundColor = '';
        btnsix.style.color = '';
        btnseven.style.backgroundColor = '';
        btnseven.style.color = '';
        btneight.style.backgroundColor = '';
        btneight.style.color = '';
        btnnine.style.backgroundColor = '';
        btnnine.style.color = '';
        btnten.style.backgroundColor = '';
        btnten.style.color = '';
        txtRandomGuess.value = '';
        lblResult.innerText = '';
        VBrandomNumbersMaster.value = '';
    });

    function guessNumber() {
        if (txtRandomGuess.value != VBrandomNumbersMaster.value) {
            lblResult.innerText = "YOU LOSE";
        }
        else if (txtRandomGuess.value == ''){
            lblResult.innerText = "";
        } else {
            lblResult.innerText = "YOU WIN";
        }
    }

    btnRoll.addEventListener('click', guessNumber);

});