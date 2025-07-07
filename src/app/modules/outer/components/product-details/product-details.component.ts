import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailComponent implements OnInit {

  producto: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:8080/products/${id}`).subscribe(res => {
      this.producto = res.product;
    });
  }
}


