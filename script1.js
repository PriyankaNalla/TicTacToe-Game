window.onload = () => {
    if (document.getElementById("newGame")) {
        // Logic for first_page.html
        const btn = document.getElementById("newGame");
        const result = document.getElementById("result");

        // Display the winning message from localStorage
        const winningMessage = localStorage.getItem("winningMessage");
        if (winningMessage) {
            result.value = winningMessage;
            // Clear the message from localStorage
            localStorage.removeItem("winningMessage");
        }

        btn.addEventListener("click", () => {
            window.location.href = "index.html";
        });

    } else if (document.getElementById("box1")) {
        // Logic for index.html
        const inputs = document.querySelectorAll('.box');
        let turn = 'o'; // Start with 'o'
        
        inputs.forEach(input => {
            input.value = '';
            input.disabled = false; // Enable all inputs initially
        });

        function getResult() {
            const one = document.getElementById("box1").value;
            const two = document.getElementById("box2").value;
            const three = document.getElementById("box3").value;
            const four = document.getElementById("box4").value;
            const five = document.getElementById("box5").value;
            const six = document.getElementById("box6").value;
            const seven = document.getElementById("box7").value;
            const eight = document.getElementById("box8").value;
            const nine = document.getElementById("box9").value;

            console.log({ one, two, three, four, five, six, seven, eight, nine });

            if ((one === "o" && two === "o" && three === "o") ||
                (one === "o" && four === "o" && seven === "o") ||
                (one === "o" && five === "o" && nine === "o") ||
                (seven === "o" && eight === "o" && nine === "o") ||
                (three === "o" && six === "o" && nine === "o") ||
                (three === "o" && five === "o" && seven === "o") ||
                (four === "o" && five === "o" && six === "o") ||
                (two === "o" && five === "o" && eight === "o")) {

                // Save the winning message to localStorage
                localStorage.setItem("winningMessage", "O Wins this game!!!!!");
            
                setTimeout(() => {
                    window.location.href = "first_page.html";
                }, 1000);
            }
            else if ((one === "x" && two === "x" && three === "x") ||
                (one === "x" && four === "x" && seven === "x") ||
                (one === "x" && five === "x" && nine === "x") ||
                (seven === "x" && eight === "x" && nine === "x") ||
                (three === "x" && six === "x" && nine === "x") ||
                (three === "x" && five === "x" && seven === "x") ||
                (four === "x" && five === "x" && six === "x") ||
                (two === "x" && five === "x" && eight === "x")) {

                // Save the winning message to localStorage
                localStorage.setItem("winningMessage", "X Wins this game!!!!!");
            
                setTimeout(() => {
                    window.location.href = "first_page.html";
                }, 1000);
            }
            else if((one!=="" && two!=="" && three!=="" &&  four!="" && five!=="" && six!=="" && seven!=="" && eight!=="" && nine!=="")){
            localStorage.setItem("winningMessage", "No one Wins!!!!");
            setTimeout(()=>{
                window.location.href="first_page.html";
            },1000);
            }
        }

        inputs.forEach(input => {
            input.addEventListener('input', function () {
                if (this.value.toLowerCase() === turn) {
                    this.value = turn;
                    this.disabled = true;
                    turn = turn === 'o' ? 'x' : 'o'; // Switch turn
                    getResult();
                } else {
                    this.value = ''; // Clear invalid input
                }
            });
        });
    }
}
