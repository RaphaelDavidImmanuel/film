import { Card, Container, Row, Col, Image } from "react-bootstrap"
import minionsImg from "../assets/img/trending/minions.jpg"
import callImg from "../assets/img/trending/call.jpg"
import capitanImg from "../assets/img/trending/capitan.jpg"
import johnImg from "../assets/img/trending/john.jpg"
import starImg from "../assets/img/trending/star.jpg"
import wandaImg from "../assets/img/trending/wanda.jpg"

const Trending = () => {
    return (
    <div>
        <Container>
            <br/>
            <h1 className="text-white">TRENDING MOVIES</h1>
            <br/>
            <Row>
                <Col md={4} className="moviewrapper" id="trending">
                <Card className="movieimage">
                <Image src={minionsImg} alt="Minions" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Minions THE RISE OF GRU</Card.Title>
                        <Card.Text className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra laoreet tortor, vel interdum purus tempus sit amet.
                        </Card.Text>
                        <Card.Text className="text-left">Last update 10 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>

                <Col md={4} className="moviewrapper">
                <Card className="movieimage">
                <Image src={callImg} alt="Call" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">THE CALL</Card.Title>
                        <Card.Text className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra laoreet tortor, vel interdum purus tempus sit amet.
                        </Card.Text>
                        <Card.Text className="text-left">Last update 10 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>

                <Col md={4} className="moviewrapper">
                <Card className="movieimage">
                <Image src={capitanImg} alt="Capitan" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">INTO THE WOODS</Card.Title>
                        <Card.Text className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra laoreet tortor, vel interdum purus tempus sit amet.
                        </Card.Text>
                        <Card.Text className="text-left">Last update 10 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>

                <Col md={4} className="moviewrapper">
                <Card className="movieimage">
                <Image src={johnImg} alt="John" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">JOHN WICK CHAPTER 3</Card.Title>
                        <Card.Text className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra laoreet tortor, vel interdum purus tempus sit amet.
                        </Card.Text>
                        <Card.Text className="text-left">Last update 10 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>

                <Col md={4} className="moviewrapper">
                <Card className="movieimage">
                <Image src={starImg} alt="Star" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">THE STAR</Card.Title>
                        <Card.Text className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra laoreet tortor, vel interdum purus tempus sit amet.
                        </Card.Text>
                        <Card.Text className="text-left">Last update 10 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>

                <Col md={4} className="moviewrapper">
                <Card className="movieimage">
                <Image src={wandaImg} alt="Wanda" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">DOCTOR STRANGE MULTIVERSE OF MADNESS</Card.Title>
                        <Card.Text className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Card.Text>
                        <Card.Text className="text-left">Last update 10 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Trending