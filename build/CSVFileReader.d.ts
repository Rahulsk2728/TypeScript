export declare abstract class CSVFileReader<T> {
    filename: string;
    data: T[];
    constructor(filename: string);
    abstract mapRow(row: string[]): T;
    read(): void;
}
//# sourceMappingURL=CSVFileReader.d.ts.map