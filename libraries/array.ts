export type SortOptions = {
    sort: "asc" | "desc",
    prop: string,
    insensitive?: boolean
}
export const SortArray = <T>(arr: T[], ...options: SortOptions[]) => {
    return arr.sort((a: any, b: any) => {
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
            if (x < y) return option.sort === "asc" ? - 1 : 1;
            else if (x > y) return option.sort === "asc" ? 1 : -1;
        }
        return 0;
    })
}