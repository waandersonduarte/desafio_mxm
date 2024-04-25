namespace ClinicaOdontologicaBackEnd.Domain.Models;

public class Consulta : Entity
{
    public int PacienteId { get; set; }
    public virtual Paciente Paciente { get; set; }

    public int AgendaId { get; set; }
    public virtual Agenda Agenda { get; set;}

    public string Procedimento { get; set; }
}