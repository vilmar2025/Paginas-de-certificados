import { Routes } from '@angular/router';
import { Certificados  } from "./certificados/certificados";
import { Certificadoform } from './pages/certificadoform/certificadoform';
import { Certificado } from './pages/certificado/certificado';

export const routes: Routes = [
{
path: "",
component: Certificado
},
{
path: "certificados/novo",
component: Certificadoform
},
{
path: "certificados/1",
component: Certificado
},
];

