// tailwind.config.js
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    tailwindcss({
      theme: {
        extend: {
          colors: {
            primary: '#e12628',      // Proder kırmızısı
            darkblue: '#011533',     // Eski tema rengi
            graylight: '#f7f7f7',    // Arka plan için açık gri
            graytext: '#6B7280',     // Açıklamalar için
            blackish: '#333333',     // Başlıklar ve koyu metin
            white: '#ffffff',
            accent: '#ff4d4d',       // Düğme hover rengi
          },
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
          },
        },
      },
      content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    }),
    autoprefixer(),
  ],
});
