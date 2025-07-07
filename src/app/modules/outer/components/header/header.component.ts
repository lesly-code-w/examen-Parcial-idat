import { Component, HostListener } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  terminoBusqueda: string = '';
  cantidadCarrito: number = 0; 
  sombraActiva = false;

  constructor(private router: Router) {}

  buscar() {
    const termino = this.terminoBusqueda.trim();
    if (termino) {
      console.log('Buscando:', termino);
      this.router.navigate(['/productos'], { queryParams: { q: termino } });
      this.terminoBusqueda = '';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.sombraActiva = window.scrollY > 50;
  }
}





