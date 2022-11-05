import { IdentityError } from './identityError.model';

export interface SignUpModel {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localID: string;
  error?: IdentityError;
}
