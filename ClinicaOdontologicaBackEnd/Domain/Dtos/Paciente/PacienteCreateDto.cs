using System.ComponentModel.DataAnnotations;
using ClinicaOdontologicaBackEnd.Domain.Enums;

namespace ClinicaOdontologicaBackEnd.Domain.Dtos.Paciente;

public class PacienteCreateDto
{
    [Required]
    public string Nome { get; set; }
    [Required]
    public string Cpf { get; set; }
    public string Sexo { get; set; }
    public string DataNascimento { get; set; }
    [Required]
    public string Telefone { get; set; }
    public string Endereco { get; set; }
}