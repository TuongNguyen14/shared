import { createHmac } from "crypto";

const ALGORITHM = `${process.env.ALGORITHM}`;
const DIGEST: any = `${process.env.DIGEST}`;
const KEY = `${process.env.PASSWORD_KEY}`;

export const EncryptPassword = (input: string): string => {
    return createHmac(ALGORITHM, KEY).update(input).digest(DIGEST);
}