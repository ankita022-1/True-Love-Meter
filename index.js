const sec1 = document.getElementById("sec1");
    const sec2 = document.getElementById("sec2");
    const sec3 = document.getElementById("sec3");
    const advice = document.getElementById("advice");
    const result = document.getElementById("result");
    const audio = document.querySelector("audio");
    const music = document.getElementById("music");

    const form = document.querySelector("form");

    // audio play and pause
    let isPlaying = true;
    function musicFunc() {
        if (isPlaying == true) {
            isPlaying = false;
            music.style.animation = "none";
            icon.classList.replace("fa-play-circle", "fa-pause-circle");
            audio.pause();
        } else {
            isPlaying = true;
            music.style.animation = "rotation 1.5s linear 0s infinite";
            icon.classList.replace("fa-pause-circle", "fa-play-circle");


            audio.play();
        }
    }


    // advice
    function advicefunc(cal, urName, otherName) {
        adviceArr = [
            `Dr. Love thinks a relationship might work out between ${urName} and ${otherName}, but the chance is very small. A successful relationship is possible, but you both have to work on it. `,
            `The chance of a relationship working out between ${urName} and ${otherName} is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. `,
            `Dr. Love thinks that a relationship between ${urName} and ${otherName} has a reasonable chance of working out, but on the other hand, it might not. Your relationship may suffer good and bad times. If things might not be working out as you would like them to, do not hesitate to talk about it with the person involved. Spend time together, talk with each other.`,
            `Dr. Love thinks ${urName} and ${otherName} is a perfect match. Sends gift and Spend as much time with each other as possible. `
        ]
        if (cal < 20) {
            advice.innerHTML = `${adviceArr[0]}`;
        } else if (cal >= 20 && cal < 50) {
            advice.innerHTML = `${adviceArr[1]}`;
        } else if (cal >= 50 && cal < 80) {
            advice.innerHTML = `${adviceArr[2]}`;
        } else {
            advice.innerHTML = `${adviceArr[3]}`;
        }

    }
    //calculator
    function calculator(urName, otherName) {
        let cal = Math.floor(Math.random() * 100);
        console.log(cal);
        result.innerText = ` ${urName} & ${otherName} ${cal}%`;
        advicefunc(cal, urName, otherName);
    }
    function play() {
        sec1.style.display = "none";
        sec2.style.display = "flex";
    }
    function submit2() {
        const urName = document.getElementById("urName").value.trim();
        const otherName = document.getElementById("otherName").value.trim();

        // validation of the data given by user
        if (urName == "" || otherName == "") {
            alert("Please enter the name.");
        } else if (!isNaN(urName) || !isNaN(otherName)) {
            alert("Numbers are not allowed.");
        } else if (urName.length < 3 || otherName.length < 3) {
            alert("Invalid Name ! Lenght should be greater than 2.");
        } else {
            // calculate
            calculator(urName, otherName);
            sec2.style.display = "none";
            sec3.style.display = "flex";
            form.reset();
        }

    }
    function replay() {
        sec3.style.display = "none";
        sec1.style.display = "flex";
    }
