import { useState } from 'react'
export default function Textform(prop) {
    const [text, setText] = useState('Enter text here...');
    const HandleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleClearClick = () => {
        let newText = 'Enter text here...';
        setText(newText)
    }
    const handelOnChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <div className="mb-3">
                <h1 className='my-3'>{prop.heading}</h1>
                <textarea className="form-control" id="form-control" rows="8" value={text
                } onChange={handelOnChange}></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick={HandleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary m-2" onClick={HandleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-danger m-2" onClick={HandleClearClick}>Clear Textarea</button>
            <hr />
            <div className="mb-3 row text-primary container ">
                <div className='bg-light row border py-2 rounded justify-content-center'>
                    <label htmlFor="numberOfWords" className="col-sm-3 col-md-2 col-form-label text-center px-0">Word Count :</label>
                    <div className="col-sm-2  border-end  border-secondary">
                        <input type="text" readOnly className="form-control-plaintext border border-sccess rounded text-center bg-success text-light" id="numberOfWords" value="45" />
                    </div>
                    <label htmlFor="numberOfSpaces" className="col-sm-3 col-md-2 col-form-label text-center px-0">Spaces :</label>
                    <div className="col-sm-2  border-end  border-secondary text-center">
                        <input type="text" readOnly className="form-control-plaintext border border-sccess rounded text-center bg-success text-light" id="numberOfSpaces" value="45" />
                    </div>
                    <label htmlFor="numberOfCharacters" className="col-sm-3 col-md-2  col-form-label text-center px-0">Charecters :</label>
                    <div className="col-sm-2">
                        <input type="text" readOnly className="form-control-plaintext border border-sccess rounded text-center bg-success text-light" id="numberOfCharacters" value="45" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}