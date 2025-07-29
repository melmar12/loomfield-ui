import { useState } from 'react';
import './App.css';
import { TextInput } from './components/TextInput/TextInput';
import { NumberInput } from './components/NumberInput/NumberInput';
import { Checkbox } from './components/CheckBox/Checkbox';
import { Select } from './components/Select/Select';
import { RadioGroup } from './components/RadioGroup/RadioGroup';
import { TextArea } from './components/TextArea/TextArea';
import type { FormData } from './types/FormTypes';
import { validateForm, type Errors } from './utils/validation';
import { Button } from './components/Button/Button';


function App() {
  const [form, setForm] = useState<FormData>({
    name: '',
    age: 0,
    role: '',
    priority: 'low',
    description: '',
    agreeToTerms: false,
  });

  // generic change handler that adapts based on input type
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? e.target instanceof HTMLInputElement
            ? e.target.checked
            : false
          : type === 'number'
            ? Number(value)
            : value,
    }));
  };

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      setLoading(false);
      setSubmitted(true);
      console.log('Form submitted:', form);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h1 className="mb-6 text-2xl font-bold">Loomfield Form</h1>
            <TextInput
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              error={errors.name}
            />
            <NumberInput
              label="Age"
              name="age"
              value={form.age}
              onChange={handleChange}
              min={0}
              max={120}
              error={errors.age}
            />
            <Select
              label="Role"
              name="role"
              value={form.role}
              onChange={handleChange}
              options={[
                { value: '', label: 'Select a role' },
                { value: 'admin', label: 'Admin' },
                { value: 'user', label: 'User' },
                { value: 'guest', label: 'Guest' },
              ]}
              error={errors.role}
            />
            <RadioGroup
              label="Priority"
              name="priority"
              value={form.priority}
              onChange={handleChange}
              options={[
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' },
              ]}
              error={errors.priority}
            />
            <TextArea
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter a description"
              rows={4}
              error={errors.description}
            />
            <Checkbox
              label="Agree to Terms"
              name="agreeToTerms"
              checked={form.agreeToTerms}
              onChange={handleChange}
              disabled={false}
              error={errors.agreeToTerms}
            />
            <Button 
              onClick={handleSubmit}
              loading={loading}
              variant="primary"
            >
              Submit
            </Button>
          </form>
        ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold text-green-600 mb-4">
            Form Submitted Successfully!
          </h2>
          <pre className="bg-gray-100 p-4 rounded text-left text-sm mt-4">
            {JSON.stringify(form, null, 2)}
          </pre>
          <p className="mb-4">Thank you for filling out the Loomfield Form.</p>
          <Button onClick={() => setSubmitted(false)} variant="secondary">
            Fill Out Again
          </Button>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
