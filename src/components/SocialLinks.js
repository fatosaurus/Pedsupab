import react from 'react';
import { useState, } from 'react';

function SocialLinks({ getSocialLinks }) {

    const [socialLinks, setsocialLinks] = useState([])
    const language = localStorage.getItem('language');

    // useEffect(() => {


    //     AssignmentData()

    // }, []);

    const [inputFields, setInputFields] = useState([
        { socialMediaLinks: '' }
    ])

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
        console.log(data);
        getSocialLinks(data);

    }

    const addFields = (e) => {
        e.preventDefault();
        let newfield = { socialMediaLinks: '' }
        setInputFields([...inputFields, newfield])
    }



    return (
        <div className="App">
            {inputFields.length > 0 ? inputFields.map((input, index) => (
                <div className='mb-3'>
                    <label htmlFor='social-media-links' className='form-label'>
                       {language == 'EN' ? 'Your Social Media Links' : 'โซเชีบลมีเดียของท่าน'} 
                    </label>
                    <input
                        type='text'
                        id='social-media-links'
                        className='form-control'
                        // name='social_media_links'
                        name='socialMediaLinks'
                        // value={values.socialMediaLinks}
                        onChange={event => handleFormChange(index, event)}
                    // onBlur={handleBlur}
                    />

                </div>



            )) : "No Social Links added"}
            <button style={{ color: "red", fontSize: "15px", float: "right" }} onClick={addFields}>Add More..</button>
        </div>
    );
}

export default SocialLinks;