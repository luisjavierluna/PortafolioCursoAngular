import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(parametros => {
        this.productosService.getProducto(parametros['id'])
          .subscribe( (producto: ProductoDescripcion) => {

            console.log(producto)

          })
      })
  }


}
