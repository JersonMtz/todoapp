export default class TODO {

    Id: number;
    Description: string;
    Complete: boolean;

    constructor(description: string) {
        this.Id          = Date.now();
        this.Description = description;
        this.Complete    = false;
    }

}