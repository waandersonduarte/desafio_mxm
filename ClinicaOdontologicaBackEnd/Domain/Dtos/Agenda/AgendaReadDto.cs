namespace ClinicaOdontologicaBackEnd.Domain.Dtos.Agenda;

public class AgendaReadDto
{
    public int Id { get; set; }
    public string Data { get; set; }
    public string Hora { get; set; }

    public int DentistaId { get; set; }
}