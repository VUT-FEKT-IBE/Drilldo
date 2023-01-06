function startTesting(view = false) {
  if (view) {
    questions.value.forEach(function (item) {
      item.showResults = true;
      item.viewOnly = true;
      item.answers.forEach(function (answer) {
        if (answer.correct) {
          answer.isSelected = true;
        }
      });
    });
  } else {
    questions.value.sort((a, b) => {
      if (a.numIncorrect !== b.numIncorrect) {
        return a.numIncorrect > b.numIncorrect ? -1 : 1;
      } else if (a.numCorrect !== b.numCorrect) {
        return a.numCorrect < b.numCorrect ? -1 : 1;
      } else {
        return Math.random() > 0.5 ? 1 : -1;
      }
    });
  }
  emit("ready", { view: view });
}
