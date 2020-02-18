import React from 'react';

import {TableContainer} from './table.styled'
import {ListItem} from './listItem'

export const Table = ({songs, loading, error}) => (
    <TableContainer>
        <div className="table">
            <div className="tableHeader">
                <div className="col1"><i className="icon-heart-empty"/></div>
                <div className="col2">TITLE</div>
                <div className="col3">ARTIST</div>
                <div className="col4"><i className="icon-calendar-outlilne"/></div>
                <div style={{clear: "both"}}></div>
            </div>
            {songs && songs.map((song, i) => (
                <div key={i}>
                    <ListItem
                        song={song}
                    />
                </div>
            ))}
        </div>
    </TableContainer>
)