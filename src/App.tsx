import { useState } from 'react';
import { TextInput } from './components/TextInput/TextInput';
import { NumberInput } from './components/NumberInput/NumberInput';
import { Checkbox } from './components/CheckBox/Checkbox';
import { Select } from './components/Select/Select';
import { RadioGroup } from './components/RadioGroup/RadioGroup';
import { TextArea } from './components/TextArea/TextArea';
import type { FormData } from './types/FormTypes';
import { validateForm, type Errors } from './utils/validation';
import './App.css';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', form);
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Loomfield Form</h1>
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
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
