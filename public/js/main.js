// alert("working");

document.querySelector("button").addEventListener("click", searchAPI);

async function searchAPI() {
  const subjectQuestion = document.querySelector("input").value;
  try {
    // const response = await fetch(
    //   `https://js-questions-api.onrender.com/api/questions/${subjectQuestion}`
    // );
    const allQuestions = await fetch(
      `https://js-questions-api.onrender.com/api/questions`
    );
    // const data = await response.json();
    // console.log(data);
    const allQuestionsData = await allQuestions.json();

    console.log(allQuestionsData[subjectQuestion]);

    const questions = document.getElementById("questions");
    const answers = document.getElementById("answers");
    const group = allQuestionsData[subjectQuestion].map((question) => {
      console.log(question.questionText);
      questions.innerHTML += `<li>Question ${questions.children.length + 1}:  ${
        question.questionText
      }</li>`;
      answers.innerHTML += `<li>Answer ${answers.children.length + 1}:  ${
        question.answerText
      }</li>`;
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

console.log("running");
