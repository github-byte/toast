import { useEffect, useState } from 'react';
import './App.css';
import { Toast } from './stories/toast';
import { Button } from './stories/Button';
import { GREY_COLOR, SUCCESS_COLOR } from './constants';
import { useMediaQuery } from '@mui/material';

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const openToast = () => {
    setShowToast(true)
  }

  const closeToast = () => {
    setShowToast(false)
  }

  // useEffect(() => {
  //   if (!showToast) return
  //   setTimeout(() => {
  //     setShowToast(false)
  //   }, 5000)
  // }, [showToast])

  // const deskTopView = useMediaQuery((theme) => theme?.breakpoints.up('sm'))
  const deskTopView = useMediaQuery('(min-width:600px)');
  console.log("inside deks", deskTopView)
  return (
    <div className="App">
      {!deskTopView && <div style={{ width: deskTopView ? '60%' : '100%', display: 'flex', justifyContent: "center", height: '40vh' }}>
        <div style={{ backgroundColor: GREY_COLOR, height: '100%', width: '100%', display: "flex" }} />
      </div>}
      <div style={{ width: deskTopView ? '40%' : '100%', display: 'flex', flexDirection: 'column', justifyContent: !deskTopView ? 'space-between' : {}, height: '40vh' }}>
        <div>
          <div style={{ marginTop: '24px' }}>
            <h1>Title Here</h1>
          </div>
          <div>
            <p style={{ color: 'grey' }}>Lorem ipsum dolor sit amet consectetur. Adipiscing dolor id amet sit sit posuere malesuada suspendisse.</p>
          </div>
        </div>
        <Button width={deskTopView ? '81px' : ''} primary onClick={openToast} backgroundColor={SUCCESS_COLOR} label="Button" color="white" />
      </div>
      {deskTopView && <div style={{ width: '60%', display: 'flex', justifyContent: "center" }}>
        <div style={{ backgroundColor: GREY_COLOR, height: '100%', width: '40%', display: "flex" }} />
      </div>}
      {showToast && <Toast onClick={closeToast} editText='Message here' />}
    </div>
  );
}

export default App;
