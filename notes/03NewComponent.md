## Adding new Component to the Project 

```javascript
..\demoa-app>ng g component startup  
```

1. This will first create a folder with the name ```startup``` inside the folder ```app```
1. Then will create 4 files
    1. A ```css``` file
    1. A ```HTML``` file (view template)
    1. A ```ts``` file (component) and 
    1. A ```spec.ts``` file for testing
--- 
# Add the new component to the app layout
in **app.component.ts** file:
```javascript
import {StartupComponent} from './startup/startup.component'
...
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StartupComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```
---  

### Using template instead of templateUrl
Delete templateUrl attribute from the **@Component** declarative, and add template attribute  

```javascript
    @Component({
              selector: 'app-startup',
              template: `<h1>Hi...</h1>`,
              styleUrls: ['./startup.component.css']
            })
```
### Build and run the application  
  >\>ng serve --open