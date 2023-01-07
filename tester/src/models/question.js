import { Model } from "pinia-orm";
import AnswerModel from "./answer";

export default class QuestionModel extends Model {
  static entity = "questions";
  static fields() {
    return {
      id: this.uid(),
      number: this.number(1),
      question: this.string(" "),
      answers: this.hasMany(AnswerModel, "questionId"),
      showResults: this.boolean(false),
      numCorrect: this.number(0),
      numIncorrect: this.number(0),
      maxScore: this.number(0),
      score: this.number(0),
    };
  }
}
