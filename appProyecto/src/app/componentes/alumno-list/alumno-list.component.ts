import { Component, OnInit, HostBinding , ViewChild,AfterViewInit} from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Alumno } from 'src/app/modelos/Alumno';

const ELEMENT_DATA: Alumno[] = [];

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit, AfterViewInit{

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  @HostBinding('class') classes = 'row';
  alumnos: any = [];

  constructor(private alumnoService: AlumnoService) { }

  filterPost:string = '';

  displayedColumns: string[] = ['cuenta','codigo','nombre','paterno','materno', 'edad','sexo','celular','foto'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  exportAsXLSX():void{
    this.alumnoService.exportToExcel(this.dataSource.filteredData, 'Lista de Alumnos');
  }

  ngOnInit(): void {
    this.obtenerAlumno();

  }

  obtenerAlumno(){
    this.alumnoService.getAlumnos().subscribe(
      res => {
        this.alumnos = res;
        this.dataSource.filteredData = this.alumnos;
      },
      err => console.error(err)
    );
  }

  borrarAlumno(cuenta: string){
    this.alumnoService.deleteAlumno(cuenta).subscribe(
      res => {
        console.log(res);
        this.obtenerAlumno();
      },
      err => console.error(err)
    );
  }

}
