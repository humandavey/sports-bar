import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useWidth = () => {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return width;
}

export default () => {

  const navigate = useNavigate();
  const width = useWidth();

  return (
    <>
      <div className='header-container'>
        <img tabIndex={0} className='header-img' src='./logo_black.svg' />
        {
          width > 528 ?
          <>
            <div className='header-nav'>
              <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/')}>Home</p>
              <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/scores')}>Scores</p>
              <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/schedule')}>Schedule</p>
              <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/discussion')}>Discussion</p>
              <p tabIndex={0} className='header-nav-item' onClick={() => navigate('/account')}>Account</p>
            </div>
          </>
          :
          <>
            <div className="header-nav">
              <select className='small-nav' name='navigation' onChange={(e) => navigate('/' + e.target.value)} defaultValue={'Navigation'}>
                <option value='Navigation' disabled hidden>Navigation</option>
                <option value=''>Home</option>
                <option value='scores'>Scores</option>
                <option value='schedule'>Schedule</option>
                <option value='discussion'>Discussion</option>
                <option value='account'>Account</option>
              </select>
            </div>
          </>
        }
      </div>
    </>
  );
}