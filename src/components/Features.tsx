import React from 'react'

type Props = {}

const Features = (props: Props) => {
  return (
    <div className="bg-white">
  <div className="mx-auto grid max-w-full grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-5xl lg:px-8 'flex flex-1'">
    <div >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros productos</h2>
      <p className="mt-4 text-gray-500">Somos desarrolladores con basta experiencia. Creamos productos de gran valor para negocios que se saben adaptar al cambio.</p>

      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Originalidad</dt>
          <dd className="mt-2 text-sm text-gray-500">Calidad asegurada</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Inteligencia</dt>
          <dd className="mt-2 text-sm text-gray-500">Aumentos de ingresos y generación de calidad en la marca</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Rapidez</dt>
          <dd className="mt-2 text-sm text-gray-500">Contamos con plantillas predeterminadas según el negocio</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Personalización</dt>
          <dd className="mt-2 text-sm text-gray-500">Podrás personalizar el sitio como necesites</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Research de economía</dt>
          <dd className="mt-2 text-sm text-gray-500">Para todas las billeteras</dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Técnicas de mercado</dt>
          <dd className="mt-2 text-sm text-gray-500">Tecnología de última generación con pruebas de calidad</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
  )
}

export default Features