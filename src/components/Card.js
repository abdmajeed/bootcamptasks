
import Muted from "./Muted";

const Card = (props) => {
  return (
    
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{props.type}</h5>
<h6 className="card-price text-center">${props.amt}<span className="period">/month</span></h6>
          <hr />
          <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.user} </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.storage} Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <Muted className={props.className}/>
            </ul> 
  

  <div className="d-grid">
    <a href="#" className="btn btn-primary text-uppercase">Button</a>
  </div>
        </div>
      </div>
    
  );
}


export default Card;


 






