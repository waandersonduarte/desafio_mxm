using AutoMapper;
using ClinicaOdontologicaBackEnd.Domain.Dtos.Paciente;
using ClinicaOdontologicaBackEnd.Domain.Models;

namespace ClinicaOdontologicaBackEnd.Domain.Profiles;

public class PacienteProfile : Profile
{
    public PacienteProfile(){
        CreateMap<PacienteCreateDto, Paciente>();
        CreateMap<PacienteUpdateDto, Paciente>();
        CreateMap<Paciente, PacienteReadDto>();
    }
}