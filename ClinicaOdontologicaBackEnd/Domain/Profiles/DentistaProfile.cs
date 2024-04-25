using AutoMapper;
using ClinicaOdontologicaBackEnd.Domain.Dtos.Dentista;
using ClinicaOdontologicaBackEnd.Domain.Models;

namespace ClinicaOdontologicaBackEnd.Domain.Profiles;

public class DentistaProfile : Profile
{
    public DentistaProfile(){
        CreateMap<DentistaCreateDto, Dentista>();
        CreateMap<DentistaUpdateDto, Dentista>();
        CreateMap<Paciente, DentistaReadDto>();
    }
}