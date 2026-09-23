import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const body = await request.json();
  const { error } = await supabase
    .from('pesan_kontak')
    .insert({ nama: body.nama, pesan: body.pesan });
  if (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 
400 });
  }
  return NextResponse.json({ success: true });
}