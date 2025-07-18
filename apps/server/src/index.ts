import { OpenAI } from '@langchain/openai'
import * as dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const model = new OpenAI({
  temperature: 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY,
})
async function main() {
  const res = await model.call('Tell me a funny joke about JavaScript.')
  console.log(res)
}

main()