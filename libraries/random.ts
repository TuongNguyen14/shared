const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function GenarateRandom(length: number, characters?: string) {
    const result = [];
    const chars = characters || CHARACTERS;
    const charactersLength = chars.length;
    for (let i = 0; i < length; i++)
        result.push(chars.charAt(Math.floor(Math.random() *
            charactersLength)));
    return result.join("");
}