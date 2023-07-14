import axios from 'axios';
import { useEffect, useState } from 'react';

export const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [alertText, setAlertText] = useState('');
  const [alertStyle, setAlertStyle] = useState({});
  const [btnCursor, setCursor] = useState('');
  const [btnDisable, setDisabled] = useState(false);

  const submitMessage = () => {
    axios
      .post(
        'https://draftboys-server-temp-e4eebd8e7c2f.herokuapp.com/api/contact/create',
        {
          firstName: firstName,
          lastName: lastName,
          email: userEmail,
          message: userMessage,
          contactDate: new Date().toLocaleDateString(),
        }
      )
      .then((res) => {
        console.log(res);
        setAlertText('Message Submitted!');
        fadeOutAlert('rgba(51, 185, 78, 1)', 'green');
        setCursor('not-allowed');
        setDisabled(true);

        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      })
      .catch((err) => {
        setAlertText(err.response.data.error);
        fadeOutAlert('rgba(245, 0, 0, 1)', 'red');
      });
  };

  const fadeOutAlert = (background: string, border: string) => {
    setAlertStyle({
      display: 'flex',
      opacity: '1',
      backgroundColor: background,
      borderColor: border,
    });

    setTimeout(() => {
      setAlertStyle({
        display: 'flex',
        opacity: '0',
        backgroundColor: background,
        borderColor: border,
        transition: 'opacity .75s linear',
      });
    }, 750);

    setTimeout(() => {
      setAlertStyle({
        display: 'none',
      });
    }, 1500);
  };

  useEffect(() => {
    document.title = `DRAFTBOYS - Contact`;
  }, []);

  return (
    <div id='contact-container'>
      <h1>Contact</h1>
      <p>Have any questions or care to chat? Don't hesitate to reach out!</p>

      <div id='form-container'>
        <span style={alertStyle}>{alertText}</span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitMessage();
          }}
        >
          <div id='name-container'>
            <div id='first-name-container'>
              <label htmlFor='first-name'>First Name</label>
              <input
                type='text'
                id='first-name'
                placeholder='First Name'
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              ></input>
            </div>
            <div id='last-name-container'>
              <label htmlFor='last-name'>Last Name</label>
              <input
                type='text'
                id='last-name'
                placeholder='Last Name'
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              ></input>
            </div>
          </div>
          <div id='email-message-container'>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                placeholder='Email'
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                required
              ></input>
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea
                placeholder='Message...'
                id='message'
                onChange={(e) => {
                  setUserMessage(e.target.value);
                }}
                required
              ></textarea>
            </div>
          </div>
          <button
            disabled={btnDisable}
            style={{ cursor: `${btnCursor}` }}
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
