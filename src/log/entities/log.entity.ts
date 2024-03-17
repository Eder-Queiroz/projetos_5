import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { UserLock } from '../../user-lock/entities/user-lock.entity';

@Entity()
export class Log {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @ManyToOne(() => UserLock)
  userLock!: UserLock;
}
