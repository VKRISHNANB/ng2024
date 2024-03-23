# Standalone component

https://angular.io/guide/standalone-components  

Standalone components provide a simplified way to build Angular applications. Standalone components, directives, and pipes aim to streamline the authoring experience by reducing the need for NgModules.  

Angular classes marked as standalone do not need to be declared in an **NgModule** (the Angular compiler will report an error if you try).

Standalone components specify their dependencies **directly** instead of getting them through **NgModules**  

### Using existing NgModules in a standalone component
When writing a standalone component, you may want to use other components, directives, or pipes in the component's template.   
Some of those dependencies might not be marked as standalone, but instead declared and exported by an existing NgModule.  (app.modules.ts file must be created for the non stand alone components)
 In this case, you can import the NgModule directly into the standalone component:

---  

