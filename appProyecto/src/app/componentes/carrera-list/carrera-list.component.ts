import { Component, OnInit, HostBinding, ViewChild,AfterViewInit} from '@angular/core';
import { CarreraService } from 'src/app/servicios/carrera.service';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Carrera } from 'src/app/modelos/Carrera';

const ELEMENT_DATA: Carrera[] = [];

@Component({
  selector: 'app-carrera-list',
  templateUrl: './carrera-list.component.html',
  styleUrls: ['./carrera-list.component.css']
})
export class CarreraListComponent implements OnInit, AfterViewInit  {

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  @HostBinding('class') classes = 'row';
  carreras: any = [];

  constructor(private carreraService: CarreraService) { }

  filterPost:string = '';

  displayedColumns: string[] = ['codigo', 'nombre'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  exportAsXLSX():void{
    this.carreraService.exportToExcel(this.dataSource.filteredData, 'Licenciaturas');
  }

  ngOnInit(): void {
    this.obtenerCarrera();
  }

  obtenerCarrera(){
    this.carreraService.getCarreras().subscribe(
      res => {
        this.carreras = res;
        this.dataSource.filteredData = this.carreras;
      },
      err => console.error(err)
    );
  }

  borrarCarrera(codigo: string){
    this.carreraService.deleteCarrera(codigo).subscribe(
      res => {
        console.log(res);
        this.obtenerCarrera();
      },
      err => console.error(err)
    );
  }

}
