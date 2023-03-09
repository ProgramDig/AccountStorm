export interface ProcessEnv {
  [key: string]: string | undefined
}
export interface Item {
  _id?: string | undefined,
  number: number,
  dateOfItem: string,
  numberOfDocument: number,
  dateOfDocument: string,
  provider: string,
  name: string,
  code: string,
  unitOfMeasure: string,
  price: number,
  arrived: number,
  out: number,
  amount: number,
  serialCode: number,
}