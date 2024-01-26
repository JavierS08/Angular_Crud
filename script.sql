create database actividad_1;
use actividad_1;
create table clientes(
codigo int NOT NULL auto_increment,
nombre varchar(50),
ciudad varchar(80),
facturacion double,
primary key (codigo)
);

Insert into clientes values(1,"Pepe","madrid",3000);
Insert into clientes values(2,"Laura","sevilla",4023);
Insert into clientes values(3,"Pedro","valencia",124.4)