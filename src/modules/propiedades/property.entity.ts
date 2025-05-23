import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  // Ubicación
  @Column({ default: 'Sin comuna', nullable: true }) comuna: string;
  @Column({ default: 'Sin region', nullable: true }) region: string;
  @Column('decimal', { precision: 9, scale: 6, nullable: true }) lat: number;
  @Column('decimal', { precision: 9, scale: 6, nullable: true }) lng: number;

  @CreateDateColumn() createdAt: Date;
}
