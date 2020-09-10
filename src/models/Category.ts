import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('category')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Category;

// import User from './User';

// @Entity('appointments')
// class Appointment {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   provider_id: string;

//   @ManyToOne(() => User)
//   @JoinColumn({ name: 'provider_id' })
//   provider: User;

//   @Column('timestamp with time zone')
//   date: Date;

//   @CreateDateColumn()
//   created_at: Date;

//   @UpdateDateColumn()
//   updated_at: Date;
// }

// export default Appointment;
