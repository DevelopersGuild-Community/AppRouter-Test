import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        browser: {
            provider: 'playwright', // or 'webdriverio'
            enabled: true,
            name: 'chromium', // browser name is required
        },

    },
    optimizeDeps: {
        exclude: ['chromium-bidi', "fsevents"]
    },
})