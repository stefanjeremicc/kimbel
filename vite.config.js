import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { join } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': join(__dirname, 'resources'),
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                base: null,
                includeAbsolute: false
            }
        })
    ],
});