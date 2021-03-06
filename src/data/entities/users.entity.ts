import { Teams } from './teams.entity';
import { Feedbacklog } from './feedbacklog.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity({
    name: 'users',
})
export class Users {

    @PrimaryGeneratedColumn({
        name: 'userID',
    })
    userID: number;

    @Column('varchar', {
        nullable: false,

        length: 100,
        name: 'email',
    })
    email: string;

    @Column('varchar', {
        nullable: false,

        length: 200,
        name: 'password',
    })
    password: string;

    @Column('varchar', {
        nullable: false,
        length: 20,
        unique: true,

        name: 'username',
    })
    username: string;

    @Column('varchar', {
        nullable: false,
        length: 35,

        name: 'firstName',
    })
    firstName: string;

    @Column('varchar', {
        nullable: true,
        length: 35,

        name: 'lastName',
    })
    lastName: string | null;

    @Column('int', {
        nullable: false,
        default: 0,

        name: 'receivedFeedbacks',
    })
    receivedFeedbacks: number;

    @Column('int', {
        nullable: false,
        default: 0,

        name: 'givenFeedbacks',
    })
    givenFeedbacks: number;

    @Column('varchar', {
        nullable: false,
        length: 20,
        default: 'User',

        name: 'role',
    })
    role: string;

    @ManyToMany(type => Teams, team => team.user)
    team: Promise<Teams[]>;

    @OneToMany(type => Feedbacklog, feedbacklog => feedbacklog.reciever, { eager: true })
    received: Feedbacklog[];

    @OneToMany(type => Feedbacklog, feedbacklog => feedbacklog.sender, { eager: true })
    sent: Feedbacklog[];
}
