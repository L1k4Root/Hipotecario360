import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from '../cliente/cliente.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  direccion: string;

  @Column({ unique: true })
  rol: string;

  @Column({ type: 'int' })
  valorTasado: number;

  @Column({ default: 'disponible' })
  estado: 'disponible' | 'comprometida' | 'vendida';

  @ManyToOne(() => Client, (client) => client.propiedades)
  client: Client;

  // Ubicación
  @Column({ default: 'Sin comuna', nullable: true }) comuna: string;
  @Column({ default: 'Sin region', nullable: true }) region: string;
  @Column('decimal', { precision: 9, scale: 6, nullable: true }) lat: number;
  @Column('decimal', { precision: 9, scale: 6, nullable: true }) lng: number;

  @CreateDateColumn() createdAt: Date;
}
