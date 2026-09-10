import { NextResponse } from 'next/server';

export async function GET() {
  // Direct response for download trigger (returns simulated executable payload notice if binary not available)
  const filename = 'Audify-Setup-0.2.0.exe';
  
  // Return response header pointing to download payload or static asset
  return new NextResponse(
    JSON.stringify({
      status: 'success',
      version: '0.2.0',
      filename: filename,
      downloadUrl: '/downloads/' + filename,
      message: 'Téléchargement de Audify pour Windows 64-bit initié.',
      size: '68.4 MB',
      sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
