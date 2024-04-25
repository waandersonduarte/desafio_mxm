using AutoMapper;
using ClinicaOdontologicaBackEnd.Domain.Dtos.Consulta;
using ClinicaOdontologicaBackEnd.Domain.Models;

namespace ClinicaOdontologicaBackEnd.Domain.Profiles;

public class ConsultaProfile : Profile
{
    public ConsultaProfile(){
        CreateMap<ConsultaCreateDto, Consulta>();
        CreateMap<ConsultaUpdateDto, Consulta>();
        CreateMap<Consulta, ConsultaReadDto>();
    }
}