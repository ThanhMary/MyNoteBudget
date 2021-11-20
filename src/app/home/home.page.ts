/* eslint-disable @typescript-eslint/member-ordering */
import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  // @ViewChild(CalendarComponent, {static: false}) myCalendar: CalendarComponent;
  currentDate = new Date();
  currentMonth: string;
  newEvent = {
    title: '',
    description: '',
    imageURL: '',
    startTime: '',
    endTime: ''
  };
  minDate = new Date().toISOString();
  allEvents = [];

  constructor() {}

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }

  showAddEvent: boolean;
  showHideForm(){
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      imageURL: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }
addEvent() {
  this.allEvents.push({
    title: this.newEvent.title,
    startTime:  new Date(this.newEvent.startTime),
    endTime: new Date(this.newEvent.endTime),
    description: this.newEvent.description,
    imageURL: this.newEvent.imageURL
  });
  this.showHideForm();
}
onTimeSelected(ev: any) {
  const selected = new Date(ev.selectedTime);
  this.newEvent.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.newEvent.endTime = (selected.toISOString());
}
}
