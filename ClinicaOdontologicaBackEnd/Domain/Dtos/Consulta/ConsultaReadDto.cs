namespace ClinicaOdontologicaBackEnd.Domain.Dtos.Consulta;

public class ConsultaReadDto
{
    public int Id { get; set; }
    public int PacienteId { get; set; }
    public int AgendaId { get; set; }
    public string Procedimento { get; set; }

}