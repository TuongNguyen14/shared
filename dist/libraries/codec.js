"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptPassword = void 0;
const crypto_1 = require("crypto");
const ALGORITHM = `${process.env.ALGORITHM}`;
const DIGEST = `${process.env.DIGEST}`;
const KEY = `${process.env.PASSWORD_KEY}`;
const EncryptPassword = (input) => {
    return (0, crypto_1.createHmac)(ALGORITHM, KEY).update(input).digest(DIGEST);
};
exports.EncryptPassword = EncryptPassword;
