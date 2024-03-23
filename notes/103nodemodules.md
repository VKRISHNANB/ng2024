## Installing Node modules in the context of Angular.
1. Local installation
1. Global installation

### A) Local Installation (Recommended):  

By default, when you run ``` npm install ``` within an Angular project, it installs the dependencies locally in the <b>node_modules folder</b> within your project directory.  
This approach ensures that each project has its own set of dependencies, allowing different applications to use different versions of the same package if needed.  
#### For most scenarios, this ```local``` installation is recommended because it provides better isolation and version control.  

### B) Global Installation (Not Common for Angular):
Global installation of Node modules is typically used for tools or utilities that are meant to be accessible across multiple projects.  

```Here’s why:```  
<b>Angular CLI:</b> The Angular CLI (Command Line Interface) tools, which are essential for creating and managing Angular projects, should be installed ```globally``` using ```npm install -g @angular/cli```.  
**Project Dependencies:** The actual dependencies (such as Angular libraries, third-party packages, etc.) should be installed ```locally``` within your project.  
**Dev Dependencies:** Dev dependencies (like testing frameworks, build tools, etc.) are also installed ```locally``` as part of your project setup.   
**```If you install packages globally, they won’t be available directly within your project, and you’ll need to manage paths and references manually.```**  
**Managing Global Packages:**
If you still want to install packages globally, you can use the -g flag with npm install.  
For example:
```npm install -g package-name```

However, keep in mind that <h3> globally installed packages are not automatically accessible within your Angular project.</h3>
To make globally installed packages available, you can set the ```NODE_PATH environment variable``` to include the global installation directory.  
For instance:  export ```NODE_PATH=/path/to/global/node_modules```.  
Replace /path/to/global/node_modules with the actual path where your global packages are installed.  
Note that this approach is not recommended for Angular projects .  
In summary,  

### while ```global``` installations are useful for certain tools, it’s best to follow the standard practice of installing Angular dependencies ```locally``` within your project.  
 This ensures consistency, avoids conflicts, and simplifies project management. 🌟🚀

[Angular local setup]  
(https://angular.io/guide/setup-local)  
https://github.com/angular/angular-cli/releases

