import { AuthRepository } from './authRepository';

export const googleLogin = async () => {
  try {
    const repo = new AuthRepository();
    await repo.googleLogin();
  } catch (err) {
    return err;
  }
};
