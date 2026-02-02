import { useEffect, useState } from 'react';

export function Selectfield({ field, value, error, onChange }: any) {
  const [options, setOptions] = useState<any[]>([]);

  useEffect(() => {
    if (typeof field.options === 'function') {
      field.options().then(setOptions);
    } else {
      setOptions(field.options || []);
    }
  }, [field.options]);

  return (
    <label>
      {field.label}
      <select value={value || ''} onChange={onChange}>
        <option value="">Select an option</option>
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </label>
  );
}