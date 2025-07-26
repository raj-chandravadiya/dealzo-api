import { db } from 'common';
import { hashPassword, comparePasswords } from '../utils/crypto.util';
import { generateToken } from '../utils/token.util';
import { SignupInput } from '../interfaces/auth.interface';

export class AuthService {
  public async signup(newUserRequest: SignupInput) {

    if (!newUserRequest.password || newUserRequest.password !== newUserRequest.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const existingUser = await db.user.findOne({
      where: {
        email: newUserRequest.email
      }
    });

    if (existingUser) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await hashPassword(newUserRequest.password);

    const user = await db.user.create({
      email: newUserRequest.email,
      password: hashedPassword,
      phone: newUserRequest.phone,
      user_status_id: newUserRequest.userStatusId,
      account_type_id: newUserRequest.accountTypeId,
      created_at: new Date()
    });

    const token = generateToken({ id: user.id, role: user.account_type_id });
    return { user, token };
  }

  public async login(email: string, password: string) {
    const user = await db.user.findOne({ where: { email } });
    if (!user) throw new Error('User does not Exist');

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = generateToken({
      id: user.id,
      email: user.email,
      accountType: user.account_type_id
    });

    return { user, token };
  }
}
