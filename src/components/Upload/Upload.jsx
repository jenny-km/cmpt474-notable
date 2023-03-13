import React, {useState} from "react";
import './Upload.css';
import Navbar from '../Navbar/Navbar';


export const Upload = (props) => {
    const[title, setTitle] = useState('');
    const[university, setUniversity] = useState('');
    const[course, setCourse] = useState('');
    const[selectedFile, setSelectedFile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        // body
        <div>
            {/* top bar */}
            <Navbar/>
            <div>
                <form className="upload-form" onSubmit={handleSubmit}>
                    <div className="flex-container">
                    <div className="flex-child">
                        <label className="upload-labels" for="title">Document Title:</label>
                        <br/>
                        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" id="title" className="upload-input"/>
                        <br/>
                        <br/>
                        <label className="upload-labels" for="university">University:</label>
                        <br/>
                        <input value={university} onChange={(e)=> setUniversity(e.target.value)} type="text" className="upload-input"/>
                        <br/>
                        <br/>
                        <label className="upload-labels" for="course">Course:</label>
                        <br/>
                        <input value={course} onChange={(e)=> setCourse(e.target.value)} type="text" className="upload-input"/>
                    </div>

                    <div className="flex-child">
                        <label className="upload-labels" for="Upload">Choose Your File:</label>
                        <br/>
                        <div className="upload-button-container">
                            <button className="button upload-button">Upload</button>
                        </div>
                        <br/>
                        <label className="upload-labels" for="selected-file">Selected File:</label>
                        <br/>
                        <input value={selectedFile} onChange={(e)=> setSelectedFile(e.target.value)} type="text" className="upload-filename" disabled/>
                        <br/>
                        <br/>
                        <br/>
                        <button className="button" type="submit">Submit</button>
                    </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Upload;