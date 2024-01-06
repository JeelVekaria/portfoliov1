import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/Avatar.png"
import { useState, useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    // Determines how fast each letter appears after each letter is typed
    const [delta, setDelta] = useState(300-Math.random() * 100);
    const period = 1000;

    // delta is the iterval when tick is going off
    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        }, delta)
        // once we set the interval, we need to clear it
        return () => { clearInterval(ticker)};
    }, [text])

    // i keeps increasing, so to go back to first element of toRotate we use mod of its length
    const tick = () => {
        let i = loopNum % toRotate.length;
        // fullText is the element in the array
        let fullText = toRotate[i];
        // if current state is deleting, get full text and get its substring 1 letter less than current,
        // else if it isnt deleting, we add 1 letter to get closer to the full text
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

        // set text on screen to be the updated text
        setText(updatedText);

        if(isDeleting) {
            // cuts delta speed in half
            setDelta(prevDelta => prevDelta /2)
        }

        // if has reached full text
        if (!isDeleting && updatedText === fullText) {
            // start deleting and reset delta speed back to normal pace
            setIsDeleting(true);
            setDelta(period);
        }

        // if it is deleting and that the text is completely empty, and updates loop to move to the next text
        else if(isDeleting && updatedText === ''){
            // stop deleting, and start adding text by increasing loopNum to +1
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(200);
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>
                            {`Hi I'm Jeel, a `}<span className="wrap">{text}</span>
                        </h1>
                        <p>I'm a 2nd year computer science student at Toronto Metropolitan University</p>
                        <a href="https://linktr.ee/jeelvekaria">
                            <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}