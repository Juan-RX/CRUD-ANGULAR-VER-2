import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-puesto-page',
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './puesto-page.component.html',
  styleUrl: './puesto-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PuestoPageComponent { }
