import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { getResult, HttpStatusCode } from 'common';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const user = req.body;
            const result = await this.authService.signup(user);
            getResult(res, HttpStatusCode.Ok, "User created", result)
        } catch (err: any) {
            getResult(res, HttpStatusCode.BadRequest, err.message)
        }
    };

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;
            const result = await this.authService.login(email, password);
            getResult(res, HttpStatusCode.Ok, 'Login successfully', result);
        } catch (err: any) {
            getResult(res, HttpStatusCode.BadRequest, err.message);
        }
    };
}
