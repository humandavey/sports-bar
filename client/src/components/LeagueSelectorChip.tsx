interface LeagueSelectorChipProps {
  name: string,
  selected: string,
  onSelect: Function,
}

export default ({name, selected, onSelect}: LeagueSelectorChipProps) => {

  return (
    <>
      <div tabIndex={0} className='league-selector-button' style={{backgroundColor: selected === name ? 'white' : 'rgb(243, 244, 246, var(--tw-bg-opacity, 1))'}} onClick={() => onSelect(name)}>
        <img src={'./leagues/' + name.toLowerCase() + '.png'} className='league-selector-img' />
        <p style={{margin: 0}}>{name.toUpperCase()}</p>
      </div>
    </>
  );
}