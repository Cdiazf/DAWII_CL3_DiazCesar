import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from "axios";

@Component({
  selector: 'app-pregunta4',
  templateUrl: './pregunta4.component.html',
  styleUrls: ['./pregunta4.component.css']
})
export class Pregunta4Component implements OnInit{
  locations: any[] = [];

  ngOnInit() {
    // Use Axios to make the HTTP request
    axios.get('https://rickandmortyapi.com/api/location')
      .then((response) => {
        // Assuming the data is in response.data.results
        this.locations = response.data.results;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
}
