import './Testimonials.css';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Paol Chapman',
      role: 'Civic activist',
      quote:
        'Omg people this is awesome. Transcripts of council meetings. Searchable. With clips of audio.',
    },
    {
      name: 'David Kroman',
      role: 'Crosscut reporter',
      quote:
        'A really great resource that provides automated transcripts (!) of Seattle City Council meetings. You can even search by keyword.',
    },
    {
      name: 'City of Seattle Information Technology',
      role: '',
      quote: "It's a great application. Good work on it.",
    },
  ];

  return (
    <section
      className="mzp-l-content mzp-t-content-lg"
      style={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <h2 className="mzp-u-title-md" style={{ textAlign: 'center' }}>
        Praised by activists, reporters, government, and more
      </h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <div className="testimonial-quote">
            <p>{testimonial.quote}</p>
          </div>
          <div className="testimonial-author">
            {testimonial.name}
            {testimonial.role ? `, ${testimonial.role}` : ''}
          </div>
        </div>
      ))}
    </section>
  );
}
