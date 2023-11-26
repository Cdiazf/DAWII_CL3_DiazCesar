import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.component.html',
  styleUrls: ['./pregunta4.component.css']
})
export class Pregunta4Component implements OnInit{
  locations: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Consumir la API REST GET y obtener los locations con ID PAR
    this.http.get('https://rickandmortyapi.com/api/location')
      .subscribe((data: any) => {
        this.locations = data.results;
      });
  }
}
