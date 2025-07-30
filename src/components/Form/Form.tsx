import React from 'react';
import { TextInput } from '@TextInput';
import { NumberInput } from '@NumberInput';
import { CheckBox } from '@CheckBox';
import { Select } from '@Select';
import { RadioGroup } from '@RadioGroup';
import { TextArea } from '@TextArea';
import { Button } from '@Button';
import type { Errors } from '@/utils/validation';
import type { FormData } from '@/types/FormTypes';

type Props = {
  form: FormData;
  errors: Errors;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: React.ChangeEvent<any>) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
};


export const Form = ({ form, errors, onChange, onSubmit, loading }: Props) => (
    <form onSubmit={onSubmit} data-testid="form">
    <h1 className="mb-6 text-2xl font-bold">Loomfield Form</h1>
    <TextInput
        label="Name"
        name="name"
        value={form.name}
        onChange={onChange}
        placeholder="Enter your name"
        error={errors.name}
    />
    <NumberInput
        label="Age"
        name="age"
        value={form.age}
        onChange={onChange}
        min={0}
        max={120}
        error={errors.age}
    />
    <Select
        label="Role"
        name="role"
        value={form.role}
        onChange={onChange}
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
        onChange={onChange}
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
        onChange={onChange}
        placeholder="Enter a description"
        rows={4}
        error={errors.description}
    />
    <CheckBox
        label="Agree to Terms"
        name="agreeToTerms"
        checked={form.agreeToTerms}
        onChange={onChange}
        disabled={false}
        error={errors.agreeToTerms}
    />
    <Button 
        onClick={onSubmit}
        loading={loading}
        variant="primary"
    >
        Submit
    </Button>
    </form>
);