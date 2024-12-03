import { Component, OnInit, HostBinding , ViewChild, AfterViewInit} from '@angular/core';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Asignaturas } from 'src/app/modelos/Asignaturas';

const ELEMENT_DATA: Asignaturas[] = [];

@Component({
  selector: 'app-asignaturas-list',
  templateUrl: './asignaturas-list.component.html',
  styleUrls: ['./asignaturas-list.component.css']
})
export class AsignaturasListComponent implements OnInit, AfterViewInit{

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }


  @HostBinding('class') classes = 'row';
  asignaturas: any = [];

  constructor(private asignaturasService: AsignaturasService) { }

  filterPost:string = '';

  displayedColumns: string[] = ['clave', 'rfc', 'nombre','cantHoras','creditos','precio', 'fechaHoraRegistro'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  exportAsXLSX():void{
    this.asignaturasService.exportToExcel(this.dataSource.filteredData, 'Asignaturas');
  }

  ngOnInit(): void {
    this.obtenerAsignatura();
  }
  obtenerAsignatura(){
    this.asignaturasService.getAsignaturas().subscribe(
      res => {
        this.asignaturas = res;
        this.dataSource.filteredData = this.asignaturas;
      },
      err => console.error(err)
    );
  }

  borrarAsignatura(clave: string){
    this.asignaturasService.deleteAsignatura(clave).subscribe(
      res => {
        console.log(res);
        this.obtenerAsignatura();
      },
      err => console.error(err)
    );
  }

}
