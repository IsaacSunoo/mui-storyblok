import React, {
  createElement,
  useState,
} from 'react';
import PropTypes from 'prop-types';

import MuiButton from '../MuiButton/MuiButton';
import MuiDialog from '../MuiDialog/MuiDialog';

/**
 * MuiButtonDialog controls Dialog open state from true to false.
 * More docs and demos at https://material-ui.com/api/button/ and  https://material-ui.com/api/dialog/
 * Uses MuiButton and MuiDialog
 */

export const MuiButtonDialog = ({
  dialog,
  button,
}) => {
  const components = {
    MuiDialog,
    MuiButton,
  };

  const [state, setState] = useState({ open: false });
  const toggleDialog = () => setState({ ...state, open: !state.open });
  const muidialog = dialog[0];
  const muibutton = button[0];

  return (
    <>
      {
      muibutton
        ? createElement(
          components[muibutton.component],
          { ...muibutton, onClick: toggleDialog },
        )
        : null
    }
      {
      muidialog
        ? createElement(
          components[muidialog.component],
          { ...muidialog, open: state.open, toggleDialog },
        )
        : null
    }
    </>
  );
};

export default MuiButtonDialog;

MuiButtonDialog.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** MuiDialog Allowed maximum: 1 */
  dialog: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

};

MuiButtonDialog.defaultProps = {};
