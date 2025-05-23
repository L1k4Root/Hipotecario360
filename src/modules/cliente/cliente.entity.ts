import { LoanRequest } from 'src/modules/credito/credito.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'hip_client' })
export class Client {
  @PrimaryGeneratedColumn() id: number;

  @Column({ unique: true }) rut: string;
  @Column() nombre: string;
  @Column({ unique: true }) email: string;
  @Column() passwordHash: string; // bcrypt

  @Column('int') ingresos: number;
  @Column('int', { default: 0 }) deudas: number;
  @Column('int', { default: 600 }) score: number;

  @OneToMany(() => LoanRequest, (loan) => loan.cliente)
  prestamos: LoanRequest[];
}
