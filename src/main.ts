import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
