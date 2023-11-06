import TVimg1 from "../pics/TV2.jpg";
import TVimg2 from "../pics/12.jpg";
import TVimg3 from "../pics/TV2.jpg";
import TVimg4 from "../pics/TV2.jpg";
import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.classNam}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="Image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
