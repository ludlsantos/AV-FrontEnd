import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/modelos/login';import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-reestablecer-clave',
  templateUrl: './reestablecer-clave.component.html',
  styleUrls: ['./reestablecer-clave.component.css']
})
export class ReestablecerClaveComponent implements OnInit {

  validator!: FormGroup;
  correo: any;
  login?: Login;

  constructor(private fb: FormBuilder, private LoginService: LoginService, private router:ActivatedRoute, private route: Router) { }



  ngOnInit(): void {
    this.FormBuilding();
    this.router.queryParams.subscribe((params: any) =>{
      this.correo = params.dato
    });
  
  }
  
  FormBuilding() {
    this.validator = this.fb.group({
      pass: ['', [Validators.required]], 
      rePass:['', [Validators.required]]
    })
  }
    

  
  

  cambiarPass(){
    if(this.validator.get('pass')?.value == this.validator.get('rePass')?.value){
        this.LoginService.getLogin(this.correo).subscribe(data => {
          const loginNuevo: Login = {
            rol: data.rol,
            contraseña: this.validator.get('pass')?.value,
            correoElectronico: data.correoElectronico
          }
          this.LoginService.cambiarClave(data.correoElectronico, loginNuevo).subscribe(data =>{
            alert('La contraseña fué cambiada con éxito');
            this.route.navigate(['/home'])
            this.validator.reset();
          });
        })
      }else {
    alert('Las contraseñas no coinciden');
  }

}
}
