import { Component, OnInit } from '@angular/core';


import { latLng, tileLayer, Icon, icon, Marker } from "leaflet";

import * as L from "leaflet";

import "leaflet-routing-machine";
import { VroomService } from './services/vroom.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private vroomService:VroomService){}
  
  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors"
      })
    ],
    zoom: 1,
    center: latLng(46.879966, -121.726909)
  };

  // Override default Icons
  private defaultIcon: Icon = icon({
    iconUrl: "assets/marker-icon.png",
    shadowUrl: "assets/marker-shadow.png",
    iconSize: [24,36],
    iconAnchor: [12,36]
  });

  ngOnInit() {
   Marker.prototype.options.icon = this.defaultIcon;
  }
  onMapReady(map: L.Map) {

    this.vroomService.getResult().subscribe(
      (response:any) => {
        this.addRoutes(response.routes,map)
      },
    )
  }

  addRoutes(routes:any,map: L.Map){
    for (let i = 0 ; i< routes.length;i++) {
      let points = [];
      let steps = routes[i]["steps"];
      
      for (let i = 0 ; i< steps.length;i++){
        let location = steps[i]["location"];
        points.push(L.latLng(location[0],location[1]));
      }
      
      L.Routing.control({
        lineOptions: {styles: [{color: this.getRandomColor(), weight: 5}]},
        show: false,
        collapsible:true,
        waypoints: points,
        routeWhileDragging: true
      }).addTo(map);
    }
  }


  getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}