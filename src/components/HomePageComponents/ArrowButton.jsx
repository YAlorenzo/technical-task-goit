import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PropTypes from "prop-types";

function ArrowButton({ styles }) {
  return (
      <div className={`w-[54px] h-[54px] ${styles} rounded-full flex justify-center
        items-center border border-gray hover:bg-gray transition-colors`}>
        <ArrowRightAltIcon />
    </div>
  )
}

ArrowButton.propTypes = {
    styles: PropTypes.string,
}

export default ArrowButton