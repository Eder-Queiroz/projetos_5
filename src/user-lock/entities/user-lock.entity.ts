import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
} from '@mikro-orm/core';
import { User } from '../../users/entities/user.entity';
import { Lock } from '../../locks/entities/lock.entity';
import { Log } from '../../log/entities/log.entity';

@Entity()
export class UserLock {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => User, { joinColumn: 'userId' })
  user!: User;

  @ManyToOne(() => Lock, { joinColumn: 'lockId' })
  lock!: Lock;

  @OneToMany(() => Log, (log) => log.userLock)
  log: Collection<Log> = new Collection<Log>(this);
}
