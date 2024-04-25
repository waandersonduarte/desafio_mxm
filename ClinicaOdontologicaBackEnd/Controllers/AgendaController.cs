using AutoMapper;
using ClinicaOdontologicaBackEnd.Domain.Context;
using ClinicaOdontologicaBackEnd.Domain.Dtos.Agenda;
using ClinicaOdontologicaBackEnd.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicaOdontologicaBackEnd.Controllers;

[ApiController]
[Route("agendas")]
public class AgendaController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly ClinicaDbContext _dbContext;

    public AgendaController(IMapper mapper, ClinicaDbContext dbContext){
        _mapper = mapper;
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult GetAll(){
        var agendas = _dbContext.Agendas.ToList();

        return Ok(agendas);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id){
        var buscaAgenda = await _dbContext.Agendas.FindAsync(id);

        if(buscaAgenda == null)
            return NotFound();

        return Ok(buscaAgenda);
    }

    [HttpPost]
    public async Task<IActionResult> Register(AgendaCreateDto agendaCreateDto){
        var agendaParaCadastrar = _mapper.Map<Agenda>(agendaCreateDto);

        var entityEntity = await _dbContext.Agendas.AddAsync(agendaParaCadastrar);
        await _dbContext.SaveChangesAsync();

        var agendaSalvo = entityEntity.Entity;

        return CreatedAtAction(nameof(GetById), new { agendaSalvo.Id }, agendaSalvo);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(AgendaUpdateDto agendaUpdateDto, int id){
        var agendaAtualizacoes = _mapper.Map<Agenda>(agendaUpdateDto);

        var agendaParaAtualizar = await _dbContext.Agendas.FindAsync(id);

        if(agendaParaAtualizar is null)
            return NotFound();

        agendaParaAtualizar.Data = agendaAtualizacoes.Data;
        agendaParaAtualizar.Hora = agendaAtualizacoes.Hora;
        agendaParaAtualizar.DentistaId = agendaAtualizacoes.DentistaId;

        _dbContext.Agendas.Update(agendaAtualizacoes);
        await _dbContext.SaveChangesAsync();
        
        return Ok("O registro da Agenda foi atualizado!");
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id){
        
        var agendaParaDeletar = _dbContext.Agendas.Find(id);

        if(agendaParaDeletar is null)
            return NotFound();

        _dbContext.Remove(agendaParaDeletar);
        await _dbContext.SaveChangesAsync();

        return Ok("Agenda deletado com sucesso!");
    }
}