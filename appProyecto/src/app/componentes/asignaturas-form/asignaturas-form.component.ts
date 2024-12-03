import { Component, OnInit, HostBinding } from '@angular/core';
import { Asignaturas } from 'src/app/modelos/Asignaturas';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-asignaturas-form',
  templateUrl: './asignaturas-form.component.html',
  styleUrls: ['./asignaturas-form.component.css']
})
export class AsignaturasFormComponent implements OnInit{
  @HostBinding('class') classes = 'row';
  asignaturas: Asignaturas={
    clave: 0,
    rfc: '',
    nombre: '',
    cantHoras: 0,
    creditos: 0,
    precio: {},
    fechaHoraRegistro: new Date()

  };

  edit: boolean = false;

  constructor(private asignaturasService: AsignaturasService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['clave']){
      this.asignaturasService.getAsignatura(params['clave']).subscribe(
        res => {
          console.log(res);
          this.asignaturas = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }
  addAsignaturas(){
    delete this.asignaturas.fechaHoraRegistro;
    this.asignaturasService.createAsignatura(this.asignaturas).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['asignaturas']);
      },
      err => console.error(err)
    );
  }

  actualizaAsignatura(){
    delete this.asignaturas.fechaHoraRegistro;
    const params = this.activatedRoute.snapshot.params;
    this.asignaturasService.updateAsignatura(params['clave'],this.asignaturas).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/asignaturas']);
      },
      err => console.error(err)
    );
  }
 
}
