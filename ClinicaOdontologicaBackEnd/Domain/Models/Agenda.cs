namespace ClinicaOdontologicaBackEnd.Domain.Models;

public class Agenda : Entity
{
    public string Data { get; set; }
    public string Hora { get; set; }

    public int DentistaId { get; set; }
    public virtual Dentista Dentista { get; set; }
}