import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from '../cliente/cliente.entity';
import { Property } from '../propiedades/property.entity';

@Entity({ name: 'hip_loan' })
export class LoanRequest {
  @PrimaryGeneratedColumn() id: number;

  @JoinColumn()
  cliente: Client;
  @ManyToOne(() => Property) @JoinColumn() propiedad: Property;

  @Column('int') monto: number; // CLP
  @Column('int') plazo: number; // Meses
  @Column('int') ingresos: number;
  @Column('int') deudas: number;

  // @Column('float') tasaAnual: number; // %
  // @Column('int') dividendo: number; // CLP
  // @Column('float') ratio: number; // %
  // @Column({ default: 'PENDIENTE' })
  // estado: 'APROBADO' | 'RECHAZADO' | 'PENDIENTE';

  @CreateDateColumn() createdAt: Date;
}
