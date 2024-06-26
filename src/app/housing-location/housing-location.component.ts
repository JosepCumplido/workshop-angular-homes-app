import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent implements OnInit{
  @Input() housingLocation!: HousingLocation;
  

  constructor() {

  }
  ngOnInit(): void {

  }
}
