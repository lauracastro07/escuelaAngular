import { NgModule } from '@angular/core';
import { ProfesorFormComponent } from './componentes/profesor-form/profesor-form.component';
import { CarreraFormComponent } from './componentes/carrera-form/carrera-form.component';
import { AlumnoFormComponent } from './componentes/alumno-form/alumno-form.component';
import { AsignaturasFormComponent } from './componentes/asignaturas-form/asignaturas-form.component';
import { AlumasigFormComponent } from './componentes/alumasig-form/alumasig-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorListComponent } from './componentes/profesor-list/profesor-list.component';
import { CarreraListComponent } from './componentes/carrera-list/carrera-list.component';
import { AlumnoListComponent } from './componentes/alumno-list/alumno-list.component';
import { AsignaturasListComponent } from './componentes/asignaturas-list/asignaturas-list.component';
import { AlumasigListComponent } from './componentes/alumasig-list/alumasig-list.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    redirectTo: '/profesores',
    pathMatch: 'full'
  },
  {
    path: 'profesores',
    component: ProfesorListComponent
  },
  {
    path: 'profesores/agregar',
    component: ProfesorFormComponent
  },
  {
    path: 'profesores/actualizar/:rfc',
    component: ProfesorFormComponent
  },
  {
    path: '',
    redirectTo: '/carreras',
    pathMatch: 'full'
  },
  {
    path: 'carreras',
    component: CarreraListComponent
  },
  {
    path: 'carreras/agregar',
    component: CarreraFormComponent
  },
  {
    path: 'carreras/actualizar/:codigo',
    component: CarreraFormComponent
  },
  {
    path: '',
    redirectTo: '/alumnos',
    pathMatch: 'full'
  },
  {
    path: 'alumnos',
    component: AlumnoListComponent
  },
  {
    path: 'alumnos/agregar',
    component: AlumnoFormComponent
  },
  {
    path: 'alumnos/actualizar/:cuenta',
    component: AlumnoFormComponent
  },
  {
    path: '',
    redirectTo: '/asignaturas',
    pathMatch: 'full'
  },
  {
    path: 'asignaturas',
    component: AsignaturasListComponent
  },
  {
    path: 'asignaturas/agregar',
    component: AsignaturasFormComponent
  },
  {
    path: 'asignaturas/actualizar/:clave',
    component: AsignaturasFormComponent
  },
  {
    path: '',
    redirectTo: '/alumnosasignatura',
    pathMatch: 'full'
  },
  {
    path: 'alumnosasignatura',
    component: AlumasigListComponent
  },
  {
    path: 'alumnosasignatura/agregar',
    component: AlumasigFormComponent
  },
  {
    path: 'alumnosasignaturas/actualizar/:cuenta',
    component: AlumasigFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
