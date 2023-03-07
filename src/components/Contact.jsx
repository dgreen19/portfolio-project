import React, { useState } from 'react';
import styled from 'styled-components';

const env = process.env;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (response.ok) {
    console.log('Email sent successfully.');
    setName('');
    setEmail('');
    setMessage('');
  } else {
    console.log('Something went wrong.');
    }
  };

  return (
		<div>
			<FormContainer onSubmit={handleSubmit}>
				<Input
					type="text"
					name="name"
					placeholder="Name"
					value={name}
					onChange={(event) => setName(event.target.value)}
					required
				/>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					required
				/>
				<TextArea
					name="message"
					placeholder="Message"
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					required
				/>
				<SubmitButton type="submit">Submit</SubmitButton>
			</FormContainer>
		</div>
	);
};

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
`;

const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin: 10px 0;
	border-radius: 5px;
	border: none;
	background-color: #f2f2f2;
	font-size: 1rem;
	outline: none;
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 150px;
	padding: 10px;
	margin: 10px 0;
	border-radius: 5px;
	border: none;
	background-color: #f2f2f2;
	font-size: 1rem;
	outline: none;
`;

const SubmitButton = styled.button`
	background-color: #4caf50;
	color: #fff;
	font-size: 1rem;
	border-radius: 5px;
	border: none;
	padding: 10px 20px;
	margin-top: 20px;
	cursor: pointer;
	outline: none;

	&:hover {
		background-color: #3e8e41;
	}
`;


