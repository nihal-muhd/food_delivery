import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getFoodCategory() {
    return this.http.get(
      'https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory'
    );
  }
}
