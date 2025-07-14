interface TextareaProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  }
  
  export const Textarea = ({ value, onChange, placeholder }: TextareaProps) => {
    return (
      <textarea
        className="w-full h-60 p-4 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-black"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || '내용을 입력해주세요'}
      />
    );
  };