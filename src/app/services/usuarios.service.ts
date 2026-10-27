import { Injectable } from '@angular/core';
import { Usuario } from '../pages/model/usuario';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  public usuarios: Usuario[] = [
    {
      id_usuario: 1,
      nombre: 'Lucas',
      apellido: 'Chiappini',
      email: 'lucas.chiappini@ucu.edu.uy',
      password: '123456',
      rol: 'admin',
    },
    {
      id_usuario: 2,
      nombre: 'Felipe',
      apellido: 'Castillo',
      email: 'felipe.castillo@ucu.edu.uy',
      password: '123456',
      rol: 'user',
    },
    {
      id_usuario: 3,
      nombre: 'Ernesto',
      apellido: 'Diaz',
      email: 'ernesto.diaz@ucu.edu.uy',
      password: '123456',
      rol: 'superadmin',
    },
  ];

  lastIdUsuario = 3;

  getUsuarios() {
    return this.usuarios;
  }

  postUsuario(usuario: Usuario) {
    this.lastIdUsuario++;
    usuario.id_usuario = this.lastIdUsuario;
    this.usuarios.push(usuario);
  }
}
