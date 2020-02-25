import React from 'react';

import Duration from '../../../helpers/Duration'

import {BarContainer} from './bar.styled'

export const Bar = ({played, duration, showRemaining, handleSeekChange, handleSetRemaining}) => {

    return(
        <BarContainer>
                <div className="barElement number">
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
                />
                </div>
                <div className="barElement number" onClick={handleSetRemaining}>
                    {
                    showRemaining? <Duration seconds={duration * (1 - played)}/>
                    : 
                    (<Duration seconds={duration}/>)
                    }
                </div>
        </BarContainer>
    )
}