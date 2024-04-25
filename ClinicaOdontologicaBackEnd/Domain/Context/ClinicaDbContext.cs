using ClinicaOdontologicaBackEnd.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace ClinicaOdontologicaBackEnd.Domain.Context;

public class ClinicaDbContext : DbContext
{

    public ClinicaDbContext(DbContextOptions<ClinicaDbContext> options)
    : base(options){
    }

    public DbSet<Paciente> Pacientes { get; set; }
    public DbSet<Dentista> Dentistas { get; set; }
    public DbSet<Agenda> Agendas { get; set; }
    public DbSet<Consulta> Consultas { get; set; }
}