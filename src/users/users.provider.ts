import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersProvider {
  private user: User;

  constructor() {}

  stayUserInfo(userInfo: User): void {
    this.user = userInfo;
  }

  setRfId(rfid: string): void {
    this.user.rfId = rfid;
  }

  getUserInfo(): User {
    return this.user;
  }

  clearUserInfo(): void {
    this.user = null;
  }
}
