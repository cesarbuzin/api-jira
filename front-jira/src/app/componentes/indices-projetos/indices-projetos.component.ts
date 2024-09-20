import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TaskDTO } from './TaskDTO';
import { Observable, lastValueFrom } from 'rxjs';
import { UserDTO } from './UserDTO';
import { Router } from '@angular/router';
import html2pdf from 'html2pdf.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-indices-projetos',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './indices-projetos.component.html',
  styleUrls: ['./indices-projetos.component.scss']
})
export default class IndicesProjetosComponent implements OnInit {

  @ViewChild('contentToExport') content: ElementRef | undefined;

  exportToPDF() {

    const element = this.content?.nativeElement;

    const width = element.offsetWidth;  // Largura do elemento
    const height = element.offsetHeight; // Altura do elemento
    
    const options = {
      margin: 0.5,
      filename: 'minha_pagina.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: 'px', // Use pixels se você pegar as dimensões em pixels
        format: [width, 1240], // Usar as dimensões obtidas
        orientation: 'landscape',
        compress: true
      }
    };

    html2pdf().from(element).set(options).save();
  }

  url = 'http://localhost:3333';

  projeto = '';

  sprints: [] = [];
  usuarios: string[] = []

  filtroSprint = '';
  filtroTask = '';
  filtroUsuario = '';

  filtroSprintAplicado = '';
  filtroTaskAplicado = '';
  filtroUsuarioAplicado = '';

  dthInicioSprint : Date | undefined
  dthFimSprint : Date | undefined

  qtdTotalTarefas = 0;
  qtdTarefasBugs = 0;
  qtdTarefasMelhoria = 0;
  qtdTarefasRetornos = 0;
  qtdTarefasBugsRetornos = 0;
  qtdTarefasMelhoriaRetornos = 0;
  qtdRetornosTarefas = 0;

  tempoTotalTarefas = 0;
  tempoTarefasBugs = 0;
  tempoTarefasMelhoria = 0;
  tempoTarefasRetornos = 0;
  tempoTarefasBugsRetornos = 0;
  tempoTarefasMelhoriaRetornos = 0;

  statusTodo = 0;
  statusAndamento = 0;
  statusReview = 0;
  statusAguardandoDeployHomol = 0;
  statusAguardandoTeste = 0;
  statusTeste = 0;
  statusAguardandoDeployProducao = 0;
  statusConcluidas = 0;

  tempoMedioTotalTarefas = 0;
  tempoStatusTodo = 0;
  tempoStatusAndamento = 0;
  tempoStatusReview = 0;
  tempoStatusAguardandoDeployHomol = 0;
  tempoStatusAguardandoTeste = 0;
  tempoStatusTeste = 0;
  tempoStatusAguardandoDeployProducao = 0;
  tempoStatusConcluidas = 0;

  perTempoRetrabalhoDev = 0;
  perTempoRetrabalhoQa = 0;

  tempoAndamento = 0;
  tempoAndamentoRetrabalho = 0;
  tempoTestes = 0;
  tempoTestesRetrabalho = 0;

  usuariosEnvolvidos:UserDTO[] = []

  lstTasks: TaskDTO[] = []

  buscaEfetuada = false;
  consultando = false;

  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {

    this.projeto = this.router.url.replace('/paginas/','');

    var config = {
        headers: {'Access-Control-Allow-Origin': '*'}}
      this.http.get<any>(
        `${this.url}/tasks/projectSprints?project=${this.projeto}`,config
    ).subscribe((response)=>this.sprints = response.sprints);
  }

  carregarUsuarios() {

    var config = {
      headers: {'Access-Control-Allow-Origin': '*'}}

      this.http.get<any>(
      `${this.url}/tasks/projectUsers?project=${this.projeto}&sprint=${this.filtroSprint}&task=${this.filtroTask}`,config
  ).subscribe((response)=>this.usuarios = response.users);
  }

  percentualTarefasAnalisadas(qtd:number, total:number) {

    if(total === 0)
      return 0;

    return ((qtd * 100) / (total)).toFixed();
  }

  atualizarUsuario(usuario:string) {
    this.filtroUsuario = usuario;
    this.consultar();
  }

  atualizarSprint(sprint:string) {
    this.filtroSprint = sprint;
    this.consultar();
  }

  atualizarTask(task:string) {
    this.filtroTask = task;
    this.consultar();
  }

  consultar() {

    this.consultando = true;

    if(this.filtroSprint == '' && this.filtroTask == '' && this.sprints.length > 0) {
      alert('Necessário informar uma sprint ou uma task para consultar');
      this.consultando = false;
      return;
    }

    this.reset();

    if(this.filtroSprint !== '') {
      const sprint:{dt_inicial_sprint:Date, dt_final_sprint:Date} = this.sprints.filter((sprint:{ds_sprint:string, dt_inicial_sprint:Date})=>sprint.ds_sprint === this.filtroSprint)[0]
      this.dthInicioSprint = sprint.dt_inicial_sprint
      this.dthFimSprint = sprint.dt_final_sprint
    }
    
    var config = {
      headers: {'Access-Control-Allow-Origin': '*'}}

      this.http.get<any>(
      `${this.url}/tasks/sprintDataTasks?project=${this.projeto}&sprint=${this.filtroSprint}&user=${this.filtroUsuario}&task=${this.filtroTask}`,config
  ).subscribe(async (response) => {
   
    this.qtdTotalTarefas = response.qtdTarefas??0;
    this.qtdTarefasBugs = response.qtdTarefasBugs??0;
    this.qtdTarefasMelhoria = response.qtdTarefasMelhoria??0;
    this.qtdTarefasRetornos = response.qtdTarefasRetrabalho??0;
    this.qtdTarefasBugsRetornos = response.qtdTarefasBugsRetrabalho??0;
    this.qtdTarefasMelhoriaRetornos = response.qtdTarefasMelhoriaRetrabalho??0;
    this.qtdRetornosTarefas = response.qtdRetornosTarefas??0;

    this.tempoTotalTarefas = this.convertMsToTime(response.tempoTarefas??0);
    this.tempoTarefasBugs = this.convertMsToTime(response.tempoTarefasBugs??0);
    this.tempoTarefasMelhoria = this.convertMsToTime(response.tempoTarefasMelhoria??0);
    this.tempoTarefasRetornos = this.convertMsToTime(response.tempoRetrabalho??0);
    this.tempoTarefasBugsRetornos = this.convertMsToTime(response.tempoRetrabalhoTarefasBug??0);
    this.tempoTarefasMelhoriaRetornos = this.convertMsToTime(response.tempoRetrabalhoTarefasMelhoria??0);

    this.statusTodo = response.qtdPorStatus.TODO??0;
    this.statusAndamento = response.qtdPorStatus.ANDAMENTO??0;
    this.statusReview = response.qtdPorStatus.REVIEW??0;
    this.statusAguardandoDeployHomol = response.qtdPorStatus.DEPLOY_HOMOL??0;
    this.statusAguardandoTeste = response.qtdPorStatus.AGUARDANDO_TESTE??0;
    this.statusTeste = response.qtdPorStatus.TESTE??0;
    this.statusAguardandoDeployProducao = response.qtdPorStatus.DEPLOY_PROD??0;
    this.statusConcluidas = this.qtdTotalTarefas - this.statusTodo - this.statusAndamento - this.statusReview
      - this.statusAguardandoDeployHomol - this.statusAguardandoTeste - this.statusTeste - this.statusAguardandoDeployProducao;

    this.tempoMedioTotalTarefas = this.divisao(this.tempoTotalTarefas, this.qtdTotalTarefas);
    this.tempoStatusTodo = this.divisao(this.convertMsToTime(response.tempoPorStatus.TODO??0), this.qtdTotalTarefas);
    this.tempoStatusAndamento = this.divisao(this.convertMsToTime(response.tempoPorStatus.ANDAMENTO??0), this.qtdTotalTarefas);
    this.tempoStatusReview = this.divisao(this.convertMsToTime(response.tempoPorStatus.REVIEW??0), this.qtdTotalTarefas);
    this.tempoStatusAguardandoDeployHomol = this.divisao(this.convertMsToTime(response.tempoPorStatus.DEPLOY_HOMOL??0), this.qtdTotalTarefas);
    this.tempoStatusAguardandoTeste = this.divisao(this.convertMsToTime(response.tempoPorStatus.AGUARDANDO_TESTE??0), this.qtdTotalTarefas);
    this.tempoStatusTeste = this.divisao(this.convertMsToTime(response.tempoPorStatus.TESTE??0), this.qtdTotalTarefas);
    this.tempoStatusAguardandoDeployProducao = this.divisao(this.convertMsToTime(response.tempoPorStatus.DEPLOY_PROD??0), this.qtdTotalTarefas);
    this.tempoStatusConcluidas = this.tempoMedioTotalTarefas - this.tempoStatusTodo - this.tempoStatusAndamento - this.tempoStatusReview
      - this.tempoStatusAguardandoDeployHomol - this.tempoStatusAguardandoTeste - this.tempoStatusTeste - this.tempoStatusAguardandoDeployProducao;

    this.tempoAndamento = response.tempoPorStatus.ANDAMENTO;
    this.tempoAndamentoRetrabalho = response.tempoRetrabalhoPorStatus.ANDAMENTO;
    this.tempoTestes = response.tempoPorStatus.TESTE;
    this.tempoTestesRetrabalho = response.tempoRetrabalhoPorStatus.TESTE;

    this.usuariosEnvolvidos = []
    for(const user of response.usuarios) {
      const response = await lastValueFrom(this.http.get<any>(
        `${this.url}/tasks/sprintTime?sprint=${this.filtroSprint}&user=${user}${this.dthInicioSprint?'&dthInicio='+this.dthInicioSprint:''}${this.dthFimSprint?'&dthFim='+this.dthFimSprint:''}&task=${this.filtroTask}`, config));
      this.usuariosEnvolvidos.push(new UserDTO(user,this.convertSecondsToHours(response?.seconds?.tempoGastoSec??0)));
    }
    
    this.perTempoRetrabalhoDev = response?.indices?.percentualRetrabalhoDev??0;
    this.perTempoRetrabalhoQa = response?.indices?.percentualRetrabalhoQa??0;
    
    for(const task of response.tasks) {
      const taskDto = new TaskDTO();
      taskDto.id = task.task
      taskDto.descricao = task.data.descricao
      taskDto.status = task.data.statusAtual

      if(task.data.tempoRetrabalhoPorStatus.ANDAMENTO) {
        taskDto.perRetrabalhoDev = (task.data.tempoRetrabalhoPorStatus.ANDAMENTO * 100) / (task.data.tempoPorStatus.ANDAMENTO)
      } else {
        taskDto.perRetrabalhoDev = 0;
      }
      if(task.data.tempoRetrabalhoPorStatus.TESTE) {
        taskDto.perRetrabalhoQa = (task.data.tempoRetrabalhoPorStatus.TESTE * 100) / (task.data.tempoPorStatus.TESTE)
      } else {
        taskDto.perRetrabalhoQa = 0;
      }

      const response = await lastValueFrom(this.http.get<any>(
        `${this.url}/tasks/taskTime?task=${task.task}${this.dthInicioSprint?'&dthInicio='+this.dthInicioSprint:''}${this.dthFimSprint?'&dthFim='+this.dthFimSprint:''}`, config));

      const responseTotal = await lastValueFrom(this.http.get<any>(
          `${this.url}/tasks/taskTime?task=${task.task}`, config));

      taskDto.tempoLancadoSprint = this.convertSecondsToHours(response?.seconds?.tempoGastoSec??0)
      taskDto.tempoLancadoTotal = this.convertSecondsToHours(responseTotal?.seconds?.tempoGastoSec??0)
      taskDto.tempoEmStatusGasto = this.convertMsToTime(task.data.tempoTotal)
      taskDto.tempoEmRetrabalhoStatus = this.convertMsToTime(task.data.tempoRetrabalho)
      taskDto.quantidadeRetornos = task.data.quantidadeRetornos

      taskDto.usuariosEnvolvidos = []
      for(const user of task.data.usuariosEnvolvidos) {
        const response = await lastValueFrom(this.http.get<any>(
          `${this.url}/tasks/sprintTime?sprint=${this.filtroSprint}&user=${user}${this.dthInicioSprint?'&dthInicio='+this.dthInicioSprint:''}${this.dthFimSprint?'&dthFim='+this.dthFimSprint:''}&task=${task.task}`, config));
          taskDto.usuariosEnvolvidos.push(new UserDTO(user,this.convertSecondsToHours(response?.seconds?.tempoGastoSec??0)));
      }
      this.lstTasks.push(taskDto);
    }

    this.consultando = false
    this.buscaEfetuada = true;
  });
  }

  divisao(nominador:number, denominador:number) {
    if(denominador === 0)
      return 0;

    return nominador / denominador
  }

  convertSecondsToHours(seconds:number ) {

    if(!seconds)
      seconds = 0;

    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let retorno

    retorno = parseInt((hours).toString());

    return retorno ?? 0
  }

  convertMsToTime(milliseconds:number ) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let retorno

    retorno = parseInt((hours/24).toString());

    return retorno ?? 0
  }

  padTo2Digits(num:number) {
    return num.toString().padStart(2, '0');
  }

  reset() {
    this.qtdTotalTarefas = 0;
    this.qtdTarefasBugs = 0;
    this.qtdTarefasMelhoria = 0;
    this.qtdTarefasRetornos = 0;
    this.qtdTarefasBugsRetornos = 0;
    this.qtdTarefasMelhoriaRetornos = 0;
    this.qtdRetornosTarefas = 0;

    this.tempoTotalTarefas = 0;
    this.tempoTarefasBugs = 0;
    this.tempoTarefasMelhoria = 0;
    this.tempoTarefasRetornos = 0;
    this.tempoTarefasBugsRetornos = 0;
    this.tempoTarefasMelhoriaRetornos = 0;

    this.statusTodo = 0;
    this.statusAndamento = 0;
    this.statusReview = 0;
    this.statusAguardandoDeployHomol = 0;
    this.statusAguardandoTeste = 0;
    this.statusTeste = 0;
    this.statusAguardandoDeployProducao = 0;
    this.statusConcluidas = 0;

    this.tempoStatusTodo = 0;
    this.tempoStatusAndamento = 0;
    this.tempoStatusReview = 0;
    this.tempoStatusAguardandoDeployHomol = 0;
    this.tempoStatusAguardandoTeste = 0;
    this.tempoStatusTeste = 0;
    this.tempoStatusAguardandoDeployProducao = 0;
    this.tempoStatusConcluidas = 0;

    this.perTempoRetrabalhoDev = 0;
    this.perTempoRetrabalhoQa = 0;

    this.tempoAndamento = 0;
    this.tempoAndamentoRetrabalho = 0;
    this.tempoTestes = 0;
    this.tempoTestesRetrabalho = 0;

    this.dthInicioSprint = undefined
    this.dthFimSprint = undefined

    this.usuariosEnvolvidos = []

    this.lstTasks = []

    this.buscaEfetuada = false;

    this.filtroSprintAplicado = this.filtroSprint;
    this.filtroTaskAplicado = this.filtroTask;
    this.filtroUsuarioAplicado = this.filtroUsuario;
  }
  // private Method
  open(content: ElementRef) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',  size: 'lg', centered: true  }).result.then(
    );
  }
}