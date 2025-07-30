import { Button } from '@Button';
import type { FormData } from '@/types/FormTypes';

type Props = {
  form: FormData;
  onReset: () => void;
};

export const SuccessScreen = ({ form, onReset }: Props) => (
  <div className="text-center">
    <h2 className="text-xl font-bold text-green-600 mb-4">
      Form Submitted Successfully!
    </h2>
    <pre className="bg-gray-100 p-4 rounded text-left text-sm mt-4">
      {JSON.stringify(form, null, 2)}
    </pre>
    <p className="mb-4">Thank you for filling out the Loomfield Form.</p>
    <Button onClick={onReset} variant="secondary">
      Fill Out Again
    </Button>
  </div>
);
