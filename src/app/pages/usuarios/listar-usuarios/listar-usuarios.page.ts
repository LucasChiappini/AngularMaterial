import { Component, inject } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  imports: [],
  selector: 'app-listar-usuarios',
  styleUrl: './listar-usuarios.page.css',
  templateUrl: './listar-usuarios.page.html',
})
export class ListarUsuariosPage {
  private usuariosService = inject(UsuariosService);

  get dataSource(): Usuario[] {
    return this.usuariosService.getUsuarios();
  }

  eliminar(id: number) {
    this.usuariosService.usuarios = this.usuariosService.usuarios.filter(
      (u) => u.id_usuario !== id,
    );
  }
}
export default ListarUsuariosPage;
