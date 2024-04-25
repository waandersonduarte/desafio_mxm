using AutoMapper;
using ClinicaOdontologicaBackEnd.Domain.Context;
using ClinicaOdontologicaBackEnd.Domain.Dtos.Consulta;
using ClinicaOdontologicaBackEnd.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicaOdontologicaBackEnd.Controllers;

[ApiController]
[Route("consultas")]
public class ConsultaController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly ClinicaDbContext _dbContext;

    public ConsultaController(IMapper mapper, ClinicaDbContext dbContext){
        _mapper = mapper;
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult GetAll(){
        var consultas = _dbContext.Consultas.ToList();

        return Ok(consultas);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id){
        var buscaConsultas = await _dbContext.Consultas.FindAsync(id);

        if(buscaConsultas == null)
            return NotFound();

        return Ok(buscaConsultas);
    }

    [HttpPost]
    public async Task<IActionResult> Register(ConsultaCreateDto consultaCreateDto){
        var consultaParaCadastrar = _mapper.Map<Consulta>(consultaCreateDto);

        var entityEntity = await _dbContext.Consultas.AddAsync(consultaParaCadastrar);
        await _dbContext.SaveChangesAsync();

        var consultaSalvo = entityEntity.Entity;

        return CreatedAtAction(nameof(GetById), new { consultaSalvo.Id }, consultaSalvo);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(ConsultaUpdateDto consultaUpdateDto, int id){
        var consultaAtualizacoes = _mapper.Map<Consulta>(consultaUpdateDto);

        var consultaParaAtualizar = await _dbContext.Consultas.FindAsync(id);

        if(consultaParaAtualizar is null)
            return NotFound();

        consultaParaAtualizar.PacienteId = consultaAtualizacoes.PacienteId;
        consultaParaAtualizar.AgendaId = consultaAtualizacoes.AgendaId;
        consultaParaAtualizar.Procedimento = consultaAtualizacoes.Procedimento;

        _dbContext.Consultas.Update(consultaAtualizacoes);
        await _dbContext.SaveChangesAsync();
        
        return Ok("O registro da Consulta foi atualizado!");
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id){
        
        var consultaParaDeletar = _dbContext.Consultas.Find(id);

        if(consultaParaDeletar is null)
            return NotFound();

        _dbContext.Remove(consultaParaDeletar);
        await _dbContext.SaveChangesAsync();

        return Ok("Consulta deletado com sucesso!");
    }
}