"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMerge = exports.isObject = void 0;
const isObject = (item) => (item && typeof item === "object" && !Array.isArray(item));
exports.isObject = isObject;
const deepMerge = (target, source) => {
    let output = Object.assign({}, target);
    if ((0, exports.isObject)(target) && (0, exports.isObject)(source)) {
        Object.keys(source).forEach(key => {
            if ((0, exports.isObject)(source[key])) {
                if (!(key in target))
                    Object.assign(output, { [key]: source[key] });
                else
                    output[key] = (0, exports.deepMerge)(target[key], source[key]);
            }
            else
                Object.assign(output, { [key]: source[key] });
        });
    }
    return output;
};
exports.deepMerge = deepMerge;
