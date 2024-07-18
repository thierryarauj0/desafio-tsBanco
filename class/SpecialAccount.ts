import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber);
  }

  public deposit = (amount: number): void => {
    if(this.validateStatus() && amount > 0){
      const bonusAmount = amount + 10;
      this.internalDeposit(bonusAmount);
      console.log(`Você depositou R$${amount}, com bônus de R$10. Saldo atual: R$${this.getBalance()}`);
    } else {
      console.log('Depósito inválido');
    }
  }
}
