import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
  /*
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: string = 'doughnut';
  @Input() leyenda: string = '';
*/

  @Input() grafico: any;
  doughnutChartLabels: string[] = [];
  doughnutChartData: number[] = [];
  doughnutChartType: string = 'doughnut';
  leyenda: string = 'No hay grafico disponible.-';

  constructor() { }

  ngOnInit() {
    console.log('Grafico', this.grafico);

    if (this.grafico != null) {
      this.doughnutChartLabels =  this.grafico.labels;
      this.doughnutChartData =  this.grafico.data;
      this.doughnutChartType =  this.grafico.type;
      this.leyenda = this.grafico.leyenda;
    }

  }

}
