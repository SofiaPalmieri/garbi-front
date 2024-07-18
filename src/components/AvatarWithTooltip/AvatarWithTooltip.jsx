import {
  Avatar, Tooltip
} from '@mui/material';

export const AvatarWithTooltip = ({
  name, profilePicture
}) => {
  return (
    <Tooltip  
      title={name || 'No asignado'}
      arrow
      placement='top'
    >
      <Avatar
        alt={name || 'No asignado'}
        src={profilePicture || undefined}
      >
        {!profilePicture && name ? name.split(' ').slice(0, 2)
          .map(word => word[0])
          .join('') : null}
      </Avatar>
    </Tooltip>
  );
};
