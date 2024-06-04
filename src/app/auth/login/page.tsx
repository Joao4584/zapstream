'use client';

import Logo from '@/public/images/logo.png'
import { CardBanner, CardText, ContainerSection, LogoImg } from "../index.styles";
import { DivEffect } from "@/src/lib/motion/Effects";
import React, { useState } from "react";
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { sendLogin } from '../login.request';
import { toast } from "sonner"
import dayjs from 'dayjs';
import { setToken } from '@/src/lib/token';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loadings, setLoadings] = useState<boolean>(false);

  const login = async () => {
    setLoadings(true);
    if (user.length < 1) {
      toast.warning(`Preencha um usuario valido.`);
      setLoadings(false);
      return;
    }

    if (password.length <= 7) {
      toast.warning(`Senha não pode ser menor que 8 caracteres.`);
      setLoadings(false);
      return;
    }

    setLoadings(true);
    toast.message('Buscando..', {
      description: dayjs().locale('pt-br').format('DD/MM/YYYY HH:mm:ss'),
      action: {
        label: "Fechar",
        onClick: () => { },
      },

    })

    setTimeout(async () => {
      const result: any = await sendLogin({ user: user, password: password });;
      if (result.success === false) {
        console.error('Erro de login:', result.message);
        toast.error(`Erro: ${result.message}`);

        setLoadings(false);
      } else {

        setLoadings(false);
        console.log(result);
        toast.success('Login realizado com sucesso!');
        setToken(result.data.hash);
        router.push('/dashboard');
      }
    }, 2000);

  }

  return (
    <React.Fragment>
      <ContainerSection >
        <CardBanner >
          <DivEffect>
            <Image src={Logo} alt="Icon Home" className='absolute top-5 left-6 opacity-100 z-50 saturate-50' style={{ width: "48px", height: "46px" }} />
          </DivEffect>
          <img src="https://source.unsplash.com/random/?code,galaxy" alt="" className="w-full h-full opacity-50 object-cover" />
        </CardBanner>
        <CardText>
          <div className="w-full h-full pt-4 lg:pt-22">
            <DivEffect>
              <React.Fragment>
                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-1 text-slate-500">Faça login na sua conta</h1>
                <div className="mt-6">
                  <div>
                    <label className="block text-gray-500">Email ou Usuario:</label>
                    <input type="text" name="User" id="user" value={user} onChange={(e: any) => setUser(e.target.value)} placeholder="Coloque seu email ou usuario" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                  </div>

                  <div className="mt-4">
                    <label className="block text-gray-500">Senha:</label>
                    <input type="password" name="" value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="Coloque sua senha" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500b
                                    focus:bg-white focus:outline-none" required />
                  </div>

                  <div className="text-right mt-2">
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Esqueceu sua senha?</a>
                  </div>
                  <Button
                    className="w-full h-12 block !bg-indigo-500 hover:!bg-indigo-400 focus:!bg-indigo-400 text-white font-semibold rounded-lg
                                        px-4 py-3 mt-6 hover:!text-white"
                    disabled={loadings}
                    onClick={login}
                  >
                    Entrar
                  </Button>
                </div>

                {/* <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                  <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
                    <span className="ml-4">
                      Acessar com
                      Google</span>
                  </div>
                </button> */}
              </React.Fragment>
            </DivEffect>
          </div>
        </CardText>

      </ContainerSection>
    </React.Fragment>
  );
}
