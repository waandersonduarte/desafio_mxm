namespace ClinicaOdontologicaBackEnd.Domain.Dtos.Consulta;

public class ConsultaUpdateDto
{
    public int PacienteId { get; set; }
    public int AgendaId { get; set; }
    public string Procedimento { get; set; }

}