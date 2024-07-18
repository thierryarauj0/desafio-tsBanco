export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  public deposit = (amount: number): void => {
    this.internalDeposit(amount);
  }

  public withdraw = (amount: number): void => {
    this.internalWithdraw(amount);
  }

  getBalance = (): number => {
    return this.balance;
  }

  protected internalDeposit = (amount: number): void => {
    if(this.validateStatus() && amount > 0){
      this.balance += amount;
      console.log(`Você depositou R$${amount}. Saldo atual: R$${this.balance}`);
    } else {
      console.log('Depósito inválido');
    }
  }

  protected internalWithdraw = (amount: number): void => {
    if(this.validateStatus() && this.balance >= amount && amount > 0){
      this.balance -= amount;
      console.log(`Você sacou R$${amount}. Saldo atual: R$${this.balance}`);
    } else {
      console.log('Saque inválido');
    }
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
