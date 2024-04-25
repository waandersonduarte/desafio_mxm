using AutoMapper;
using ClinicaOdontologicaBackEnd.Domain.Context;
using ClinicaOdontologicaBackEnd.Domain.Dtos.Paciente;
using ClinicaOdontologicaBackEnd.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClinicaOdontologicaBackEnd.Controllers;

[ApiController]
[Route("pacientes")]
public class PacienteController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly ClinicaDbContext _dbContext;

    public PacienteController(IMapper mapper, ClinicaDbContext dbContext){
        _mapper = mapper;
        _dbContext = dbContext;
    }

    [HttpGet]
    public IActionResult GetAll(){
        var pacientes = _dbContext.Pacientes.ToList();

        return Ok(pacientes);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id){
        var buscaPaciente = await _dbContext.Pacientes.FindAsync(id);

        if(buscaPaciente == null)
            return NotFound();

        return Ok(buscaPaciente);
    }

    [HttpPost]
    public async Task<IActionResult> Register(PacienteCreateDto pacienteCreateDto){
        var pacienteParaCadastrar = _mapper.Map<Paciente>(pacienteCreateDto);

        var entityEntity = await _dbContext.Pacientes.AddAsync(pacienteParaCadastrar);
        await _dbContext.SaveChangesAsync();

        var pacienteSalvo = entityEntity.Entity;

        return CreatedAtAction(nameof(GetById), new { pacienteSalvo.Id }, pacienteSalvo);
    }

    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(PacienteUpdateDto pacienteUpdateDto, int id){
        var pacienteAtualizacoes = _mapper.Map<Paciente>(pacienteUpdateDto);

        var pacienteParaAtualizar = await _dbContext.Pacientes.FindAsync(id);

        if(pacienteParaAtualizar is null)
            return NotFound();

        pacienteParaAtualizar.Nome = pacienteAtualizacoes.Nome;
        pacienteParaAtualizar.Cpf = pacienteAtualizacoes.Cpf;
        pacienteParaAtualizar.Sexo = pacienteAtualizacoes.Sexo;
        pacienteParaAtualizar.DataNascimento = pacienteAtualizacoes.DataNascimento;
        pacienteParaAtualizar.Telefone = pacienteAtualizacoes.Telefone;
        pacienteParaAtualizar.Endereco = pacienteAtualizacoes.Endereco;

        _dbContext.Pacientes.Update(pacienteAtualizacoes);
        await _dbContext.SaveChangesAsync();
        
        return Ok("O registro do Paciente foi atualizado!");
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id){
        
        var pacienteParaDeletar = _dbContext.Pacientes.Find(id);

        if(pacienteParaDeletar is null)
            return NotFound();

        _dbContext.Remove(pacienteParaDeletar);
        await _dbContext.SaveChangesAsync();

        return Ok("Paciente deletado com sucesso!");
    }
}