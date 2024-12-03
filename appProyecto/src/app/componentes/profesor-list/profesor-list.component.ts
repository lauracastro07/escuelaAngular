import { Component, OnInit, HostBinding,ViewChild,AfterViewInit } from '@angular/core';
import { ProfesorService } from 'src/app/servicios/profesor.service';
import { Profesor } from 'src/app/modelos/Profesor';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

const ELEMENT_DATA: Profesor[] = [];

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  @HostBinding('class') classes = 'row';

  profesores: any = [];

  constructor(private profesorService: ProfesorService) { }

  filterPost:string = '';

  displayedColumns: string[] = ['rfc', 'nombre', 'paterno', 'materno', 'edad', 'fechaContrato', 'sexo', 'cedula','grado','direccion', 'foto'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  exportAsXLSX():void{
    this.profesorService.exportToExcel(this.dataSource.filteredData, 'Profesores');
  }

  ngOnInit(): void {
    this.obtenerProfesores();
  }

  obtenerProfesores() {
    this.profesorService.getProfesores().subscribe(
      res => {
        this.profesores = res;
        this.dataSource.filteredData = this.profesores;
      },
      err => console.error(err)
    );

  }

  borrarProfesor(rfc: string) {
    this.profesorService.deleteProfesor(rfc).subscribe(
      res => {
        console.log(res);
        this.obtenerProfesores();
      },
      err => console.error(err)
    );
  }

}
