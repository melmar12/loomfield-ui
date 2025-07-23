import { useState } from 'react'
import { TextInput } from './components/TextInput';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <h1>Personal Project Form</h1>
      <TextInput
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      {/* Add other components here */}
    </>
  )
}

export default App
