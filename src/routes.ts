import * as database from "./database";

import { Request, Response } from 'express';

export const getNum = async (req: Request, res: Response) => {
  res.json(4);
};