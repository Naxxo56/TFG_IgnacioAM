import { Component, OnInit } from '@angular/core';
import { ProductosServicesService } from 'src/app/services/productos-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { PdfMakeWrapper, Table, Txt } from 'pdfmake-wrapper';
import { PeticionesApiService } from 'src/app/services/peticiones-api.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pagar-components',
  templateUrl: './pagar-components.component.html',
  styleUrls: ['./pagar-components.component.css'],
})
export class PagarComponentsComponent implements OnInit {
  direccion: any;

  metodosPago;
  metodoPagoElegido: string = '0';
  noPagado: boolean = true;

  listaPDF: any[] = [];
  precioFinal: number = 0;


  nombrePDF: string;
  precioPDF: number;
  pdf = new PdfMakeWrapper();

  contactForm: FormGroup;
  contactFormPayPal: FormGroup;

  listaCarrito:any[]=[];
  listaCompra:any[]=[];

  constructor(
    private servicios: ProductosServicesService,
    private serApi: PeticionesApiService
  ) {
    this.metodosPago = ['Tarjeta de credito', 'PayPal'];
    this.contactForm = this.createFormGroup();
    this.contactFormPayPal = this.createFormGroupPayPal();
  }
  ngOnInit(): void {
    this.listaCarrito = this.servicios.getListaCarrito();
    this.listaCompra = this.servicios.getListaNueva();
    this.listaPDF = this.servicios.getListaNueva();

    this.listaPDF.forEach((element) => {
      element.forEach((elemento) => {
        this.precioFinal += elemento.precio;
      });
    });
  }
  generarPDF() {
    this.pdf.add(
      new Txt('Gracias por comprar con NEW SONY')
        .fontSize(19)
        .relativePosition(100, -25)
        .bold()
        .italics().end
    );
    this.pdf.add(new Txt('Resumen del pedido:').end);
    this.pdf.add(
      new Table([['NOMBRE', 'PRECIO']]).widths([260, 240]).bold().end
    );
    for (let index = 0; index < this.listaPDF.length; index++) {
      const element = this.listaPDF[index];
      for (let index = 0; index < element.length; index++) {
        const elemento = element[index];
        this.nombrePDF = elemento.nombre;
        this.precioPDF = elemento.precio;
        this.pdf.add(
          new Table([[this.nombrePDF, this.precioPDF + '€']])
            .widths([260, 240])
            .bold().end
        );
      }
    }
    this.pdf.add(
      new Table([[' ', 'Precio Total:' + this.precioFinal + '€']])
        .widths([260, 240])
        .bold().end
    );
    this.pdf.create().open();

    for (let index = 0; index < this.listaCarrito.length; index++) {
      const element = this.listaCarrito[index];
      this.listaCarrito.splice(index,this.listaCarrito.length);
      this.listaCompra.splice(index,this.listaCompra.length);
    }
  }
  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
      ]),
      fecha: new FormControl('',[
        Validators.required
      ]),
      numero: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      ccv: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
      ]),
    });
  }

  createFormGroupPayPal() {
    return new FormGroup({
      numeroPayPal: new FormControl('', [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      fechaPayPal: new FormControl('',[
        Validators.required
      ]),
      ccvPayPal: new FormControl('', [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(3),
      ]),
    });
  }

  borrar(){
    for (let index = 0; index < this.listaCarrito.length; index++) {
      const element = this.listaCarrito[index];
      this.listaCarrito.splice(index,this.listaCarrito.length);
      this.listaCompra.splice(index,this.listaCompra.length);
    }
  }º

  onResetForm() {
    this.contactForm.reset();
    this.contactFormPayPal.reset()
  }

  get nombre() {
    return this.contactForm.get('nombre');
  }
  get fecha() {
    return this.contactForm.get('fecha');
  }
  get numero() {
    return this.contactForm.get('numero');
  }
  get ccv() {
    return this.contactForm.get('ccv');
  }


  get fechaPayPal() {
    return this.contactFormPayPal.get('fechaPayPal');
  }
  get numeroPayPal() {
    return this.contactFormPayPal.get('numeroPayPal');
  }
  get ccvPayPal() {
    return this.contactFormPayPal.get('ccvPayPal');
  }
  
  pagarDef() {
    this.noPagado = false;
    this.direccion = this.servicios.getCoordenadas();
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      return false;
    }
    return true;
  }
}
