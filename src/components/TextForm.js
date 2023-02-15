import { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const [Space, setSpace] = useState(0);
    const HandleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const HandleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    const RemoveExtraSpace = async () => {
        try {
            let newText = await Promise.resolve(text.trim().replace(/\s+/g, ' '));
            setText(newText);

            let spaceNum = await Promise.resolve(text.split(' ').length - 1);
            setSpace(spaceNum);
        } catch (error) {
            console.error(error);
        }
    }
    const handelOnChange = (e) => {
        setText(e.target.value)
        let spaceNum = text.split(' ').length - 1;
        if (spaceNum) {
            setSpace(spaceNum);
        }
    }
    return (
        <div>
            <div className="mb-3">
                <h1 className='my-3'>{props.heading}</h1>
                <textarea className="form-control" id="form-control" rows="8" value={text
                } onChange={handelOnChange} placeholder="Enter text here..." style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick={HandleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary m-2" onClick={HandleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary m-2" onClick={RemoveExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-danger m-2" onClick={HandleClearClick}>Clear Textarea</button>
            <hr />
            <h3 className='my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Here Is Summary Of Your Content </h3>
            <div className="mb-3 row text-primary container">
                <div className='bg-light row border py-2 rounded justify-content-center'>
                    <label htmlFor="numberOfWords" className="col-sm-3 col-md-2 col-form-label text-center px-0">Word Count :</label>
                    <div className="col-sm-2  border-end  border-secondary">
                        <input type="text" readOnly className="form-control-plaintext border border-sccess rounded text-center bg-success text-light" id="numberOfWords" value={text.split(' ').length} />
                    </div>
                    <label htmlFor="numberOfSpaces" className="col-sm-3 col-md-2 col-form-label text-center px-0">Spaces :</label>
                    <div className="col-sm-2  border-end  border-secondary text-center">
                        <input type="text" readOnly className="form-control-plaintext border border-sccess rounded text-center bg-success text-light" id="numberOfSpaces" onChange={handelOnChange} value={Space} />
                    </div>
                    <label htmlFor="numberOfCharacters" className="col-sm-3 col-md-2  col-form-label text-center px-0">Charecters :</label>
                    <div className="col-sm-2">
                        <input type="text" readOnly className="form-control-plaintext border border-sccess rounded text-center bg-success text-light" id="numberOfCharacters" value={text.length} />
                    </div>
                </div>
            </div>
            <hr />

            <div className="container mt-3">

                <h2>Text Preview</h2>
                <p className='p-2 bg-light text-success'>Reading Time : {(0.008 * text.split(' ').length).toFixed(2)} Minutes</p>
                <p className='mb-5' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : 'Enter something to preview it here'}</p>
            </div>
            <hr />
        </div>
    )
}