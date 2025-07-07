import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('carrusel', { static: false }) carrusel!: ElementRef;

  mostrarFlechas = false;

  categorias = [
    { nombre: 'Cheesecakes', imagen: 'https://dolcecapriccio.pe/wp-content/uploads/2024/08/bn-sec-2-ne-450x323.png' },
    { nombre: 'Tortas', imagen: 'https://www.vekia.com.pe/cdn/shop/files/1_eca43a84-965b-49f1-9dd9-538dec33a4a8_540x.jpg?v=1717867609' },
    { nombre: 'Pies y Tartas', imagen: 'https://dolcecapriccio.pe/wp-content/uploads/2024/04/pie-dc-ok-ban-1-450x323.png' },
    { nombre: 'Rollitos', imagen: 'https://dolcecapriccio.pe/wp-content/uploads/2024/04/rollo-dc-ok-ban-1-450x323.png' }
  ];

  productos = [
    { nombre: 'Torta de Chocolate', descripcion: 'Torta artesanal de chocolate.', precio: 45, imagen: 'https://siennabakery.pe/wp-content/uploads/2024/09/bc0cb49e-1e44-4d98-a991-4d1be982927f-600x750.jpg', categoria: 'Tortas' },
    { nombre: 'Cheesecake Sour', descripcion: 'Cheesecake de Pisco Sour.', precio: 80, imagen: 'https://dolcecapriccio.pe/wp-content/uploads/2024/04/cheesecake-sour-1.png', categoria: 'Cheesecakes' },
    { nombre: 'Rollo de Chirimoya', descripcion: 'Pionono de chirimoya.', precio: 30, imagen: 'https://dolcecapriccio.pe/wp-content/uploads/2024/04/rollo-de-chirimoya-1.jpg', categoria: 'Rollitos' },
    { nombre: 'Quiche de rocoto', descripcion:'Relleno con rocoto',precio:45, imagen: 'https://dolcecapriccio.pe/wp-content/uploads/2024/06/roco1-450x450.jpg', categoria: 'Pastelería Salada' }
  ];

  filtros = ['Todos', 'Tortas', 'Cheesecakes', 'Rollitos','Pastelería Salada'];
  filtroSeleccionado = 'Todos';

  get productosFiltrados() {
    if (this.filtroSeleccionado === 'Todos') {
      return this.productos;
    }
    return this.productos.filter(p => p.categoria === this.filtroSeleccionado);
  }

  seleccionarFiltro(filtro: string) {
    this.filtroSeleccionado = filtro;
  }

  moverCarrusel(direccion: 'izquierda' | 'derecha') {
    const contenedor = this.carrusel.nativeElement;
    const scrollCantidad = contenedor.offsetWidth * 0.5;
    contenedor.scrollBy({
      left: direccion === 'derecha' ? scrollCantidad : -scrollCantidad,
      behavior: 'smooth'
    });
  }
}








