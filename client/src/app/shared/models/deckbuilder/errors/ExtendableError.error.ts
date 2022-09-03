interface ErrorConstructor {
  captureStackTrace(thisArg: any, func: any): void;
}

export class ExtendableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    this.stack = new Error(message).stack;
  }
}
