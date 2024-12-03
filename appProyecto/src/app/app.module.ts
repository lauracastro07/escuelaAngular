import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { ProfesorFormComponent } from './componentes/profesor-form/profesor-form.component';
import { CarreraFormComponent } from './componentes/carrera-form/carrera-form.component';
import { AlumnoFormComponent } from './componentes/alumno-form/alumno-form.component';
import { AsignaturasFormComponent } from './componentes/asignaturas-form/asignaturas-form.component';
import { AlumasigFormComponent } from './componentes/alumasig-form/alumasig-form.component';
import { ProfesorListComponent } from './componentes/profesor-list/profesor-list.component';
import { CarreraListComponent } from './componentes/carrera-list/carrera-list.component';
import { AlumnoListComponent } from './componentes/alumno-list/alumno-list.component';
import { AsignaturasListComponent } from './componentes/asignaturas-list/asignaturas-list.component';
import { AlumasigListComponent } from './componentes/alumasig-list/alumasig-list.component';
import { FormsModule } from '@angular/forms';
import { ProfesorService } from './servicios/profesor.service';
import { CarreraService } from './servicios/carrera.service';
import { AlumnoService } from './servicios/alumno.service';
import { AsignaturasService } from './servicios/asignaturas.service';
import { AlumasigService } from './servicios/alumasig.service';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AlumnoPipe } from './pipes/alumno.pipe';
import { AlumnoasigPipe } from './pipes/alumnoasig.pipe';
import { AsignaturasPipe } from './pipes/asignaturas.pipe';
import { CarreraPipe } from './pipes/carrera.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfesorFormComponent,
    CarreraFormComponent,
    AlumnoFormComponent,
    AsignaturasFormComponent,
    AlumasigFormComponent,
    ProfesorListComponent,
    CarreraListComponent,
    AlumnoListComponent,
    AsignaturasListComponent,
    AlumasigListComponent,
    InicioComponent,
    FilterPipe,
    AlumnoPipe,
    AlumnoasigPipe,
    AsignaturasPipe,
    CarreraPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProfesorService,
    CarreraService,
    AlumnoService,
    AsignaturasService,
    AlumasigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
