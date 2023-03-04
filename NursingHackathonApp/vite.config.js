import {defineConfig} from 'vite';
import { fileURLToPath } from 'url';

export default defineConfig({
    base:'/NursingHackathonApp2/',

    build: {
    rollupOptions: {
        outDir: 'dist',
        input: {
          index: fileURLToPath(new URL('index.html', import.meta.url)),
          menu: fileURLToPath(new URL('menu.html', import.meta.url)),
          Postop: fileURLToPath(new URL('Post-op.html', import.meta.url)),
        },
      },
}
})