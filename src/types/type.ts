export interface ICardInfo {
  cardCompany: string;
  cardNumbers: [number, number, number, number];
  cardExpiration: [number, number];
  userName: string;
  cvc: string;
  password: string;
}

export interface IErrorMessage {
  cardNumbers: [string, string, string, string];
  cardExpiration: [string, string];
  userName: [string];
  cvc: [string];
  password: [string];
}
