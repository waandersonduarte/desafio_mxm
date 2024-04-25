import { Routes } from '@angular/router';
import { RegistrarAgendaComponent } from './componentes/agenda/registrar-agenda/registrar-agenda.component';
import { RegistrarConsultaComponent } from './componentes/consulta/registrar-consulta/registrar-consulta.component';
import { RegistrarDentistaComponent } from './componentes/dentista/registrar-dentista/registrar-dentista.component';
import { RegistrarPacienteComponent } from './componentes/paciente/registrar-paciente/registrar-paciente.component';
import { ListarConsultaComponent } from './componentes/consulta/listar-consulta/listar-consulta.component';
import { ListarPacienteComponent } from './componentes/paciente/listar-paciente/listar-paciente.component';
import { ListarAgendaComponent } from './componentes/agenda/listar-agenda/listar-agenda.component';
import { ListarDentistaComponent } from './componentes/dentista/listar-dentista/listar-dentista.component';

export const routes: Routes = [
    {path: '', component: ListarConsultaComponent},
    {path: 'consulta/marcar', component: RegistrarConsultaComponent},

    {path: 'agenda', component: ListarAgendaComponent},
    {path: 'agenda/registrar', component: RegistrarAgendaComponent},

    {path: 'paciente', component: ListarPacienteComponent},
    {path: 'paciente/registrar', component: RegistrarPacienteComponent},

    {path: 'dentista', component: ListarDentistaComponent},
    {path: 'dentista/registrar', component: RegistrarDentistaComponent},
];
