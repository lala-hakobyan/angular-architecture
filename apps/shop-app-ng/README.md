# Angular Shop POC Application
Angular Shop POC application for experimenting with **Angular SSR**, **incremental hydration** and **signals**. 
It also allows you to explore older features like a store based on **RxJS BehaviorSubject**, **template-driven forms** and **reactive forms**.


## Compatibility

The project is compatible with the following technology versions:
- **@angular/cli:** `^20.3.13`
- **@angular/core:** `^20.3.15`
- **Node.js:** `^20.19.0` || `^22.12.0` || `^24.0.0`   
  This project was tested with **Node.js** `v22.17.0`.


## Features and Best Practices

While this is not a full **production-ready** application, there are several features and best practices you can explore to adapt in your **Production-ready** applications:

- **Scalable folder structure:** 
  Logic is separated into UI, business logic, data (API) and state management layers (store) which is essential for **Long-term** maintainability.
- **Presentation / container pattern** Components are separated into **smart** and **dumb (UI)** components under respective folders which allows better isolation and maintainability.
- **Fully responsive and adapted to mobile breakpoints**   
- **BEM approach for class names**   
- **Server-side Rendering (SSR) by default**  
- **Incremental hydration with `@defer` blocks:**  
  - The `cart-details` block in the `cart-item` component is deferred on viewport during the incremental hydration process.
  - To test incremental hydration in a local development build, make sure to run it with the HMR disabled option: `start:no-hmr`. This is because when hot module replacement is enabled, all defer blocks and their dependencies are loaded eagerly.
- **Lightweight custom Signal store vs RxJS BehaviorSubject store:**  
  - By default, the **RxJS BehaviorSubject** store is enabled for the **Cart** page.
  - Use the `useSignalStore: true` option in `environment.ts` to enable the signal store for the **Cart** page.
- **Starter example of Template-driven forms and Reactive forms**  
  - By default, the reactive form template is enabled for the **Account** page.
  - Use the `useTemplateDrivenForms` option in `environment.ts` to enable template-driven forms.
- **Local mock Express.js server:**   
  This helps to emulate API requests and perform easy development locally.
   

## Getting Started

### Setup Project Locally

Follow these steps to set up the project locally:
- Go to the root of this project, specifically the `apps/shop-app-ng` folder and do `npm install`
- Open your hosts file and add the following line of code:
  `127.0.0.1       local.angular-shop-app.com`   
  Below are the hosts file paths for different operating systems: 
  - **Windows:** `C:\Windows\System32\drivers\etc\hosts`
  - **macOS / Linux:** `/etc/hosts`
  This maps your local IP to the custom local host name which will be used when running development server.
- Make sure you have compatible Node.js version installed. You can use **Node Version Manager (NVM)** to simulate different **Node.js** versions on your machine. Example of compatible Node.js version: `v22.17.0`   
For the full compatibility information, please check [Compatibility](#compatibility) section.

After finishing these steps, you can use the commands provided in the section below to run the project. 

### Run Project

- **Start a local development server:** `npm run start`   
  Once the server is running, open your browser and navigate to `http://local.angular-shop-app.com:4200/`. The application will automatically reload whenever you modify any of the source files.
- **Start a local development server without HMR:** `npm run start:no-hmr` 
- **Run production build:**
  `npm run build`
- Since SSR is enabled for this app, in order to test production build for different cases, use these instructions:
  - **Test Server Side Rendering (SSR)** or hybrid approach (SSR + SSG + CSR)   
    `npm run serve:prod:ssr`
  - **Test Static Site Generation (SSG):** Install `serve` globally: `npm install -g serve` and use `npm run serve:prod:ssg` command
  - **Test Client Side Rendering (CSR):** Install `serve` globally (if not installed yet) and use `npm run serve:prod:csr` command
  

## Debugging

Below are instructions on how to set up IDE debugger for this SSR enabled project which will work for all Angular SSR enabled projects, starting from Angular version 20.

### WebStorm
When creating an Angular project using the `Angular CLI`, it already generates default debugging commands for WebStorm (`Angular Application` and `Angular CLI Server`). While you can use these to debug your client-side and server-side code independently, you need additional setup to achieve a unified debugging flow for both client and server sides in an SSR-based Angular project. The full setup is available in the `.run` folder - it will help you to automatically enable debugging commands in WebStorm once you run this project.
  
### Cursor
For Cursor, the Angular CLI creates default configuration as well. However, the default configuration enables only client-side debugging. To leverage full SSR server + client-side debugging, a custom configuration is available in the `.vscode/launch.json` file. This configuration will help you to automatically enable debugging commands in Cursor once you run this project.

If you want to learn more about the details of these configurations, check **IDE Debugging** chapter in my [Front-end Debugging Tools Handbook](https://github.com/lala-hakobyan/front-end-debugging-handbook)


## Troubleshooting

### Error: port is already in use
`Error: listen EADDRINUSE: address already in use :::4200`

If this happens, you need to find and kill the processes using a specific port (e.g. `4200`). For that, execute these commands in **PowerShell** or **Command Prompt** in **Windows** and in **Terminal** for **macOS / Linux**:

- Find all processes using port `4200`:
  - **Windows:** `netstat -ano | findstr :4200`
  - **macOS / Linux:** `lsof -i :4200`
- It will return results like these:
  - **Windows:** `TCP    0.0.0.0:4200     0.0.0.0:0     LISTENING     12345`
  - **macOS / Linux:** `node    12345   youruser   0u  IPv4  0x854013108bce2194      0t0  TCP *:4200 (LISTEN)`
- The number `12345` in this example is the PID. You need to kill all found PIDs using this command:
  - **Windows:** `taskkill /PID 12345 /F`
  - **macOS / Linux:** `kill -9 12345`

### Remove Project Cache
If project performance is not good, it hangs on the browser, or slows down, you can remove the Angular project cache by following these steps:
1. Remove the Angular metadata folder (`.angular`), and do `npm run start` again, it will generate a new `.angular` folder for you.
2. If **Step 1** is not helpful, you can remove the `node_modules` folder entirely, and do `npm install` again.
