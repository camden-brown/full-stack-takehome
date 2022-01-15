import React from 'react';
import Button from './Button'
const Header  = (props: {
  onShowTable: () => void;
  onHideTable: () => void;
})=>{
    return <header className="App-header">
    <Button
      onToggle={props.onShowTable}
      text="Show Panel"
    />
    <Button
      onToggle={props.onHideTable}
      text="Hide Panel"
    />
  </header>

  
}

export default Header 