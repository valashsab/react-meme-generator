export default function BottomText(props) {
  return (
    <form
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
      <label htmlFor="bottomtext">
        Bottom text:
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
        id="bottomtext"
        name="bottomtext"
        value={props.bottomText}
        onChange={(event) => props.setBottomText(event.currentTarget.value)}
      />
    </form>
  );
}
