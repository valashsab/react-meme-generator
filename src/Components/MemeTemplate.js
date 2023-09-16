export default function MemeTemplate(props) {
  const memeTemplates = {
    doge: 'https://api.memegen.link/images/doge/such_meme/very_skill.png',
    buzz: 'https://api.memegen.link/images/buzz/memes/memes_everywhere.gif',
    both: 'https://api.memegen.link/images/both/width_or_height/why_not_both~q.png?height=450&width=800&token=6alj86spiq9iyevbknm3',
    drunk: 'https://api.memegen.link/images/drunk/Walk_in_a_straight_line~q/Officer,_I_can_barely_stand.png',
    ermg: 'https://api.memegen.link/images/ermg/ermahgerd/memes.png',
  }

  const [memeTemplate, setMemeTemplate] = useState('memeTemplates.doge')
      return (
        if(input === 'doge') {
          return ${props.memeTemplates.doge};
        }
      )
}

  {/* return (
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
    </form>
  );
}
*/}
