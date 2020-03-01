import React from 'react';

import {TableHeaderContainer} from './tableHeader.styled'

export const TableHeader = () => (
        <TableHeaderContainer>
            <div className="col1">TITLE</div>
            <div className="col2">ARTIST</div>
            <div className="col3">ALBUM</div>
            <div className="col4"><i className="icon-calendar-outlilne"/></div>
            <div className="col5"><i className="icon-clock"/></div>
            <div style={{clear: "both"}}></div>
        </TableHeaderContainer>
    )