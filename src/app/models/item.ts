export class Item {

    /**
     * The TypeScript compiler generates a public field for each public constructor parameter
     * and automatically assigns the parameter’s value to that field when you create models.
     */
    constructor(
        public itemName: string,
        public price: number,
        public supplier: any,
        public deliveryInformation?,
        public isRestricted?: boolean,
        public category?: string
      ) {  }

}
