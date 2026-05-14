const { useState } = React;

const photos = [
  { id: 1, title: 'Portrait', category: 'portrait' },
  { id: 2, title: 'Paysage', category: 'paysage' },
  { id: 3, title: 'Architecture', category: 'archi' },
  { id: 4, title: 'Portrait 2', category: 'portrait' },
];

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 p-8">
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-slate-100 mb-6">Portfolio</h1>
        <div className="flex gap-4">
          {['all', 'portrait', 'paysage', 'archi'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border border-emerald-500 transition-all duration-300 ${filter === cat ? 'bg-emerald-500 text-slate-950' : 'text-emerald-500 hover:bg-emerald-500 hover:text-slate-950'}`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhotos.map(photo => (
          <div key={photo.id} className="p-6 border border-slate-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-100">{photo.title}</h3>
            <p className="text-sm text-slate-500">{photo.category}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);
