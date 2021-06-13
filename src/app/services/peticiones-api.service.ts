import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeticionesApiService {
  
  constructor(private http: HttpClient) {}

  getLatLngMapa(lng,lat){
    //return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+lng+","+lat+".json?access_token=pk.eyJ1IjoibmF4eG81NiIsImEiOiJja243ZGJudnYwbXVyMnJzNHo2NDZ5NDN4In0.dRV-g-m3PhwftDW3furTTw");
    return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+lng+","+lat+".json?access_token=pk.eyJ1IjoibmF4eG81NiIsImEiOiJja243ZGJudnYwbXVyMnJzNHo2NDZ5NDN4In0.dRV-g-m3PhwftDW3furTTw").pipe(catchError(error=> of('no va por esto ----->'+error)));  
  }
}
