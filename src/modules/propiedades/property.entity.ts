import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  direccion: string;

  @Column()
  rol: string;

  @Column({ type: 'int' })
  valorTasado: number;

  @Column({ default: 'disponible' })
  estado: 'disponible' | 'comprometida' | 'vendida';
}
