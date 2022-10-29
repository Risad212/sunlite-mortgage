import React, {Component} from 'react';

class Form extends Component {
    formInfo = {
        fname: '',
        lname: '',
        email: '',
        number: '',
        companyName: '',
        message: ''
    };

    // handle the value
    handleCHange = input => e => {
        this.setFormInfo({[input]: e.target.value});
    }

    // when submit btn is clicked
    submitForm = (e) => {
        const {fname,lname, email, message, number, companyName,} = this.state;
        e.preventDefault();
    }

    render(){
        const {fname,lname, email, message, number, companyName,} = this.state;
        return(
            <div className="formBlock" onSubmit={this.submitForm}>
                {emailStatus ? emailStatus : null}
                <Form action="#">
                    <Form.Group className="mb-1" controlId="formBasicFName">
                        <Form.Label>First Name<span className='required'>*</span></Form.Label>
                        <Form.Control type="text" value={fname} placeholder="" name="user_Fname" onChange={handleOnChange('fname')}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicLName">
                        <Form.Label>Last Name<span className='required'>*</span></Form.Label>
                        <Form.Control type="text" value={lname}placeholder="" name="lname" onChange={handleOnChange('lname')}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email<span className='required'>*</span></Form.Label>
                        <Form.Control type="email" value={email}placeholder="" name="user_email" onChange={handleOnChange}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicNumber">
                        <Form.Label>Contact Number<span className='required'>*</span></Form.Label>
                        <Form.Control type="tel" value={number}placeholder="(506) 234-5678" name="user_number" onChange={handleOnChange}/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicOrganizationName">
                        <Form.Label>Your Organization</Form.Label>
                        <Form.Control type="text" value={companyName}placeholder="" name="user_companyName" onChange={handleOnChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} value={message}name="user_message" onChange={handleOnChange}/>
                    </Form.Group>

                    <div className="formBtn">
                        <input className='button' type="submit" value="Submit" />
                    </div>
                </Form>
            </div>
        );
    }
}

export default Form;