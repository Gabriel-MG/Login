import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import swal from 'sweetalert2'


import { AlertService, UserService } from '../_services/index';
import { User } from '../_models/user';



declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {

	model = new User('','','','','','');
	mostrar = false;
  error = false;
  user: User;
  tipo = 0;
  users: User[] = [];



  constructor(private userService: UserService, private alertService: AlertService, private router: Router) {
   this.user = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.tipo = +this.user['tipo'];
    this.loadAllUsers();
  }

  cambiar()
  {
  	this.mostrar = !this.mostrar;
  }


  refresh()
  {
    window.location.reload();
  }

  registro()
  {
    this.model['tipo'] = $("#tipo").val();
    
    console.log(this.model);
    this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    window.location.reload();
                },
                error => {
                    this.error = true;
                    this.alertService.error(error);
                });
  }

   cerrar()
  {
    this.error = false;
  }

  private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
   }

   deleteUser(_id: string, nombre: string, apellido: string) 
   {
     swal({
       title: '¿Quiere Borrar a ' + nombre + ' '+ apellido +'?',
       text: "¡Usted no podra revertir esta accion!",
       type: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Si, ¡Borralo!',
       cancelButtonText: 'Cancelar'
      }).then((result) => {
          if (result.value) {
          this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });    
          swal('Borrado!','El usuario ah sido Borrardi','success');}});       
    }

}
