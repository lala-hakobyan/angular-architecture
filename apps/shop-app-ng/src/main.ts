import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { enableProfiling } from '@angular/core';

// Turn on profiling *before* bootstrapping your application
// in order to capture all the code run on start-up.
enableProfiling();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
