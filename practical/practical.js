
        function calculateFactorial() {
            let num = document.getElementById("numberInput").value;

            if (num < 0) {
                document.getElementById("result").innerText = "Factorial not defined for negative numbers";
                return;
            }

            let factorial = 1;

            for (let i = 1; i <= num; i++) {
                factorial *= i;
            }

            document.getElementById("result").innerText = "Factorial: " + factorial;
        }
    