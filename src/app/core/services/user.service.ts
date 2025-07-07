import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../interfaces/interfaceCustomer';  

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createUser(customer: Omit<Customer, 'id'>): Observable<any> {
    return this.http.post<any>(this.apiUrl, customer);
  }

  updateUser(id: string, customer: Customer): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, customer);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}


