export interface IdentityError {
  error: IdentityErrorError;
}

export interface IdentityErrorError {
  code: number;
  message: string;
  errors: ErrorElement[];
}

export interface ErrorElement {
  message: string;
  domain: string;
  reason: string;
}
