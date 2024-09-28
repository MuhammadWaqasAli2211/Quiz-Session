// var easyQuestion = [
//   "What is the capital of Pakistan?",
//   "What is 2 + 2?",
//   "What color is the sky on a clear day?",
// ];
// var easyAnswer = ["Islamabad", "4", "Blue"];

// var mediumQuestion = [
//   "What does Hyper Text Markup Language stand for?",
//   "What is the square root of 64?",
//   "Which planet is known as the Red Planet?",
// ];
// var mediumAnswer = ["HTML", "8", "Mars"];

// var difficultQuestion = [
//   "What is the derivative of x^2?",
//   "What is the name of the biggest land animal?",
//   "In which year did Pakistan come into existence?",
// ];
// var difficultAnswer = ["2x", "Elephant", "1947"];

// do {
//   var level = prompt(
//     "<===Welcome to the Quiz Session===>" +
//       "\n" +
//       "================================" +
//       "\n" +
//       "Select the Level" +
//       "\n" +
//       ">Level 1:   Easy Questions" +
//       "          " +
//       ": Press 1," +
//       "\n" +
//       ">Level 2:   Medium Questions" +
//       "    " +
//       ": Press 2," +
//       "\n" +
//       ">Level 3:   Difficult Questions" +
//       "     " +
//       ": Press 3." +
//       "\n" +
//       "================================"
//   );

//   var easyCorrectCounter = 0;
//   var easyInCorrectCounter = 0;

//   if (level == 1) {
//     for (var i = 0; i < easyQuestion.length; i++) {
//       var userAnswer = prompt(easyQuestion[i]);
//       if (userAnswer.toLowerCase() === easyAnswer[i].toLowerCase()) {
//         easyCorrectCounter++;
//       } else {
//         alert("Wrong Answer! The correct answer is: " + easyAnswer[i]);
//         easyInCorrectCounter++;
//       }
//     }

//     if (easyCorrectCounter == 3) {
//       alert(
//         "Grade: A+\n" +
//           "Remarks: Excellent! You've answered all the easy-level questions correctly.\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           easyCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           easyInCorrectCounter
//       );
//     } else if (easyCorrectCounter == 2) {
//       alert(
//         "Grade: B\n" +
//           "Remarks: Good! You've passed the easy level with 2 correct answers.\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           easyCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           easyInCorrectCounter
//       );
//     } else if (easyCorrectCounter == 1) {
//       alert(
//         "Grade: C\n" +
//           "Remarks: Satisfactory! You only got 1 correct answer. You need more correct answers to pass the easy level.\n" +
//           "-----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           easyCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           easyInCorrectCounter
//       );
//     } else {
//       alert(
//         "Grade: Fail\n" +
//           "Remarks: Sorry, you haven't passed the easy level.\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           easyCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           easyInCorrectCounter
//       );
//     }
//   } else if (level == 2) {
//     var mediumCorrectCounter = 0;
//     var mediumInCorrectCounter = 0;

//     for (var i = 0; i < mediumQuestion.length; i++) {
//       var userAnswer = prompt(mediumQuestion[i]);
//       if (userAnswer.toLowerCase() === mediumAnswer[i].toLowerCase()) {
//         mediumCorrectCounter++;
//       } else {
//         alert("Wrong Answer! The correct answer is: " + mediumAnswer[i]);
//         mediumInCorrectCounter++;
//       }
//     }

//     if (mediumCorrectCounter == 3) {
//       alert(
//         "Grade: A+\n" +
//           "Remarks: Outstanding! You've mastered the medium-level questions perfectly.\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           mediumCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           mediumInCorrectCounter
//       );
//     } else if (mediumCorrectCounter == 2) {
//       alert(
//         "Grade: B\n" +
//           "Remarks: Well done! You’ve successfully passed the medium level with 2 correct answers.\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           mediumCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           mediumInCorrectCounter
//       );
//     } else if (mediumCorrectCounter == 1) {
//       alert(
//         "Grade: C\n" +
//           "Remarks: You’ve got 1 correct answer. More focus is needed to tackle medium-level questions.\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           mediumCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           mediumInCorrectCounter
//       );
//     } else {
//       alert(
//         "Grade: Fail\n" +
//           "Remarks: Unfortunately, you didn’t pass the medium level. Keep practicing!\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           mediumCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           mediumInCorrectCounter
//       );
//     }
//   } else if (level == 3) {
//     var difficultCorrectCounter = 0;
//     var difficultInCorrectCounter = 0;

