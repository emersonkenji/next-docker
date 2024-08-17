import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-gray-500">
      <Head>
        <title>Ricol Marketing - Impulsionando seu negócio</title>
        <meta name="description" content="Ricol Marketing - Soluções inovadoras para impulsionar seu negócio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Image src="/logo.png" alt="Ricol Logo" width={150} height={50} />
          <nav className="space-x-4">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Serviços</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Depoimentos</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contato</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="home" className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">
              Bem-vindo à <span className="text-blue-600">Ricol Marketing</span>
            </h1>
            <p className="text-xl mb-8">
              Impulsionando seu negócio com estratégias inovadoras de marketing
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Saiba Mais
            </button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Marketing Digital</h3>
                <p>Estratégias online para aumentar sua visibilidade</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Branding</h3>
                <p>Construa uma marca forte e memorável</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">SEO</h3>
                <p>Otimização para mecanismos de busca</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Mídias Sociais</h3>
                <p>Engaje seu público nas redes sociais</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">"A Ricol transformou completamente nossa presença online. Recomendo!"</p>
                <span className="font-semibold">- Maria Silva, CEO da TechSolutions</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">"Equipe profissional e resultados impressionantes. Estamos muito satisfeitos!"</p>
                <span className="font-semibold">- João Santos, Diretor de Marketing da InnovaCorp</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Entre em contato</h2>
          <p className="mb-2">Email: contato@ricolmarketing.com</p>
          <p className="mb-2">Telefone: (11) 1234-5678</p>
          <p>Endereço: Av. Paulista, 1000 - São Paulo, SP</p>
        </div>
      </footer>
    </div>
  )
}