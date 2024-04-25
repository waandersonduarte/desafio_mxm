namespace ClinicaOdontologicaBackEnd.Domain.Dtos.Agenda;

public class AgendaCreateDto
{
    public string Data { get; set; }
    public string Hora { get; set; }

    public int DentistaId { get; set; }
}