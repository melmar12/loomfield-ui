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
        {/* Add other components here */}
      </div>
    </div>
  )
}

export default App
