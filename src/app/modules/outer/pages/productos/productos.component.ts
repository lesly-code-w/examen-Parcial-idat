import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos = [
    { nombre: 'Torta de Chocolate', descripcion: 'Deliciosa torta artesanal.', precio: 45, imagen: 'https://siennabakery.pe/wp-content/uploads/2024/09/bc0cb49e-1e44-4d98-a991-4d1be982927f-600x750.jpg', categoria: 'Tortas' },
    { nombre: 'Cheesecake Sour', descripcion: 'Cheesecake de Pisco Sour.', precio: 80, imagen: 'https://dolcecapriccio.pe/wp-content/uploads/2024/04/cheesecake-sour-1.png', categoria: 'Cheesecakes' },
    { nombre: 'Rollo de Chirimoya', descripcion: 'Pionono de chirimoya.', precio: 30, imagen: 'https://dolcecapriccio.pe/wp-content/uploads/2024/04/rollo-de-chirimoya-1.jpg', categoria: 'Rollitos' }
  ];

  filtros = ['Todos', 'Tortas', 'Cheesecakes', 'Rollitos'];
  filtroSeleccionado = 'Todos';

  get productosFiltrados() {
    if (this.filtroSeleccionado === 'Todos') return this.productos;
    return this.productos.filter(p => p.categoria === this.filtroSeleccionado);
  }

  seleccionarFiltro(filtro: string) {
    this.filtroSeleccionado = filtro;
  }
}
