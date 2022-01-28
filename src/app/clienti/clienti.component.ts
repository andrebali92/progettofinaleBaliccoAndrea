import { Component, OnInit } from '@angular/core';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  clienti: Clienti[] = [];

  constructor(private clientiService: ClientiService ) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(data => this.clienti = data.content);
  }

}
