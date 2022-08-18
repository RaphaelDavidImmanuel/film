import { Card, Container, Row, Col, Image } from "react-bootstrap"
import avengersImg from "../assets/img/marvel/avengers.jpg"
import captainImg from "../assets/img/marvel/captain.jpg"
import guardiansImg from "../assets/img/marvel/guardians.png"
import thorImg from "../assets/img/marvel/thor.jpg"
import shangchiImg from "../assets/img/marvel/shangchi.jpg"
import spiderImg from "../assets/img/marvel/spider.jpg"

const Superhero = () => {
    return (
    <div>
        <Container>
            <br/>
            <h1 className="text-white">SUPERHERO MOVIES</h1>
            <br/>
            <Row>
                <Col md={4} className="moviewrapper" id="superhero">
                <Card className="movieimage">
                <Image src={avengersImg} alt="Minions" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">AVENGERS INFINITY WAR</Card.Title>
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
                <Image src={captainImg} alt="Call" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">CAPTAIN AMERICA</Card.Title>
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
                <Image src={guardiansImg} alt="Capitan" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">GUARDIANS OF THE GALAXY</Card.Title>
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
                <Image src={thorImg} alt="John" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">THOR RAGNAROK</Card.Title>
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
                <Image src={shangchiImg} alt="Star" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">SHANG-CHI</Card.Title>
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
                <Image src={spiderImg} alt="Wanda" className="images"></Image>
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">SPIDER-MAN HOME COMING</Card.Title>
                        <Card.Text className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra laoreet tortor, vel interdum purus tempus sit amet.
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

export default Superhero