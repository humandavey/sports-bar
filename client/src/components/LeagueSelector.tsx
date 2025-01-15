import { useState } from "react"
import LeagueSelectorChip from "./LeagueSelectorChip"

export default () => {

  const [selected, setSelected] = useState('nba');

  return (
    <>
      <div style={{display: 'flex', margin: '3px'}}>
        <LeagueSelectorChip name='nba' selected={selected} onSelect={setSelected} />
        <LeagueSelectorChip name='nfl' selected={selected} onSelect={setSelected} />
        <LeagueSelectorChip name='mlb' selected={selected} onSelect={setSelected} />
      </div>
    </>
  )
}