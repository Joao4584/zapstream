// __tests__/register.test.ts

import { describe, it, expect } from 'vitest';
import { NextRequest } from 'next/server';
import { POST } from '@/pages/api/auth/register';

describe('POST /api/auth/register', () => {
  it('should return 200 and success message for valid input', async () => {
    const mockRequest = new NextRequest('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Joao Teste Cadastro',
        user: 'joaoteste',
        email: 'teste@teste.com',
        password: '12345678',
      }),
    });

    const response = await POST(mockRequest);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.message).toBe('User registered successfully');
  });

  it('should return 400 for invalid input', async () => {
    const mockRequest = new NextRequest('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: '',
        user: 'joaoteste',
        email: 'teste@teste.com',
        password: '12345678',
      }),
    });

    const response = await POST(mockRequest);
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.message).toBe('failed validations');
  });
});