//     for (var i = 0; i < difficultQuestion.length; i++) {
//       var userAnswer = prompt(difficultQuestion[i]);
//       if (userAnswer.toLowerCase() === difficultAnswer[i].toLowerCase()) {
//         difficultCorrectCounter++;
//       } else {
//         alert("Wrong Answer! The correct answer is: " + difficultAnswer[i]);
//         difficultInCorrectCounter++;
//       }
//     }

//     if (difficultCorrectCounter == 3) {
//       alert(
//         "Grade: A+\n" +
//           "Remarks: Incredible! You've conquered the most challenging questions with ease.\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           difficultCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           difficultInCorrectCounter
//       );
//     } else if (difficultCorrectCounter == 2) {
//       alert(
//         "Grade: B\n" +
//           "Remarks: Impressive! You’ve passed the difficult level with 2 correct answers.\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           difficultCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           difficultInCorrectCounter
//       );
//     } else if (difficultCorrectCounter == 1) {
//       alert(
//         "Grade: C\n" +
//           "Remarks: You got 1 correct answer. The difficult level requires more preparation and effort.\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           difficultCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           difficultInCorrectCounter
//       );
//     } else {
//       alert(
//         "Grade: Fail\n" +
//           "Remarks: It seems the difficult level was too challenging this time. Don’t give up!\n" +
//           "----------------------------------------------------------\n" +
//           "Correct Answers: " +
//           difficultCorrectCounter +
//           "\n" +
//           "Incorrect Answers: " +
//           difficultInCorrectCounter
//       );
//     }
//   } else {
//     alert("Invalid Option! Please try again.");
//   }

//   var options = prompt(
//     "Do you want to Re-Iterate the Quiz Session? (yes/no)?"
//   ).toLowerCase();
// } while (options != "no");





// These are the easy level questions and their correct answers
var easyQuestion = [
  "🌆 What is the capital of Pakistan?",
  "➕ What is 2 + 2?",
  "☁️ What color is the sky on a clear day?",
];
var easyAnswer = ["Islamabad", "4", "Blue"];

// These are the medium level questions and their correct answers
var mediumQuestion = [
  "💻 What does Hyper Text Markup Language stand for?",
  "📐 What is the square root of 64?",
  "🔴 Which planet is known as the Red Planet?",
];
var mediumAnswer = ["HTML", "8", "Mars"];

// These are the difficult level questions and their correct answers
var difficultQuestion = [
  "📉 What is the derivative of x^2?",
  "🐘 What is the name of the biggest land animal?",
  "📅 In which year did Pakistan come into existence?",
];
var difficultAnswer = ["2x", "Elephant", "1947"];

// This alert shows the rules and instructions for the quiz
alert(
  "📜 Welcome to the Ultimate Quiz Challenge! 🎉\n\n📚 Rules & Regulations: \n\n• 🕐 Time is precious - answer as quickly as you can!\n• 💡 Think before you answer – spelling matters!\n• ⭐ Levels: Easy 🟢, Medium 🟡, and Difficult 🔴 – Progress as you succeed!\n• 🚫 One wrong answer? Don’t worry, keep going!\n• 🎯 Aim for A+ or B to advance to the next level.\n\nBest of Luck, and may the best brain win! 🧠💪"
);

// Ask for the user's name and store it in the userName variable
var userName = prompt("🎉 Welcome to the Quiz! Please enter your name:");
// Greet the user and explain that the quiz will start with the easy level
alert(
  "👋 Hello " +
    userName +
    "! Let's start the quiz.\nFirst, we'll begin with the easy level. 🟢"
);

// Easy level quiz starts here
var easyCorrectCounter = 0; // This keeps count of correct answers for easy level
for (var i = 0; i < easyQuestion.length; i++) {
  var userAnswer = prompt(easyQuestion[i]); // Ask each question one by one
  // Check if the answer is correct (ignores uppercase/lowercase differences)
  if (userAnswer.toLowerCase() === easyAnswer[i].toLowerCase()) {
    easyCorrectCounter++; // If correct, increase the count of correct answers
  } else {
    // If wrong, show the correct answer
    alert("❌ Wrong Answer! The correct answer is: " + easyAnswer[i]);
  }
}

// Decide the grade and remarks for the easy level based on correct answers
var easyGrade = "";
var easyRemarks = "";
if (easyCorrectCounter === 3) {
  easyGrade = "A+";
  easyRemarks = "🎉 Excellent!";
} else if (easyCorrectCounter === 2) {
  easyGrade = "B";
  easyRemarks = "👍 Good!";
} else if (easyCorrectCounter === 1) {
  easyGrade = "C";
  easyRemarks = "😐 Satisfactory!";
} else {
  easyGrade = "Fail";
  easyRemarks = "😔 Better luck next time!";
}

