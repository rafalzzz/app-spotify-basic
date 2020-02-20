import React from 'react';

import {TableHeaderContainer} from './tableHeader.styled'

export const TableHeader = () => (
        <TableHeaderContainer>
            <div className="col1"><i className="icon-heart-empty"/></div>
            <div className="col2">TITLE</div>
            <div className="col3">ARTIST</div>
            <div className="col4"><i className="icon-calendar-outlilne"/></div>
            <div style={{clear: "both"}}></div>
        </TableHeaderContainer>
    )