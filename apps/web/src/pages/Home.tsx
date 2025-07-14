import { useEffect, useState } from 'react'
import { Textarea } from '@/components/Textarea'
import { Button } from '@/components/Button'
import { FeedbackBox } from '@/components/FeedbackBox'

export const Home = () => {
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState({
    title: '',
    content: '',
  })

  const handleAnalyze = () => {
    // TODO: 여기서 추후 API 연결해서 피드백 받기
        setFeedback({
      title: "AI 이력서 피드백",
      content: '임시 콘텐츠',
    })
  }

  useEffect(() => {
    console.log(input)
  }, [input])
  return (
    <main className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">AI 자기소개서 피드백</h1>

      <Textarea value={input} onChange={(e) => setInput(e)} />

      <Button onClick={handleAnalyze}>피드백 받기</Button>

      {feedback && <FeedbackBox title={feedback.title} content={feedback.content} />}
    </main>
  )
}