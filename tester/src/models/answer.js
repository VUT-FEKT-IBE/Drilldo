import { Model } from "pinia-orm";

export default class AnswerModel extends Model {
  static entity = "answers";
  static fields() {
    return {
      id: this.uid(),
      questionId: this.attr(null),
      text: this.string(""),
      correct: this.boolean(false),
      isSelected: this.boolean(false),
    };
  }
  static piniaOptions = {
    persist: true,
  };
}
