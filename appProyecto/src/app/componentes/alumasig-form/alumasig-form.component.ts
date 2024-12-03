import { Component, OnInit, HostBinding } from '@angular/core';
import { AlumnoAsignatura } from 'src/app/modelos/AlumAsig';
import { AlumasigService } from 'src/app/servicios/alumasig.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-alumasig-form',
  templateUrl: './alumasig-form.component.html',
  styleUrls: ['./alumasig-form.component.css']
})
export class AlumasigFormComponent implements OnInit{
  @HostBinding('class') classes = 'row';
  alumnoasignatura: AlumnoAsignatura={
    cuenta: 0,
    clave:0
  };

  edit: boolean = false;

  constructor(private alumasigService: AlumasigService, private router: Router, private activatedRoute : ActivatedRoute) { }



  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['cuenta']){
      this.alumasigService.getAlumAsig(params['cuenta']).subscribe(
        res => {
          console.log(res);
          this.alumnoasignatura = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }
  addAlumasig(){
    this.alumasigService.createAlumAsig(this.alumnoasignatura).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['alumnosasignatura']);
      },
      err => console.error(err)
    );
  }

  actualizaAlumasig(){
    const params = this.activatedRoute.snapshot.params;
    this.alumasigService.updateAlumAsig(params['cuenta'],this.alumnoasignatura).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/alumnosasignatura']);
      },
      err => console.error(err)
    );
  }
}
