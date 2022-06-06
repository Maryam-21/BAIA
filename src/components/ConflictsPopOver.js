import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function ConflictsPopOver({open, handlePopoverClose, anchorEl, conMeetTitle}) {
    return (
        <div>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>This service is conflicting with another service <br/> 
                with the same name in another meeting "{conMeetTitle}".</Typography>
            </Popover>
        </div>
    )
}

export default ConflictsPopOver