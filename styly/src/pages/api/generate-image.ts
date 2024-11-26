import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 添加日志来检查 API 密钥是否被正确设置（不要打印实际的密钥）
console.log('OpenAI API Key status:', process.env.OPENAI_API_KEY ? 'Set' : 'Not set');

export async function POST(req: Request) {
  try {
    console.log('Received request to generate image');
    const formData = await req.formData();
    const gender = formData.get('gender') as string;
    const birthday = formData.get('birthday') as string;
    const occasion = formData.get('occasion') as string;
    const style = formData.get('style') as string;
    
    console.log('Request data:', { gender, birthday, occasion, style });

    // 计算年龄
    const age = calculateAge(birthday);

    // 生成提示词
    const prompt = generatePrompt(gender, age, occasion, style);
    console.log('Generated prompt:', prompt);

    // 调用 OpenAI API 生成图像
    console.log('Calling OpenAI API to generate image');
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    console.log('OpenAI API response received');

    return NextResponse.json({ imageUrl: response.data[0].url });
  } catch (error) {
    console.error('Error in generate-image API:', error);
    return NextResponse.json