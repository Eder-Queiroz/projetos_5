import {
  Collection,
  Entity,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { UserLock } from '../../user-lock/entities/user-lock.entity';

@Entity()
export class Lock {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @OneToMany(() => UserLock, (userLock) => userLock.lock)
  userLocks: Collection<UserLock> = new Collection<UserLock>(this);
}
