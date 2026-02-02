export function TextField({ field, value, error, onChange }: any) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={field.id}>
        {field.label}
        {field.required && <span style={{ color: 'red' }}>*</span>}
      </label>
      <input 
        id={field.id}
        type="text" 
        value={value || ''} 
        onChange={onChange}
        style={{ display: 'block', marginTop: '5px', padding: '5px' }}
      />
      {error && <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>}
    </div>
  );
}