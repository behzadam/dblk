export class Result<T> {
  private constructor(
    private readonly isSuccess: boolean,
    private readonly data?: T,
    private readonly error?: string,
    private readonly code?: string
  ) {}

  public static success<T>(data: T): Result<T> {
    return new Result<T>(true, data);
  }

  public static failure<T>(error: string, code?: string): Result<T> {
    return new Result<T>(false, undefined, error, code);
  }

  public get success(): boolean {
    return this.isSuccess;
  }

  public get value(): T {
    if (!this.isSuccess) {
      throw new Error("Cannot access value of failed result");
    }
    return this.data as T;
  }

  public get errorMessage(): string {
    if (this.isSuccess) {
      throw new Error("Cannot access error of successful result");
    }
    return this.error as string;
  }

  public get errorCode(): string | undefined {
    if (this.isSuccess) {
      throw new Error("Cannot access error code of successful result");
    }
    return this.code;
  }

  public match<U>(
    onSuccess: (data: T) => U,
    onFailure: (error: string, code?: string) => U
  ): U {
    return this.isSuccess
      ? onSuccess(this.data as T)
      : onFailure(this.error as string, this.code);
  }
}
