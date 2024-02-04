#![no_std]

use gstd::{ prelude::*, ActorId };
use gmeta::{In,Out,InOut,Metadata};


#[derive(Encode, Decode, TypeInfo,  Clone)]
pub enum formularios {

    AddProedu(AddProedu),
    AddDocentes(AddDocentes),
    Addalumnos(AddAlumnos),
    Addgrupos(Addgrupos), 
  
    
}


#[derive(Default, Encode, Decode, Clone, TypeInfo)]
pub struct AddProedu {
    proedu: String,
}
#[derive(Default, Encode, Decode, Clone, TypeInfo)]
pub struct AddDocentes {
    dmatricula: u128,
    dnombre: String,
    dapellidop: String, 
    dapellidom: String,
    dprogramae: String,
    dperfil: String,
    dnumerot: u128,

}
#[derive(Default, Encode, Decode, Clone, TypeInfo)]
pub struct AddAlumnos {
    amatricula: u128,
    anombre: String,
    aapellidop: String, 
    aapellidom: String,
    aprogramae: String,
    anumerot: u128,
    acuatrimestre: String,

}

#[derive(Default, Encode, Decode, Clone, TypeInfo)]
pub struct Addgrupos {
    aggrupo: String,
    cuatrimestre: String,
    alumno: String,
    
}
#[derive(Default, Encode, Decode, Clone, TypeInfo)]
pub struct AsigGruMat {
    matriculad: String,
    grupo: String,
    materia: String,
}