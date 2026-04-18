import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const number = formData.get('number') as string;

  if (!file || !number) {
    return NextResponse.json({ error: 'Missing file or number' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const dir = path.join(process.cwd(), 'public', 'images');
  await mkdir(dir, { recursive: true });

  const filePath = path.join(dir, `photo-${number}.jpg`);
  await writeFile(filePath, buffer);

  return NextResponse.json({ success: true, path: `/images/photo-${number}.jpg` });
}
