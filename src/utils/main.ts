import {Message} from "../types/main.js";

export function message(message: string | null): Message {
  return {message: message? message : "Невідома помилка"};
}
export function dateNow () {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm: any = today.getMonth() + 1; // Months start at 0!
  let dd: any = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return  dd + '-' + mm + '-' + yyyy;
}