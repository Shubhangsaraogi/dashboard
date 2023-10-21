import PropTypes from "prop-types";
import React from "react";
import  '../static/style/maskgroup.css'


const MaskGroup = ({ className, maskGroup }) => {
    return <img className={`mask-group ${className}`} alt="Mask group" src={maskGroup} />;
}

MaskGroup.propTypes = {
  maskGroup: PropTypes.string,
};
export default MaskGroup
