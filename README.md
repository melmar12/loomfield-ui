# Loomfield UI

A **React + TypeScript** project demonstrating reusable UI components, form validation, and modern frontend workflows.  
Built to showcase production-ready practices and technical depth in frontend engineering.

---

## ✨ Highlights

- **Reusable Components**  
  `TextInput`, `Select`, `CheckBox`, `RadioGroup`, `TextArea`, `Button`, `Spinner`, `FormField`  
  _(Planned: `NumberInput`, `Calendar` with full i18n support.)_

- **Form Validation**
  - Field-level checks on `onBlur` and `onChange`
  - Submit-time validation with clear error handling
  - Custom `useFormState` hook for centralized control

- **Modern Tooling**
  - **Vite** for fast builds & HMR
  - **TailwindCSS** for scalable styling
  - **ESLint + Prettier** for consistent code quality
  - **Husky** pre-commit hooks enforcing standards
  - **Jest / React Testing Library** for unit & integration tests

---

## 🛠 Tech Stack

React · TypeScript · Vite · TailwindCSS · ESLint · Prettier · Husky · Jest · React Testing Library

_(Planned additions: `i18next` + `react-i18next` for translations, native `Intl._` APIs for number/date formatting.)\*

---

## 🚀 Getting Started

Clone and install:

```bash
git clone https://github.com/<your-username>/loomfield-ui.git
cd loomfield-ui
npm install
npm run dev
```

Other commands:

```bash
npm run build   # production build
npm test        # run tests
```

---

## 📂 Purpose

This project is designed as a **portfolio piece** to illustrate:

- Strong **React + TypeScript** fundamentals
- Building **scalable, reusable UI components**
- Implementing **robust validation** and state management
- Following **professional engineering practices** (linting, testing, pre-commit hooks)

---

## 🌍 Internationalization (i18n) Roadmap

Goal: **Ship a locale-aware demo** where users can change **Country / Region / Locale** and see the UI adapt (copy, layout mirroring, number/date formats, currency, week start, etc.).

### 1) String Externalization

- Replace hardcoded UI strings with translation keys.
- Store resources under `src/locales/<locale>/common.json` (lazy-loaded).

```
src/
  locales/
    en-US/
      common.json
    es-ES/
      common.json
    fr-FR/
      common.json
```

**Example `common.json`:**

```json
{
  "form.title": "Demo Form",
  "field.firstName": "First name",
  "field.birthDate": "Birth date",
  "action.submit": "Submit"
}
```

### 2) Translation Library

- Add **i18next + react-i18next** for runtime language switching and lazy loading.

```bash
npm i i18next react-i18next i18next-http-backend
```

**Bootstrap (pseudo):**

```ts
// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-US',
    supportedLngs: ['en-US', 'es-ES', 'fr-FR'],
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
```

### 3) Locale-Aware Formatting

- Use native **`Intl`** APIs:
  - `Intl.NumberFormat` for numbers and currency (used by `NumberInput`).
  - `Intl.DateTimeFormat` for dates (used by `Calendar`).

```ts
const nf = new Intl.NumberFormat(locale, { style: 'decimal' });
const df = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' });
```

### 4) Locale Switcher (Demo Playground)

Expose a control to change **Country / Region / Locale**:

- Country → affects currency & default measurement systems.
- Region/Locale → affects number/date formats, week start, and strings.
- Use context like `LocaleProvider` to propagate locale + region settings.

```tsx
// <LocaleSwitcher /> — persists selection to localStorage
<select value={locale} onChange={e => setLocale(e.target.value)}>
  <option value="en-US">English (US)</option>
  <option value="es-ES">Español (España)</option>
  <option value="fr-FR">Français (France)</option>
</select>
```

### 5) i18n Components to Build

**`NumberInput` (fully internationalized):**

- Parses and formats using `Intl.NumberFormat` respecting thousands/grouping and decimal separator per locale.
- Optional `style="currency"` with region-aware currency (USD, EUR, etc.).
- Accepts `min`, `max`, `step`; guards invalid characters; mirrors formatted display.

**`Calendar` (fully internationalized):**

- Month/day names from `Intl.DateTimeFormat`.
- Week start (Mon/Sun) by locale.
- Accepts `firstDayOfWeek` override if needed.
- Keyboard accessible (roving tabindex) and screen-reader labels (`aria-label` with localized dates).

---

## 📋 Next Steps

1. **Wire up i18n baseline**
   - Add `i18next/react-i18next` and lazy load JSON resources.
   - Create `LocaleProvider` + `LocaleSwitcher`.
2. **Externalize strings**
   - Migrate visible copy into `common.json`. Use a pseudo-locale to catch missing keys.
3. **Build i18n-aware components**
   - Implement `NumberInput` using `Intl.NumberFormat` (parse + format + currency).
   - Implement `Calendar` using `Intl.DateTimeFormat` (week start, labels).
4. **Demo Playground**
   - Add a panel to switch **Country / Region / Locale** and persist choice.
   - Show live changes: placeholders, labels, number/date formats, currency.
5. **Quality**
   - Tests for parsing/formatting across locales.
   - Lint rule or CI check for missing translation keys.

---

## 🔎 Example Usage (after i18n is wired)

```tsx
import { useTranslation } from 'react-i18next';

export function DemoForm() {
  const { t } = useTranslation();
  return (
    <form aria-label={t('form.title')}>
      <FormField label={t('field.firstName')}>
        <TextInput name="firstName" />
      </FormField>
      <FormField label={t('field.birthDate')}>
        <Calendar name="birthDate" />
      </FormField>
      <Button type="submit">{t('action.submit')}</Button>
    </form>
  );
}
```

---

## 🧭 Folder Structure (relevant parts)

```
src/
  components/
    ...existing components
    NumberInput/            # planned
    Calendar/               # planned
  context/
    LocaleProvider.tsx      # planned
  hooks/
    useFormState.ts         # existing
  locales/
    en-US/common.json       # planned
    es-ES/common.json       # planned
    fr-FR/common.json       # planned
  i18n.ts                   # planned
```
