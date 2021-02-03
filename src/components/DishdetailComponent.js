import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, List } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments){
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

    render() {

        if(this.props.selected == null){
            return(
              <div>
              </div>)
        } else
        return (
            <div className="container">
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={this.props.selected.image} alt={this.props.selected.name} />
                    <CardBody>
                        <CardTitle>{this.props.selected.name}</CardTitle>
                        <CardText>{this.props.selected.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className ="list-unstyled" className="col-12 col-md-5">
                    <h3>Comments</h3>
                    {this.renderComments(this.props.selected.comments)}
                </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;