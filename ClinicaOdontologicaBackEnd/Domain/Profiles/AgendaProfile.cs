using AutoMapper;
using ClinicaOdontologicaBackEnd.Domain.Dtos.Agenda;
using ClinicaOdontologicaBackEnd.Domain.Models;

namespace ClinicaOdontologicaBackEnd.Domain.Profiles;

public class AgendaProfile : Profile
{
    public AgendaProfile(){
        CreateMap<AgendaCreateDto, Agenda>();
        CreateMap<AgendaUpdateDto, Agenda>();
        CreateMap<Agenda, AgendaReadDto>();
    }
}