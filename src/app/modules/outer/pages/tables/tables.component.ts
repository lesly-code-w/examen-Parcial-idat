import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { Customer } from '../../../../interfaces/interfaceCustomer';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  customers: Customer[] = [];
  customer: Partial<Customer> = {};
  selectedUser?: Customer;
  isModalOpen = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.userService.getUsers().subscribe(data => {
      this.customers = data.customers;
    });
  }

  openModal(customer?: Customer): void {
    this.customer = customer ? { ...customer } : {};
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  saveCustomer(): void {
    if (this.customer.id) {
      this.userService.updateUser(this.customer.id, this.customer as Customer).subscribe(() => {
        this.loadCustomers();
        this.closeModal();
      });
    } else {
      const { id, ...customerData } = this.customer;
      this.userService.createUser(customerData as Omit<Customer, 'id'>).subscribe(() => {
        this.loadCustomers();
        this.closeModal();
      });
    }
  }

  deleteCustomer(id: string): void {
    this.userService.deleteUser(id).subscribe(() => this.loadCustomers());
  }

  viewCustomer(customer: Customer): void {
    this.selectedUser = customer;
  }
}
