function calculateLetterGrade(average) {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function runGradeCalculator() {
    const maxAssignments = 10;
    let repeat = true;

    while (repeat) {
        const numAssignments = parseInt(prompt(`Enter the number of assignments to grade (1-${maxAssignments}):`), 10);

        if (numAssignments < 1 || numAssignments > maxAssignments || isNaN(numAssignments)) {
            console.log("Invalid input. Please enter a number between 1 and 10.");
            continue;
        }

        let totalScore = 0;

         for (let i = 1; i <= numAssignments; i++) {
            const score = parseFloat(prompt(`Enter score for assignment ${i} (0-100):`));

            if (score < 0 || score > 100 || isNaN(score)) {
                console.log("Invalid score. Please enter a number between 0 and 100.");
                i--; // Decrement i to repeat this assignment entry
                continue;
            }

            totalScore += score;
        }

  const average = totalScore / numAssignments;
 const letterGrade = calculateLetterGrade(average);

        console.log(`Average score is ${average.toFixed(2)}%.`);
        console.log(`The letter grade is: ${letterGrade}`);

        repeat = confirm("Would you like to calculate grades for another assignment?");
    }

    console.log("Thank you for using the grade calculator!");
}


runGradeCalculator();
