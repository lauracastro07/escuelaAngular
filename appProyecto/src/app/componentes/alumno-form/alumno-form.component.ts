import { Component, OnInit, HostBinding } from '@angular/core';
import { Alumno } from 'src/app/modelos/Alumno';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit{
  @HostBinding('class') classes = 'row';
  alumno: Alumno={
    cuenta: 0,
    codigo: 0,
    nombre: '',
    paterno: '',
    materno: '',
    edad: 0,
    sexo: '',
    celular: 0n,
    foto: ''
  };

  edit: boolean = false;

  constructor(private alumnoService: AlumnoService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['cuenta']){
      this.alumnoService.getAlumno(params['cuenta']).subscribe(
        res => {
          console.log(res);
          this.alumno = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }
  addAlumno(){
    this.alumnoService.createAlumno(this.alumno).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['alumnos']);
      },
      err => console.error(err)
    );
  }

  actualizaAlumno(){
    const params = this.activatedRoute.snapshot.params;
    this.alumnoService.updateAlumno(params['cuenta'],this.alumno).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/alumnos']);
      },
      err => console.error(err)
    );
  }
}
