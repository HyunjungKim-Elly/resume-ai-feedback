interface FeedbackBoxProps {
    title: string;
    content: string;
  }
  
  export const FeedbackBox = ({ title, content }: FeedbackBoxProps) => {
    return (
      <div className="p-4 border rounded-xl shadow-sm bg-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 whitespace-pre-line">{content}</p>
      </div>
    );
  };