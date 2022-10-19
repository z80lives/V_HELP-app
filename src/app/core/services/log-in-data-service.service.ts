import { of } from 'rxjs';

interface LogInModel {
  username: string;
  email: string;
  password: string;
  schoolName: string;
  schoolID: string;
}

export class LogInDataServiceService {
  private admin: LogInModel[] = [
    { username: 'user1', email: 'user1@gmail.com', password: 'user1', schoolID: "S1", schoolName:"school1" },
    { username: 'user2', email: 'user2@gmail.com', password: 'user2', schoolID: "S2", schoolName:"school2" },
    { username: 'user3', email: 'user3@gmail.com', password: 'user3', schoolID: "S3", schoolName:"school3" },
  ];

  create(data: Partial<LogInModel>) {
    this.admin.push(data as LogInModel);
    return of(data);
  }

  updateByUsername(username : string, data : any){
    const foundIndex = this.admin.findIndex(user => user.username === username);
    if(foundIndex != -1){
      this.admin[foundIndex] = {
        ...this.admin[foundIndex],
        ...data
      }
      return of(true);
    }
    return of(false);
  }

  findByEmail(email : string){
    return this.admin.find(user => user.email === email);
  }


  findByUsername(username : string){
    return this.admin.find(user => user.username === username);
  }

  fetch = () => {
    return of(this.admin);
  };
}
