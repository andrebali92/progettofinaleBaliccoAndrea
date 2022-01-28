import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../clienti.service';
import { Clientidata } from '../interfaces/clientidata';

@Component({
  selector: 'app-clienti-detail',
  templateUrl: './clienti-detail.component.html',
  styleUrls: ['./clienti-detail.component.css']
})
export class ClientiDetailComponent implements OnInit {

  cliente: Clienti = new Clienti();

  constructor(
    private route: ActivatedRoute,
    private clientiService: ClientiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientiService.getCliente(params['id']).subscribe(cliente => this.cliente = cliente);
    });
  }

}
