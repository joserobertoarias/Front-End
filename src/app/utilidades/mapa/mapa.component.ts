import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordenadasMapaDTO } from 'src/app/model/coordenadasMapaDTO';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  @Output()
  coordenadaSeleccionada: EventEmitter<coordenadasMapaDTO> = new EventEmitter<coordenadasMapaDTO>();
  ngOnInit(): void {

    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud]))

  }

  @Input()
  coordenadasIniciales: coordenadasMapaDTO[] = [];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 13,
    center: latLng(13.696526556872726, -89.18975830078126)
  };

  capas: Marker<any>[] = [];
  

  manejarClickEvent(event: LeafletMouseEvent){
    const lat = event.latlng.lat;
    const lon = event.latlng.lng;

    console.log(lat,lon)

    this.capas = []
    
    this.capas.push(marker([lat,lon],{
      icon: icon({
        iconSize: [25,41],
        iconAnchor: [13, 41],
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));
    this.coordenadaSeleccionada.emit({latitud: lat, longitud: lon})

  }

}
