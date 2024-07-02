import PropTypes from "prop-types";

function DrumPad({ id, triggerKey, onClick, src }) {
  return (
    <button
      id={id}
      className="drum-pad rounded-xl border-2 border-black bg-dark-orange p-4 transition duration-200 hover:bg-dark-orange/60 focus:outline-none focus:ring-2 focus:ring-[#94E4EA] focus:ring-opacity-50"
      onClick={onClick}
    >
      {triggerKey}
      <audio id={triggerKey} className="clip" src={src} />
    </button>
  );
}

DrumPad.propTypes = {
  id: PropTypes.string.isRequired,
  triggerKey: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default DrumPad;
