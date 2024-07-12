// app/api/login/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const response = await fetch(`http://127.0.0.1:8000/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: '',
        username: email,
        password: password,
        scope: '',
        client_id: '',
        client_secret: '',
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'Login failed' }, { status: 401 });
    }

    const data = await response.json();
    const { access_token, IsAdmin } = data;

    // Set the access token in cookies
    cookies().set('access_token_login', access_token, { httpOnly: false, path: '/' });
    cookies().set('IsAdmin', IsAdmin, { httpOnly: false, path: '/' });

    return NextResponse.json({ success: true, IsAdmin });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}