// Show the user's result after the easy level
alert(
  "📊 Result for " + userName.toUpperCase() +
  "\nGrade: " + easyGrade +
  "\nRemarks: " + easyRemarks +
  "\n✅ Correct Answers: " + easyCorrectCounter +
  "\n❌ Incorrect Answers: " + (easyQuestion.length - easyCorrectCounter)
);

// If the user scored an A+ or B, move on to the medium level
if (easyGrade === "A+" || easyGrade === "B") {
  alert(
    "🎉 Congratulations " +
      userName +
      "! You've passed the easy level. Now let's move on to the medium level. 🟡"
  );

  // Medium level quiz starts here
  var mediumCorrectCounter = 0; // Count correct answers for medium level
  for (var i = 0; i < mediumQuestion.length; i++) {
    var userAnswer = prompt(mediumQuestion[i]); // Ask each medium question
    if (userAnswer.toLowerCase() === mediumAnswer[i].toLowerCase()) {
      mediumCorrectCounter++; // If correct, increase the count of correct answers
    } else {
      alert("❌ Wrong Answer! The correct answer is: " + mediumAnswer[i]);
    }
  }

  // Decide the grade and remarks for the medium level
  var mediumGrade = "";
  var mediumRemarks = "";
  if (mediumCorrectCounter === 3) {
    mediumGrade = "A+";
    mediumRemarks = "🌟 Outstanding!";
  } else if (mediumCorrectCounter === 2) {
    mediumGrade = "B";
    mediumRemarks = "👌 Well done!";
  } else if (mediumCorrectCounter === 1) {
    mediumGrade = "C";
    mediumRemarks = "🤔 You need more focus!";
  } else {
    mediumGrade = "Fail";
    mediumRemarks = "🔄 Keep practicing!";
  }

  // Show the user's result for the medium level
  alert(
    "📊 Result for " + userName.toUpperCase() +
    "\nGrade: " + mediumGrade +
    "\nRemarks: " + mediumRemarks +
    "\n✅ Correct Answers: " + mediumCorrectCounter +
    "\n❌ Incorrect Answers: " + (mediumQuestion.length - mediumCorrectCounter)
  );

  // If the user scored an A+ or B, move on to the difficult level
  if (mediumGrade === "A+" || mediumGrade === "B") {
    alert(
      "🔥 Great work " +
        userName +
        "! You've passed the medium level. Now let's tackle the difficult level. 🔴"
    );

    // Difficult level quiz starts here
    var difficultCorrectCounter = 0; // Count correct answers for difficult level
    for (var i = 0; i < difficultQuestion.length; i++) {
      var userAnswer = prompt(difficultQuestion[i]); // Ask each difficult question
      if (userAnswer.toLowerCase() === difficultAnswer[i].toLowerCase()) {
        difficultCorrectCounter++; // If correct, increase the count of correct answers
      } else {
        alert("❌ Wrong Answer! The correct answer is: " + difficultAnswer[i]);
      }
    }

    // Decide the grade and remarks for the difficult level
    var difficultGrade = "";
    var difficultRemarks = "";
    if (difficultCorrectCounter === 3) {
      difficultGrade = "A+";
      difficultRemarks = "🏆 Incredible!";
    } else if (difficultCorrectCounter === 2) {
      difficultGrade = "B";
      difficultRemarks = "💪 Impressive!";
    } else if (difficultCorrectCounter === 1) {
      difficultGrade = "C";
      difficultRemarks = "🧐 More preparation needed!";
    } else {
      difficultGrade = "Fail";
      difficultRemarks = "🚧 Too challenging this time!";
    }

    // Show the user's result for the difficult level
    alert(
      "📊 Result for " + userName.toUpperCase() +
      "\nGrade: " + difficultGrade +
      "\nRemarks: " + difficultRemarks +
      "\n✅ Correct Answers: " + difficultCorrectCounter +
      "\n❌ Incorrect Answers: " + (difficultQuestion.length - difficultCorrectCounter)
    );
  } else {
    // If the user didn’t score high enough, they don’t move to the difficult level
    alert(
      "🚪 You've finished the medium level, but you didn't score high enough to move on to the difficult level."
    );
  }
} else {
  // If the user didn’t score high enough in the easy level, the quiz ends
  alert(
    "😔 Sorry " +
      userName.toUpperCase() +
      ", you didn't pass the easy level. Please try again next time! 🚶"
  );
}
