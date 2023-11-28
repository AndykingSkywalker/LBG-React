import PropTypes from 'prop-types';
import kings from '../kings.json';

function KingsSolution(props) {
    const kingsArray = [];

  for (const king of kings) {
    kingsArray.push(
        <div>
        <p>Name: {king.nm}</p>
        <p>City: {king.cty}</p>
        <p>House: {king.hse}</p>
        <p>Years: {king.yrs}</p>
        </div>
    );
  }

    return ( 
        <div>
            {kingsArray}
        </div>
     );
}

KingsSolution.propTypes = {
    name: PropTypes.string,
    city: PropTypes.string,
    house: PropTypes.string,
    years: PropTypes.string
}

export default KingsSolution;