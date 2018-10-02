

export class ApplicationUser {

    constructor(

    public emp_ID: string,
    public emp_type: string,
    public firstname: string,
    public lastname: string,
    public address: string,
    public email: string,
    public phone: number,
    public username : string,
    public password: string,
    public createdDate: string,
    public modifiedDate: string
      ) {  }
}
