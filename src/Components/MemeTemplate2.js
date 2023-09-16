export default function MemeTemplate2(props) {
  return (
    <link
      style={{
        fontFamily: 'Monospace',
        fontStretch: 'ultra-expanded',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#b4aaae',
        marginLeft: '10px',
        marginBottom: '10px',
        textTransform: 'uppercase',
      }}
    >
      <label htmlFor="memetemplate">
        Meme Template:
        <br />
      </label>
      <input
        style={{
          border: '1px solid',
          borderRadius: '25px',
          padding: '10px',
          fontFamily: 'Monospace',
          fontStretch: 'ultra-expanded',
          fontSize: '1rem',
        }}
        id="memetemplate"
        name="memetemplate"
        value={props.memeTemplate}
        onChange={(event) => props.setMemeTemplate(event.currentTarget.value)}
      />
    </>
  );
}
