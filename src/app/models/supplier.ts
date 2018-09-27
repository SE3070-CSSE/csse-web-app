export class Supplier {

    /**
     * The TypeScript compiler generates a public field for each public constructor parameter
     * and automatically assigns the parameter’s value to that field when you create models.
     */
    constructor(
        public supplierName: string,
        public email: number,
        public contactNumber?:number,
        public address?: string
      ) {  }

}