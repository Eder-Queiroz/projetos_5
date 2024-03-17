import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { UserLock } from '../../user-lock/entities/user-lock.entity';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: String;

  @Property()
  password!: String;

  @Property()
  cpf!: String;

  @Property()
  rfId!: String;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @OneToMany(() => UserLock, (userLock) => userLock.user)
  userLocks: Collection<UserLock> = new Collection<UserLock>(this);
}
