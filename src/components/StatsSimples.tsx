const stats = [
  { id: 1, name: 'Aumento de ingresos', value: '+$100.000' },
  { id: 2, name: 'Flujo de personas', value: 'Hasta un 100%' },
  { id: 3, name: 'Nuevos usuarios regulares', value: '46,000' },
]

export default function StatsSimples() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
