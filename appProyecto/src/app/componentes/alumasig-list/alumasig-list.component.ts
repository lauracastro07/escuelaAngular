import { Component, OnInit, HostBinding, ViewChild,AfterViewInit } from '@angular/core';
import { AlumasigService } from 'src/app/servicios/alumasig.service';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AlumnoAsignatura } from 'src/app/modelos/AlumAsig';

const ELEMENT_DATA: AlumnoAsignatura[] = [];

@Component({
  selector: 'app-alumasig-list',
  templateUrl: './alumasig-list.component.html',
  styleUrls: ['./alumasig-list.component.css']
})
export class AlumasigListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  @HostBinding('class') classes = 'row';
  alumasigs: any = [];

  constructor(private alumasigService: AlumasigService) { }

  filterPost:string = '';

  displayedColumns: string[] = ['cuenta', 'clave'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  exportAsXLSX():void{
    this.alumasigService.exportToExcel(this.dataSource.filteredData, 'Alumnos_Materias');
  }

  ngOnInit(): void {
    this.obtenerAlumasig();
  }

  obtenerAlumasig(){
    this.alumasigService.getAlumAsigs().subscribe(
      res => {
        this.alumasigs = res;
        this.dataSource.filteredData = this.alumasigs;
      },
      err => console.error(err)
    );
  }

  borrarAlumasig(cuenta: string){
    this.alumasigService.deleteAlumAsig(cuenta).subscribe(
      res => {
        console.log(res);
        this.obtenerAlumasig();
      },
      err => console.error(err)
    );
  }

}
