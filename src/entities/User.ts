import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;
  @Column({ length: 50 })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  /**
   * Compare a password against the user entity
   *
   * @param {string} attempt
   * @returns {Promise<boolean>}
   * @memberof User
   */
  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}
