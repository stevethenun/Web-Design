$(document).ready(() => {
    const names = ["Smith, Ben", "Degroot, Joel", "Smith, Judy", "Turner, Anne"];
    const scores = [88, 98, 77, 88];

    const clearBoxes = () => {
        $("#first_name").val("");
        $("#last_name").val("");
        $("#score").val("");
        $("#scoresTextarea").val("");
        names.length = 0
        scores.length = 0
    };

    const addToArray = () => {
        let myName = $("#last_name").val() + ", " + $("#first_name").val();
        let myScore = $("#score").val();
        let isValid = true;

        if (myName == "" || isNaN(myScore)) {
            isValid = false;
        } else {
            names.push(myName);
            scores.push(parseFloat(myScore));
        }

        $("#first_name").val("");
        $("#last_name").val("");
        $("#score").val("");
    };

    const sort = () => {
        // Combine names and scores into an array of objects
        let combinedData = [];
        for (let i = 0; i < names.length; i++) {
            combinedData.push({ name: names[i], score: scores[i] });
        }

        // Sort the combined data array by last names
        combinedData.sort((a, b) => {
            // Extract last names from the full names
            const lastNameA = a.name.split(',')[0].trim();
            const lastNameB = b.name.split(',')[0].trim();

            // Compare last names
            if (lastNameA < lastNameB) return -1;
            if (lastNameA > lastNameB) return 1;
            return 0;
        });

        // Generate the sorted text for display
        let sortedScoresText = "";
        $.each(combinedData, function(index, value) {
            sortedScoresText += value.name + ": " + value.score + "\n";
        });

        // Update the textarea with the sorted content
        $("#scoresTextarea").val(sortedScoresText);
    };

    const displayScores = () => {
        let scoresText = "";

        for (let i = 0; i < scores.length; i++) {
            scoresText += `${names[i]}: ${scores[i]}\n`;
        }

        $("#scoresTextarea").val(scoresText);
    };

    $("#addToArray").click(addToArray);
    $("#clear").click(clearBoxes);
    $("#displayScores").click(displayScores);
    $("#sort").click(sort);
});
