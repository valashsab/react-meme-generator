function Header() {
  return (
    <header>
      <h1
        style={{
          fontFamily: 'Monospace',
          fontStretch: 'ultra-expanded',
          fontSize: '2rem',
          color: '#444444',
          marginLeft: '10px',
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}
      >
        Meme Generator
      </h1>
    </header>
  );
}

export default function App() {
  return (
    <>
      <Header />
    </>
  );
}
