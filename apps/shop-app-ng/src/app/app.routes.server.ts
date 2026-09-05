import { RenderMode, ServerRoute } from '@angular/ssr';
import {environment} from '../environments/environment';

type RenderModeType = 'client' | 'server' | 'prerender';

export const RenderModeMapping: {[id: string]: RenderMode} = {
  client: RenderMode.Client,
  server: RenderMode.Server,
  prerender: RenderMode.Prerender
}

const currentRenderMode: RenderMode = RenderModeMapping[environment.renderMode as RenderModeType];

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: currentRenderMode
  } as ServerRoute
];
