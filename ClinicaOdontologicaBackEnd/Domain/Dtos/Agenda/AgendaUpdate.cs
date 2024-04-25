namespace ClinicaOdontologicaBackEnd.Domain.Dtos.Agenda;

public class AgendaUpdateDto
{
   public string Data { get; set; }
    public string Hora { get; set; }

    public int DentistaId { get; set; }
}