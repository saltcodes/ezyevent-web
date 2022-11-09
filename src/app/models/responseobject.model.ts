export class ResponseObjectModel<T> {
   status:string = "";
   code: string = "";
   data: T | undefined
}
