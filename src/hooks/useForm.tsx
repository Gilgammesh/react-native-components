import {useState} from 'react';

export const useForm = <T extends Object>(initForm: T) => {
  const [form, setForm] = useState(initForm);

  const resetForm = () => setForm(initForm);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return {
    form,
    onChange,
    resetForm,
  };
};
