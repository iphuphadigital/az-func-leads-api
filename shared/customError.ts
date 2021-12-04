export class CustomError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public errors: any[] = [],
  ) {
    super();
    this.message = message;
  }
}
