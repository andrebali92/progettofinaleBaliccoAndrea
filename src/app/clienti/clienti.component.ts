import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  clienti: Clienti[] = [];

  constructor(private clientiService: ClientiService,
                private router: Router ) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(data => this.clienti = data.content);
  }

  detail(id: number) {
    this.router.navigate(['clienti', id])
  }

}
