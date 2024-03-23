# Workspace  
 
 A collection of Angular projects (that is, applications and libraries) powered by the Angular CLI that are typically co-located in a single source-control repository (such as git).

---
## Create a workspace and initial application

```angular
>ng new demoa-app
```

## Run the application

```angular
>cd demoa-app
>ng serve --open
```

The --open option launches the browser, and displays the page

## Workspace and project file structure
>>Check Slide
## Workspace configuration files
TODO:

## main.ts  

```javascript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
>>Check Slide
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
```

