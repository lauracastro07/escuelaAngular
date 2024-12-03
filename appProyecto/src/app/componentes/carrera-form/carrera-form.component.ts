import { Component, OnInit, HostBinding } from '@angular/core';
import { Carrera } from 'src/app/modelos/Carrera';
import { CarreraService } from 'src/app/servicios/carrera.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-carrera-form',
  templateUrl: './carrera-form.component.html',
  styleUrls: ['./carrera-form.component.css']
})
export class CarreraFormComponent implements OnInit{
  @HostBinding('class') classes = 'row';

  carrera: Carrera={
    codigo: 0,
    nombre: ''
  };

  edit: boolean = false;

  constructor(private carreraService: CarreraService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['codigo']){
      this.carreraService.getCarrera(params['codigo']).subscribe(
        res => {
          console.log(res);
          this.carrera = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
    
  }
  addCarrera(){
    this.carreraService.createCarrera(this.carrera).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['carreras']);
      },
      err => console.error(err)
    );
  }

  actualizaCarrera(){
    const params = this.activatedRoute.snapshot.params;
    this.carreraService.updateCarrera(params['codigo'],this.carrera).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/carreras']);
      },
      err => console.error(err)
    );
  }
}
