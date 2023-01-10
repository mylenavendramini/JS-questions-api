alert("working");

document.querySelector("button").addEventListener("click", searchAPI);

async function searchAPI() {
  const subjectQuestion = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://js-questions-api.onrender.com/api/questions/${subjectQuestion}`
    );
    const allQuestions = await fetch(
      `https://js-questions-api.onrender.com/api/questions`
    );
    const data = await response.json();
    const allQuestionsData = await allQuestions.json();
    console.log(data);
    console.log(allQuestionsData[subjectQuestion]);

    document.querySelector("#question").innerText = data.questionText;
    document.querySelector("#answer").innerText = data.answerText;

    const list = document.getElementById("list");

    // list.innerHTML += `<li>Question: ${list.children.length + 1}</li>`;

    list.innerHTML += `<li>Question: ${
      list.children.length + data.questionText
    }</li>`;

    // console.log(allQuestionsData[subjectQuestion]);
    allQuestionsData.map((question) => {
      console.log(question);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

console.log("running");
