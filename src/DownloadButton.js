function DownloadButton() {
  return (
    <button
      style={{
        fontFamily: 'Monospace',
        fontStretch: 'ultra-expanded',
        fontSize: '1rem',
        fontWeight: 'lighter',
        backgroundColor: '#c7bfc2',
        marginLeft: '10px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        border: '1px solid',
        borderRadius: '25px',
        padding: '10px',
      }}
      type="button"
    >
      Download
    </button>
  );
}

export default function App() {
  return <DownloadButton />;
}
