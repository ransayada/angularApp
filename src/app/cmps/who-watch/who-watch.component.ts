import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-who-watch',
  templateUrl: './who-watch.component.html',
  styleUrls: ['./who-watch.component.scss'],
})
export class WhoWatchComponent implements OnInit {
  users: User[] = [
    {
      id: 'u101',
      name: 'Admin1',
      favShows: ['Witcher', 'Friends', 'DragRace'],
      url: 'https://res.cloudinary.com/rscloudinary/image/upload/v1646214794/firstAngularApp/admin1_q8ghf7.png',
    },
    {
      id: 'u102',
      name: 'Admin2',
      favShows: ['Witcher', 'Friends', 'DragRace'],
      url: 'https://res.cloudinary.com/rscloudinary/image/upload/v1646214796/firstAngularApp/admin2_yb3hq9.png',
    },
    {
      id: 'u103',
      name: 'Admin3',
      favShows: ['Witcher', 'Friends', 'DragRace'],
      url: 'https://res.cloudinary.com/rscloudinary/image/upload/v1646214798/firstAngularApp/admin3_rqywvy.png',
    },
    {
      id: 'u104',
      name: 'Admin4',
      favShows: ['Witcher', 'Friends', 'DragRace'],
      url: 'https://res.cloudinary.com/rscloudinary/image/upload/v1646214800/firstAngularApp/admin4_ozu9yz.png',
    },
    {
      id: 'u105',
      name: 'Admin5',
      favShows: ['Witcher', 'Friends', 'DragRace'],
      url: 'https://res.cloudinary.com/rscloudinary/image/upload/v1646214802/firstAngularApp/admin5_dqbiae.png',
    },
  ];

  currentUser: User = {
    name: '',
    id: '',
    favShows: [],
    url: '',
  };
  showUserList = true;
  shows = [];

  selectUser(user: any) {
    this.currentUser = user;
    this.showUserList = false;
    this.shows = user.favShows;
  }

  goBack() {
    this.showUserList = true;
  }

  deleteUser(userId: string) {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  addUser() {
    const newName: ReturnType<typeof prompt> = prompt('Please enter username');
    const num = Date.now() % 1000;
    const url = Math.floor(Math.random() * (5 - 1) + 1);
    const newUser = {
      name: newName,
      id: 'u' + num,
      url: `${url}`,
    };
    this.users.push(newUser);
  }

  constructor() {}

  ngOnInit(): void {}
}
