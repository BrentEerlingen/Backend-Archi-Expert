import {BackendArchiExpertApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {BackendArchiExpertApplication};

export async function main(options?: ApplicationConfig) {
  const app = new BackendArchiExpertApplication(options);
  await app.boot();
  await app.start();
  return app;
}
