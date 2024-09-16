import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/hexagono.svg'

export default function Signup() {
    return (
        <section className="flex justify-evenly items-center m-auto h-screen w-[1240px]">
            <div className="flex items-center gap-[19px]">
                <Image src={Logo} alt="Hexágono Azul" />
                <p className="text-3xl">food explorer</p>
            </div>

            <form action="#" className="bg-dark-700 p-16 rounded-2xl w-[400px]">
                <legend className="light-100 text-center text-2xl">Faça Login</legend>

                <div className="mt-4 mb-4">
                    <label htmlFor="email" className="block mb-1 light-400 text-sm">Email</label>
                    <input type="text" name="email" id="email" placeholder="Exemplo: exemplo@gmail.com"className="bg-dark-900 light-500 p-4 text-sm rounded-lg w-full" />
                </div>
                <div className="mt-4 mb-4">
                    <label htmlFor="password" className="block mb-1 light-400 text-sm">Senha</label>
                    <input type="text" name="password" id="password" placeholder="Mínimo 6 caracteres" className="bg-dark-900 light-500 p-4 text-sm rounded-lg w-full"/>
                </div>

                <button className="bg-tomato-500 w-full rounded-md light-400 p-3 text-sm">Entrar</button>

                <div className="text-center mt-8">
                    <Link href="/signup">
                        Criar uma conta
                    </Link>
                </div>
            </form>
        </section>
    )
}