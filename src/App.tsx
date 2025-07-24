import { useState } from 'react'
import { TextInput } from './components/TextInput/TextInput';
import { NumberInput } from './components/NumberInput/NumberInput';
import { Checkbox } from './components/CheckBox/Checkbox';
import { Select } from './components/Select/Select';
import { RadioGroup } from './components/RadioGroup/RadioGroup';
import { TextArea } from './components/TextArea/TextArea';
import type { FormData } from './types/FormTypes';
import './App.css'


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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // change handler for select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // change handler for textarea
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
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
        />
        <NumberInput
          label="Age"
          name="age"
          value={form.age}
          onChange={handleChange}
          min={0}
          max={120}
          error={form.age < 0 ? "Age cannot be negative" : undefined}
        />
        <Select
          label="Role"
          name="role"
          value={form.role}
          onChange={handleSelectChange}
          options={[
            { value: '', label: 'Select a role' },
            { value: 'admin', label: 'Admin' },
            { value: 'user', label: 'User' },
            { value: 'guest', label: 'Guest' },
          ]}
          error={!form.role ? "Role is required" : undefined}
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
          error={!form.priority ? "Priority is required" : undefined}
        />
        <TextArea
          label="Description"
          name="description"
          value={form.description}
          onChange={handleTextAreaChange}
          placeholder="Enter a description"
          rows={4}
          error={form.description.length < 10 ? "Description must be at least 10 characters" : undefined}
        />
        <Checkbox
          label="Agree to Terms"
          name="agreeToTerms"
          checked={form.agreeToTerms}
          onChange={handleChange}
          disabled={false}
        />
      </div>
    </div>
  )
}

export default App
