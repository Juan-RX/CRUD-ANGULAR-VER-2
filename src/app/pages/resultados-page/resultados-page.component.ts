import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-resultados-page',
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './resultados-page.component.html',
  styleUrl: './resultados-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultadosPageComponent { }
