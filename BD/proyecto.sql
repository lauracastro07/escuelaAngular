create database proyecto;

use proyecto;

Create table carrera (
  codigo int primary key,
  nombre varchar(50));

Create table grupo (
  clave int primary key,
  nombre varchar(50),
  turno varchar(50));

CREATE TABLE alumno (
  cuenta int primary key,
  codigo int,
  nombre varchar(50),
  paterno varchar(50),
  materno varchar(50),
  edad tinyint,
  sexo char,
  celular bigint,
  foto varchar(10000),
  foreign key (codigo) references carrera (codigo) ON DELETE CASCADE ON UPDATE CASCADE);

create table profesor (
    rfc varchar(20) primary key,
    nombre varchar(50),
    paterno varchar(50),
    materno varchar(50),
    edad tinyint,
    fechaContrato date,
    sexo varchar(10),
    cedula int,
    grado varchar(50),
    direccion varchar(100),
    foto varchar(10000));

CREATE TABLE asignaturas (
  clave int primary key,
  rfc varchar(20),
  nombre varchar(80),
  cantHoras int,
  creditos int,
  precio double,
  fechaHoraRegistro timestamp default current_timestamp,
  foreign key (rfc) references profesor (rfc) ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE alumnoasignatura (
  cuenta int,
  clave int,
  FOREIGN KEY (cuenta) REFERENCES alumno (cuenta) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (clave) REFERENCES asignaturas (clave) ON DELETE CASCADE ON UPDATE CASCADE);

CREATE TABLE grupoalumno (
  cuenta int,
  clave int,
  FOREIGN KEY (cuenta) REFERENCES alumno (cuenta) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (clave) REFERENCES grupo (clave) ON DELETE CASCADE ON UPDATE CASCADE);
