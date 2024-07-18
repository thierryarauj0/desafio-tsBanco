import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
console.log(`Saldo atual: R$${peopleAccount.getBalance()}`);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(200);
companyAccount.getLoan(500);
companyAccount.withdraw(100);
console.log(`Saldo atual: R$${companyAccount.getBalance()}`);

const specialAccount: SpecialAccount = new SpecialAccount('Special', 30);
specialAccount.deposit(100);
specialAccount.withdraw(50);
console.log(`Saldo atual: R$${specialAccount.getBalance()}`);
