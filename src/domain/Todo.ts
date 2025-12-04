import TodoStore from "./TodoStore.js";

export default class Todo {
  id: string;
  description: string;
  isEnd: boolean;
  createdDate: Date;

  constructor(
    id: string,
    description: string,
    isEnd: boolean,
    createdDate: Date,
  ) {
    this.id = id;
    this.description = description;
    this.isEnd = isEnd;
    this.createdDate = createdDate;
  }

  displaystring(): string {
    const isEndstring = this.isEnd ? "[x]" : "[ ]";
    return `${isEndstring} ${this.id}: ${this.description}`;
  }
}
