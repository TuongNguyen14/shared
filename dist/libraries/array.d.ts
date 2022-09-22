export declare type SortOptions = {
    sort: "asc" | "desc";
    prop: string;
    insensitive?: boolean;
};
export declare const SortArray: <T>(arr: T[], ...options: SortOptions[]) => T[];
