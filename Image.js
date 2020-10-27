import React from "react";
import ImageUploader from "react-images-upload";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (
      <div>
        <ImageUploader
          withIcon={true}
          withPreview={true}
          buttonText="Upload images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg "
          onClick={this.search}
          style={{ marginLeft: "150px", marginTop: "10px" }}
        >
          Search
        </button>
      </div>
    );
  }
}
export default Image;
