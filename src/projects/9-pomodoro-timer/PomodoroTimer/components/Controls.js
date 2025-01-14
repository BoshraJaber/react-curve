import { useState } from 'react';
import Pomodoro from './PomodoroTimer';
import Header from './Header'
import styled from 'styled-components';



const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",

    // or we can define dynamic ones
    size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;


export default function Control() {
    const [start, setStart] = useState(false)
    const [time, setTime] = useState({
        focus: 25,
        break: 5
    })
    function handleStart() {
        setStart((prev => !prev))
    }

    function handleFocusTime(e) {
        const focusTime = e.target.value;
        setTime({ ...time, focus: focusTime });
    }
    function handleBreakTime(e) {
        const breakTime = e.target.value;
        setTime({ ...time, break: breakTime });
    }
    return (
        <>
            <Header />
            <div className="form">
                <div>
                    <Input placeholder="Focus Time:(In minutes)" onChange={handleFocusTime} />
                    <Input placeholder="Break Time: In minutes" onChange={handleBreakTime} />
                </div>
                <Button onClick={handleStart}>{start ? 'Stop' : 'Start'}</Button>
            </div>
            {
                start && <Pomodoro time={time} />
            }

        </>
    )
}