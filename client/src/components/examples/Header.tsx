import Header from '../Header';

export default function HeaderExample() {
  const mockCategories = [
    { id: '1', name: 'Actualitate', slug: 'actualitate' },
    { id: '2', name: 'Politică', slug: 'politica' },
    { id: '3', name: 'Economic', slug: 'economic' },
    { id: '4', name: 'Sport', slug: 'sport' },
    { id: '5', name: 'Cultură', slug: 'cultura' },
  ];

  return (
    <Header 
      categories={mockCategories}
      onCategoryClick={(slug) => console.log('Category clicked:', slug)}
    />
  );
}
