import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
  alias: {
    '@/utils/validation': path.resolve(__dirname, 'src/utils/validation.ts'),
    '@/types/FormTypes': path.resolve(__dirname, 'src/types/FormTypes.ts'),
    '@Button': path.resolve(__dirname, 'src/components/Button/Button.tsx'),
    '@CheckBox': path.resolve(__dirname, 'src/components/CheckBox/CheckBox.tsx'),
    '@Form': path.resolve(__dirname, 'src/components/Form/Form.tsx'),
    '@NumberInput': path.resolve(__dirname, 'src/components/NumberInput/NumberInput.tsx'),
    '@RadioGroup': path.resolve(__dirname, 'src/components/RadioGroup/RadioGroup.tsx'),
    '@Select': path.resolve(__dirname, 'src/components/Select/Select.tsx'),
    '@Spinner': path.resolve(__dirname, 'src/components/Spinner/Spinner.tsx'),
    '@SuccessScreen': path.resolve(__dirname, 'src/components/SuccessScreen/SuccessScreen.tsx'),
    '@TextArea': path.resolve(__dirname, 'src/components/TextArea/TextArea.tsx'),
    '@TextInput': path.resolve(__dirname, 'src/components/TextInput/TextInput.tsx'),
  },
}

});
