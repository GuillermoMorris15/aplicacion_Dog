import '../Styles/Card.css'
//import Peticion from '../Peticion'

function Card(props) {

        
        return(
            <div className='card'>
            <img   src={props.id}  alt="" />
            <div className='container'>
                <h4>cruzados</h4>
                <p>la mejor compañia para ti</p>
                <button onClick={()=>{window.location.reload()}}>Next</button>
            </div>
        </div>
    )
}
export default Card