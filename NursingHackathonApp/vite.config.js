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
          PostOp: fileURLToPath(new URL('Post-Op.html', import.meta.url)),
          myAccount: fileURLToPath(new URL('myAccount.html', import.meta.url)),
          surgicalProcedure: fileURLToPath(new URL('surgicalProcedure.html', import.meta.url)),
          beforeAndAfterHipArthroplasty: fileURLToPath(new URL('BeforeAfter.html', import.meta.url)),
          dailyGoals: fileURLToPath(new URL('dailyGoals.html', import.meta.url)),
          
        },
      },
    }
})
