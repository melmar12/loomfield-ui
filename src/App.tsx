import './App.css';
import { useFormState } from './hooks/useFormState';
import { Form } from '@Form';
import { SuccessScreen } from '@SuccessScreen';

function App() {
  const {
    form,
    errors,
    submitted,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    getFieldError,
  } = useFormState();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        {!submitted ? (
          <Form
            form={form}
            errors={errors}
            onChange={handleChange}
            onBlur={handleBlur}
            onSubmit={handleSubmit}
            loading={loading}
            getFieldError={getFieldError}
          />
        ) : (
          <SuccessScreen form={form} onReset={reset} />
        )}
      </div>
    </div>
  );
}

export default App;
