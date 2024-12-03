import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../modelos/Alumno';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charser=UTF-8';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  API_URI = 'http://localhost:3000/app';

  constructor(private http: HttpClient) { }

  getAlumnos(){
    return this.http.get(`${this.API_URI}/alumnos`);
  }

  getAlumno(cuenta: string){
    return this.http.get(`${this.API_URI}/alumnos/${cuenta}`);
  }

  createAlumno(alumno: Alumno){
    return this.http.post(`${this.API_URI}/alumnos`,alumno);
  }

  deleteAlumno(cuenta: string){
    return this.http.delete(`${this.API_URI}/alumnos/${cuenta}`);
  }

  updateAlumno(cuenta: string, updateAlumno: Alumno): Observable<Alumno>{
    return this.http.put(`${this.API_URI}/alumnos/${cuenta}`, updateAlumno);
  }

  exportToExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'data': worksheet },
      SheetNames: ['data']
    };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcel(excelBuffer, excelFileName);
  }

  private saveAsExcel(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_' + new Date())
  }
}
