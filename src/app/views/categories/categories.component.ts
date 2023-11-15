import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private masterService: MasterService) {}
  foodCategory: any;
  ngOnInit(): void {
    this.loadFoodCategories();
  }
  loadFoodCategories() {
    this.masterService.getFoodCategory().subscribe((res: any) => {
      console.log(res);
      this.foodCategory = res.data;
    });
  }
}
