import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../core/services/project.service";
import {ProjectModel} from "../core/models/project.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  projects =[] as ProjectModel[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    const msg = JSON.stringify(localStorage.getItem('message'));
    console.log(msg);
    if (msg !== 'null') {
      this.message = msg;
    }
    this.projectService.getProjects().subscribe( datas => {
      for(let data of datas) {
        let model = <ProjectModel>data.body;
        this.projects.push(model)
      }
      this.message = '';
      console.log(this.projects)
    })
  }

}
