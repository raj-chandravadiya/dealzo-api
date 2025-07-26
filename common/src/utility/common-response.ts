import { Response } from "express";
import { HttpStatusCode } from "./enums";
export const getResult = (
  res: Response,
  statusCode: HttpStatusCode,
  message: string,
  data?: any
): void => {
  res.status(statusCode).json({
    data,
    statusCode,
    message,
  });
};
