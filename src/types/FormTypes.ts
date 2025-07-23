export interface FormData {
  name: string;
  age: number;
  role: string;
  priority: 'low' | 'medium' | 'high';
  description: string;
  agreeToTerms: boolean;
}