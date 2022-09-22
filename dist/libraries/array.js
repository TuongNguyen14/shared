"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortArray = void 0;
const SortArray = (arr, ...options) => {
    return arr.sort((a, b) => {
        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            let x, y;
            if (option.insensitive) {
                x = String(a[option.prop]).toLowerCase();
                y = String(b[option.prop]).toLowerCase();
            }
            else {
                x = a[option.prop];
                y = b[option.prop];
            }
            if (x < y)
                return option.sort === "asc" ? -1 : 1;
            else if (x > y)
                return option.sort === "asc" ? 1 : -1;
        }
        return 0;
    });
};
exports.SortArray = SortArray;
