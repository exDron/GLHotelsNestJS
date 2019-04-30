import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 100 })
  address: string;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 50 })
  phone: string;

  @Column({ length: 300 })
  picture: string;

  @Column()
  stars: number;
}
