import LeagueSelectorChip from "./LeagueSelectorChip";

interface LeagueSelectorProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default ({ selected, setSelected }: LeagueSelectorProps) => {

  return (
    <>
      <div style={{ display: 'flex', margin: '3px' }}>
        <LeagueSelectorChip name='nba' selected={selected} onSelect={setSelected} />
        <LeagueSelectorChip name='nfl' selected={selected} onSelect={setSelected} />
        <LeagueSelectorChip name='mlb' selected={selected} onSelect={setSelected} />
      </div>
    </>
  );
}
