import React  from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';



    
    function RenderDish({dish}) {
        return (
            <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        )
    }
  
    function RenderComments({comments}) {
        const results = comments.map((com) => {
            return (
            <ul key={com.id}>
            {com.comment} <br></br> -- {com.author} &nbsp; 
            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}
            </ul>
            );
        })
        return results            
    }
  
    const  DishDetail = (props) => {

        if(props.selected == null){
            return(
              <div>
              </div>)
        } else
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish = {props.selected} />
                    <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    <RenderComments comments = {props.selected.comments} />
                    </div>
                </div>
            </div>
        );
   
    }
    
export default DishDetail;