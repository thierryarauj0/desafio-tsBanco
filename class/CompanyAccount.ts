import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if(this.validateStatus() && amount > 0){
      this.internalDeposit(amount);
      console.log(`Você pegou um empréstimo de R$${amount}. Saldo atual: R$${this.getBalance()}`);
    } else {
      console.log('Empréstimo inválido');
    }
  }
}
