'use client'

import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/hexagono.svg'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6)
})

type FormSchemaType = z.infer<typeof formSchema>

export default function Signup() {
    const { register, handleSubmit, reset } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema)
    })


    function submit(data: FormSchemaType) {
        console.log(data)

        reset()
    }

    return (
        <section className="flex justify-evenly items-center m-auto h-screen w-[1240px]">
            <div className="flex items-center gap-[19px]">
                <Image src={Logo} alt="Hexágono Azul" />
                <p className="text-3xl">food explorer</p>
            </div>

            <form action="#" className="bg-dark-700 p-16 rounded-2xl w-[400px]" onSubmit={handleSubmit(submit)}>
                <legend className="light-100 text-center text-2xl">Crie sua conta</legend>

                <div className="mt-4 mb-4">
                    <label htmlFor="name" className="block mb-1 light-400 text-sm" >Seu nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Exemplo: Maria da Silva" 
                        className="bg-dark-900 light-500 p-4 text-sm rounded-lg w-full"
                        {...register("name")}
                     />
                </div>
                <div className="mt-4 mb-4">
                    <label htmlFor="email" className="block mb-1 light-400 text-sm">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Exemplo: exemplo@gmail.com"
                        className="bg-dark-900 light-500 p-4 text-sm rounded-lg w-full" 
                        {...register("email")}
                     />
                </div>
                <div className="mt-4 mb-4">
                    <label htmlFor="password" className="block mb-1 light-400 text-sm">Senha</label>
                    <input 
                        type="text" 
                        id="password" 
                        placeholder="Mínimo 6 caracteres"
                        className="bg-dark-900 light-500 p-4 text-sm rounded-lg w-full"
                        {...register("password")}
                     />
                </div>

                <button className="bg-tomato-500 w-full rounded-md light-400 p-3 text-sm">Criar conta</button>

                <div className="text-center mt-8">
                    <Link href="/signin">
                        Já tenho uma conta
                    </Link>
                </div>
            </form>
        </section>
    )
}