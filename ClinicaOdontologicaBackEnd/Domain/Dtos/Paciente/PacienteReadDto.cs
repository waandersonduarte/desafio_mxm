using System.ComponentModel.DataAnnotations;

namespace ClinicaOdontologicaBackEnd.Domain.Dtos.Paciente;

public class PacienteReadDto
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Cpf { get; set; }
    public string Sexo { get; set; }
    public string DataNascimento { get; set; }
    public string Telefone { get; set; }
    public string Endereco { get; set; }
}