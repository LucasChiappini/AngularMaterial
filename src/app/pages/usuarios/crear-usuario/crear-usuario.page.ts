import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Usuario } from '../../model/usuario';
import { UsuariosService } from '../../../services/usuarios.service';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  selector: 'app-crear-usuario',
  styleUrl: './crear-usuario.page.css',
  templateUrl: './crear-usuario.page.html',
})
export class CrearUsuarioPage {
  private usuariosService = inject(UsuariosService);

  usuario: Usuario = {
    id_usuario: 0,
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    rol: '',
  };

   roles = ['admin', 'user', 'superadmin'];

     guardar(f: NgForm) {
    this.usuariosService.postUsuario({ ...this.usuario });
    f.resetForm();
  }
}
export default CrearUsuarioPage;
