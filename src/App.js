import { prettyDOM } from "@testing-library/react";
import { useState } from "react";
import TodoList from "./todo-list_useState";
import {CheckBoxUsestate, RadioBoxUsestate} from "./two-way-binding_useState"
import ContentUseEffect from './vd1_useEffect'
import CountDown from "./useEffect_timer";
import ContentPreviewAvatar from "./useEffect_previewAvatar";
import ContentFakeChatApp from "./useEffect_fake_chatApp";
import LayoutEffect from "./useLayoutEffrect";
import UseRef from "./useRef";
import UseMemo from "./useMemo";
import UseContext from "./useContext/useContext";
import UseImperativeHandle from "./UseImperativeHandle/useImperativeHandle";
import Button from "./clsx_classname";

import { useStore } from "./Context-Reducer";

function App() {

  const [show, setShow] = useState(false)

  const [state, dispatch] = useStore()
  console.log(state)

  return (
    <div>
      {/* <CheckBoxUsestate/> */}
      {/* <TodoList/> */}

      {/* vd mounted & unmounted */}
      <button style={{
        margin: '40px 40px',
        padding: '10px 10px'
      }} onClick={() => {
        setShow(!show)
      }}>Toggle</button>
      {show && 
         <div>
            <Button primary/>
            <Button/>
         </div>
      }
    </div>
  )
}

export default App;
