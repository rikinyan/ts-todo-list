export default class Todo {
  readonly id: string;
  readonly description: string;
  readonly isEnd: boolean;
  readonly createdDate: Date;

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

  displayString(): string {
    const isEndstring = this.isEnd ? "[x]" : "[ ]";
    return `${isEndstring} ${this.id}: ${this.description}`;
  }
}
