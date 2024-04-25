namespace ClinicaOdontologicaBackEnd.Domain.Models;
using ClinicaOdontologicaBackEnd.Domain.Enums;
public class Paciente : Entity
{
    public string Nome { get; set; }
    public string Cpf { get; set; }
    public GeneroPaciente Sexo { get; set; } = GeneroPaciente.MASCULINO;
    public string DataNascimento { get; set; }
    public string Telefone { get; set; }
    public string Endereco { get; set; }
}