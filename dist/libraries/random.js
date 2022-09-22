"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenarateRandom = void 0;
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function GenarateRandom(length, characters) {
    const result = [];
    const chars = characters || CHARACTERS;
    const charactersLength = chars.length;
    for (let i = 0; i < length; i++)
        result.push(chars.charAt(Math.floor(Math.random() *
            charactersLength)));
    return result.join("");
}
exports.GenarateRandom = GenarateRandom;
