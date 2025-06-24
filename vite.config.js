import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.js', // Fichier principal du package
      // name: 'ReactModalXM', // Nom du module à exposer
      name: 'React-modal-xm', // Nom du module à exposer
      fileName: (format) => `index.${format}.js`, // Noms des fichiers générés
      formats: ['es', 'cjs'] // Génère des fichiers en ES Modules et CommonJS
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Évite d'inclure React dans le bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});



// export default defineConfig({
//   plugins: [react()],
//   build: {
//     lib: {
//       entry: './src/index.js',
//       name: 'Modal',
//       fileName: 'index',
//       formats: ['es', 'cjs']
//     },
//     rollupOptions: {
//       external: ['react'],
//       output: {
//         globals: {
//           react: 'React'
//         }
//       }
//     }
//   }

// })
