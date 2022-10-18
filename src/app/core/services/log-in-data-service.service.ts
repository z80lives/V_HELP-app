import { of } from 'rxjs';

interface LogInModel {
  username: string;
  email: string;
  password: string;
}

export class LogInDataServiceService {
  private admin: LogInModel[] = [
    { username: 'user1', email: 'user1@gmail.com', password: 'user1' },
    { username: 'user2', email: 'user2@gmail.com', password: 'user2' },
    { username: 'user3', email: 'user3@gmail.com', password: 'user3' },
    { username: 'user4', email: 'user4@gmail.com', password: 'user4' },
    { username: 'user5', email: 'user5@gmail.com', password: 'user5' },
    { username: 'user6', email: 'user6@gmail.com', password: 'user6' },
    { username: 'user7', email: 'user7@gmail.com', password: 'user7' },
    { username: 'user8', email: 'user8@gmail.com', password: 'user8' },
  ];

  // create(data: Partial<LogInModel>) {
  //   this.admin.push(data);
  //   return of(data);
  // }

  fetch = () => {
    return of(this.admin);
  };
}
