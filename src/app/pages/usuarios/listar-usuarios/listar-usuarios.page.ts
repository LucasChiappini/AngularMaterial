import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { UsuariosService } from '../../../services/usuarios.service';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [MatTableModule, MatChipsModule, MatButtonModule, MatIconModule],
  templateUrl: './listar-usuarios.page.html',
  styleUrl: './listar-usuarios.page.css',
})
export class ListarUsuariosPage {
  // Servicio con los datos de mi compañero
  private usuariosService = inject(UsuariosService);

  // Columnas a mostrar (ocultamos la contraseña)
  displayedColumns: string[] = ['id_usuario', 'nombre', 'apellido', 'email', 'rol', 'acciones'];

  // Traemos la lista actual
  get dataSource(): Usuario[] {
    return this.usuariosService.getUsuarios();
  }

  // Borrar de la lista
  eliminar(id: number) {
    this.usuariosService.usuarios = this.usuariosService.usuarios.filter(
      (u) => u.id_usuario !== id,
    );
  }
}

export default ListarUsuariosPage;
