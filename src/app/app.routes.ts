import { Routes } from '@angular/router';
import { Certificados  } from "./certificados/certificados";
import { Certificadoform } from './pages/certificadoform/certificadoform';
import { Certificado } from './_services/certificado';


export const routes: Routes = [
{
path: "",
component: Certificados
},
{
path: "certificados/novo",
component: Certificadoform
},
{
path: "certificados/: id",
component: Certificado
},
];

