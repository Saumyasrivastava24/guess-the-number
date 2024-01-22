let limit_beg_input = document.getElementById("limit_beg");
let limit_end_input = document.getElementById("limit_end");
let message = document.getElementById("message");
let guessed_number_input = document.getElementById("guessed_number");
let btn = document.getElementById("btn");
let answer = document.getElementById("answer");
let user_name_input = document.getElementById("user_name");
let historyList = document.getElementById("history"); // Added for history

let count = 0;
let random_number;
let playerHistory = [];

btn.addEventListener("click", function () {
    let limit_beg = parseInt(limit_beg_input.value);
    let limit_end = parseInt(limit_end_input.value);
    let guessed_number = parseInt(guessed_number_input.value);
    let user_name = user_name_input.value;

    if (isNaN(limit_beg) || isNaN(limit_end) || isNaN(guessed_number) || user_name.trim() === "") {
        alert("Please enter valid values and a username");
        return;
    }

    if (!random_number) {
        random_number = Math.floor(Math.random() * (limit_end - limit_beg + 1)) + limit_beg;
        console.log("Initial random number is " + random_number);

        limit_beg_input.disabled = true;
        limit_end_input.disabled = true;
        user_name_input.disabled = true;
    }

    count++;

    if (guessed_number === random_number) {
          message.classList.add("celebration");
            message.innerHTML = "Congratulations! " + user_name + " guessed the number in " + count + " attempts";
             playerHistory.push({ name: user_name, attempts: count });

          random_number = null;

          limit_beg_input.disabled = false;
          limit_end_input.disabled = false;
          user_name_input.disabled = false;

          limit_beg_input.value = "";
          limit_end_input.value = "";
          guessed_number_input.value = "";
          user_name_input.value = "";
          count = 0;
          setTimeout(function() {
              message.innerHTML="Make a guess";
             message.classList.remove("celebration");
          }, 10000);

    } else if (guessed_number > random_number) {
        message.innerHTML = "Lower Number Please!";
        message.innerHTML += " " + "Attempts: " + count;
    } else {
        message.innerHTML = "Higher Number Please!";
        message.innerHTML += " " + "Attempts: " + count;
    }
});

answer.addEventListener("click", function () {
    answer.innerHTML = random_number;
    setTimeout(function () {
        answer.innerHTML = "View answer";
    }, 1000);
});





 let isHistoryVisible = false;

        historyList.addEventListener("click", function () {
            isHistoryVisible = !isHistoryVisible;
            if (isHistoryVisible) {
                let historyHTML = "<h3 >History:</h3> ";
                for (let i = 0; i < playerHistory.length; i++) {
                    historyHTML += "<p>" + playerHistory[i].name +"-"+ playerHistory[i].attempts + " Attempts " + "</p>";
                }
                historyList.innerHTML = historyHTML;
            } else {
                historyList.innerHTML = "History";
            }
        });

        if (guessed_number === random_number) {
            message.classList.add("animate__animated", "animate__tada");
            message.innerHTML = "Congratulations! " + user_name + " guessed the number in " + count + " attempts";
            playerHistory.push({ name: user_name, attempts: count });

            random_number = null;

            limit_beg_input.disabled = false;
            limit_end_input.disabled = false;
            user_name_input.disabled = false;

            limit_beg_input.value = "";
            limit_end_input.value = "";
            guessed_number_input.value = "";
            user_name_input.value = "";
            count = 0;
            setTimeout(function() {
                message.innerHTML="Make a guess";
                message.classList.remove("animate__animated", "animate__tada");
            }, 10000);
        }
