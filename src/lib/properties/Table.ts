export class Table {
    JSONdata: {};
    private parsedTable: any[] = [];
    data: string = "";

    constructor(JSONdata: {}) {
        this.JSONdata = JSONdata;
        this.convertToTable();
    }

    convertToTable() {
        const keys = Object.keys(this.JSONdata);
        keys.forEach(key => {
            const val = this.JSONdata[key as keyof {}];
            this.parsedTable.push(`${key} = ${val}`);
        });

        this.data = "{";

        this.parsedTable.forEach(val => {
            this.data += val + ",";
        });
        this.data += "}";
    }
}