import React from 'react';

import Duration from '../../../helpers/Duration'

import {BarContainer} from './bar.styled'

export const Bar = ({played, duration, showRemaining, handleSeekChange, handleSetRemaining, handleSeekMouseUp, handleSeekMouseDown}) => {

     return(
        <BarContainer>
                <div className="barElement number left">
                    {<Duration seconds={duration * played} />}
                </div>
                <div className="barElement bar">
                <input
                    type='range' 
                    min={0} 
                    max={1} 
                    step='any'
                    value={played}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                    onMouseDown={handleSeekMouseDown}
                />
                </div>
                <div className="barElement number right" onClick={handleSetRemaining}>
                    {
                    showRemaining? <Duration seconds={duration * (1 - played)}/>
                    : 
                    (<Duration seconds={duration}/>)
                    }
                </div>
        </BarContainer>
    )
}