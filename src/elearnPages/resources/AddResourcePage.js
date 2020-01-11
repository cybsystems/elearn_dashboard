import React, { Component } from 'react';
import Page from '../../components/Page';
import { DropzoneArea } from 'material-ui-dropzone';

export default class AddResourcePage extends Component {
  state = { files: [], fileName: '' };
  addResource = () => {
    console.log('====================================');
    console.log(this.state.files);
    console.log('====================================');
  };
  onFileUpload = files => this.setState({ files: files });
  onFileNameChange = evt => this.setState({ fileName: evt.target.value });

  render() {
    const { files, fileName } = this.state;
    return (
      <React.Fragment>
        <Page
          className="DashbardPage"
          title="Add Resources"
          breadcrumbs={[{ name: 'Add Resources', active: true }]}
        >
          <div className="card">
            <div className="card-header cardHeader">Add Resource</div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <input
                    type="text"
                    placeholder="Enter Resource Name"
                    className="form-control"
                    value={fileName}
                    onChange={this.onFileNameChange}
                    style={{ fontSize: 13 }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12">
                  <DropzoneArea
                    dropzoneParagraphClass="dropzoneClass"
                    dropzoneText="Drag and Drop video or pdf files"
                    onChange={this.onFileUpload}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div style={{ float: 'right' }}>
                    <button
                      
                      disabled={
                        !files.length || !fileName || !fileName.trim().length
                      }
                      className="btn smbtn btn-sm"
                      onClick={this.addResource}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Page>
      </React.Fragment>
    );
  }
}
