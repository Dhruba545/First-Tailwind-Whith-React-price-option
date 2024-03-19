import PropTypes from 'prop-types'; 

const Link = ({route}) => {
    return (
        <li className="mr-9 px-6 hover:bg-yellow-500 rounded-lg" ><a href={route.path}>{route.name} </a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;