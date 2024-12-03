import { Component, OnInit, HostBinding } from '@angular/core';
import { Profesor } from 'src/app/modelos/Profesor';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profesor-form',
  templateUrl: './profesor-form.component.html',
  styleUrls: ['./profesor-form.component.css']
})
export class ProfesorFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  profesor: Profesor ={
    rfc: '',
    nombre: '',
    paterno: '',
    materno:'',
    edad: 0,
    fechaContrato: new Date(),
    sexo: '',
    cedula: 0,
    grado: '',
    direccion: '',
    foto: ''
  };

  edit: boolean = false;

  constructor(private profesorService: ProfesorService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['rfc']){
      this.profesorService.getProfesor(params['rfc']).subscribe(
        res => {
          console.log(res);
          this.profesor = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }
  addProfesor(){
    this.profesorService.createProfesor(this.profesor).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['profesores']);
      },
      err => console.error(err)
    );
  }

  actualizaProfesor(){
    const params = this.activatedRoute.snapshot.params;
    this.profesorService.updateProfesor(params['rfc'],this.profesor).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/profesores']);
      },
      err => console.error(err)
    );
  }
}
