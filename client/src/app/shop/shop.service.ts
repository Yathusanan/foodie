import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private baseUrl = "https://localhost:44398/api/";

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number) {
    let params = new HttpParams();

    if (brandId) {
      params = params.append('brandId', brandId.toString());
    }

    if (typeId) {
      params = params.append('typeId', typeId.toString());
    }

    return this.http.get(this.baseUrl + 'products', {observe: 'response', params})
                    .pipe(
                      map( response => {
                        return response.body;
                      })
                    );
  }

  getBrands() {
    return this.http.get(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get(this.baseUrl + 'products/types');
  }
}
