import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [RouterLink,MatListModule],
  templateUrl: './side.component.html',
  styleUrl: './side.component.scss'
})
export class SideComponent {

}
