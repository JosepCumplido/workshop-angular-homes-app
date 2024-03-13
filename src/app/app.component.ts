import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
      </header>
      <section class="content">
        <b>Hello World!</b>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [],
})
export class AppComponent {
  title = 'homes';
}
