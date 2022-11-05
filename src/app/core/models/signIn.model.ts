import { IdentityError } from './identityError.model';

export interface SignInModel {
  kind: string;
  localID: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
  error?: IdentityError;
}
