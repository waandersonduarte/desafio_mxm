using AutoMapper;
using ClinicaOdontologicaBackEnd.Domain.Context;
using ClinicaOdontologicaBackEnd.Domain.Dtos.Dentista;
using ClinicaOdontologicaBackEnd.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicaOdontologicaBackEnd.Controllers;

[ApiController]
[Route("dentistas")]
public class DentistaController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly ClinicaDbContext _dbContext;

    public DentistaController(IMapper mapper, ClinicaDbContext dbContext){
        _mapper = mapper;
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult GetAll(){
        var dentistas = _dbContext.Dentistas.ToList();

        return Ok(dentistas);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id){
        var buscaDentista = await _dbContext.Dentistas.FindAsync(id);

        if(buscaDentista == null)
            return NotFound();

        return Ok(buscaDentista);
    }

    [HttpPost]
    public async Task<IActionResult> Register(DentistaCreateDto dentistaCreateDto){
        var dentistaParaCadastrar = _mapper.Map<Dentista>(dentistaCreateDto);

        var entityEntity = await _dbContext.Dentistas.AddAsync(dentistaParaCadastrar);
        await _dbContext.SaveChangesAsync();

        var dentistaSalvo = entityEntity.Entity;

        return CreatedAtAction(nameof(GetById), new { dentistaSalvo.Id }, dentistaSalvo);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(DentistaUpdateDto dentistaUpdateDto, int id){
        var dentistaAtualizacoes = _mapper.Map<Dentista>(dentistaUpdateDto);

        var dentistaParaAtualizar = await _dbContext.Dentistas.FindAsync(id);

        if(dentistaParaAtualizar is null)
            return NotFound();

        dentistaParaAtualizar.Nome = dentistaAtualizacoes.Nome;
        dentistaParaAtualizar.Crm = dentistaAtualizacoes.Crm;
        dentistaParaAtualizar.Telefone = dentistaAtualizacoes.Telefone;

        _dbContext.Dentistas.Update(dentistaAtualizacoes);
        await _dbContext.SaveChangesAsync();
        
        return Ok("O registro do Dentista foi atualizado!");
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id){
        
        var dentistaParaDeletar = _dbContext.Dentistas.Find(id);

        if(dentistaParaDeletar is null)
            return NotFound();

        _dbContext.Remove(dentistaParaDeletar);
        await _dbContext.SaveChangesAsync();

        return Ok("Dentista deletado com sucesso!");
    }
}